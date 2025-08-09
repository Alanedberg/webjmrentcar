#!/usr/bin/env python3
import argparse
from pathlib import Path
from PIL import Image
import concurrent.futures
import sys
import math

# ====== CONFIGURA AQUÍ ======
DEFAULT_SOURCE = Path(r"C:\\xampp\\htdocs\\JMRentCar\assets\\img\\vehiculos")  # <- cambia esto a tu carpeta
DEFAULT_QUALITY = 80
DEFAULT_LOSSLESS = False
DEFAULT_MAX_DIMENSION = 1200  # 0 = sin redimensionar
DEFAULT_WORKERS = 4
DEFAULT_OVERWRITE = False
DEFAULT_DRY_RUN = False
# ============================

def human_readable(size: int) -> str:
    for unit in ['B','KB','MB','GB','TB']:
        if size < 1024:
            return f"{size:.1f}{unit}"
        size /= 1024
    return f"{size:.1f}PB"

def convert_png_to_webp(png_path: Path, quality: int, lossless: bool,
                        max_dim: int, overwrite: bool) -> None:
    webp_path = png_path.with_suffix(".webp")

    try:
        src_mtime = png_path.stat().st_mtime
        if webp_path.exists() and not overwrite:
            dest_mtime = webp_path.stat().st_mtime
            if dest_mtime >= src_mtime:
                print(f"[SKIP] '{png_path}' -> ya convertido y actualizado.")
                return

        with Image.open(png_path) as im:
            if max_dim:
                width, height = im.size
                max_current = max(width, height)
                if max_current > max_dim:
                    scale = max_dim / max_current
                    new_size = (math.floor(width * scale), math.floor(height * scale))
                    im = im.resize(new_size, Image.LANCZOS)

            save_kwargs = {}
            if lossless:
                save_kwargs["lossless"] = True
            else:
                save_kwargs["quality"] = quality
            save_kwargs["method"] = 4  # compresión balanceada

            im.save(webp_path, "WEBP", **save_kwargs)

        orig_size = png_path.stat().st_size
        new_size = webp_path.stat().st_size
        reduction = (1 - new_size / orig_size) * 100 if orig_size > 0 else 0
        print(f"[OK] '{png_path.name}' → '{webp_path.name}': {human_readable(orig_size)} → {human_readable(new_size)} ({reduction:.1f}% menos)")
    except Exception as e:
        print(f"[ERROR] al procesar '{png_path}': {e}")

def gather_pngs(base: Path):
    return list(base.rglob("*.png"))

def main():
    parser = argparse.ArgumentParser(
        description="Convierte recursivamente PNG a WebP optimizado en la misma carpeta. Usa los valores por defecto si no se pasan."
    )
    parser.add_argument("-s", "--source", type=Path, default=DEFAULT_SOURCE,
                        help=f"Carpeta raíz donde buscar PNG. Por defecto: {DEFAULT_SOURCE}")
    parser.add_argument("-q", "--quality", type=int, default=DEFAULT_QUALITY,
                        help=f"Calidad para WebP (0-100), solo si no es lossless. Default={DEFAULT_QUALITY}.")
    parser.add_argument("-l", "--lossless", action="store_true" if not DEFAULT_LOSSLESS else "store_false",
                        help=f"Usar WebP lossless en lugar de compresión con pérdida. Default={DEFAULT_LOSSLESS}.")
    parser.add_argument("-m", "--max-dimension", type=int, default=DEFAULT_MAX_DIMENSION,
                        help=f"Redimensiona el lado mayor a este valor si es más grande. Default={DEFAULT_MAX_DIMENSION}.")
    parser.add_argument("-w", "--workers", type=int, default=DEFAULT_WORKERS,
                        help=f"Número de hilos concurrentes. Default={DEFAULT_WORKERS}.")
    parser.add_argument("--overwrite", action="store_true" if not DEFAULT_OVERWRITE else "store_false",
                        help=f"Reconvertir aunque ya exista WebP más reciente. Default={DEFAULT_OVERWRITE}.")
    parser.add_argument("--dry-run", action="store_true" if not DEFAULT_DRY_RUN else "store_false",
                        help=f"No guarda nada, solo muestra qué haría. Default={DEFAULT_DRY_RUN}.")
    args = parser.parse_args()

    # Ajuste de flags invertidos si los defaults eran True
    lossless = not args.lossless if DEFAULT_LOSSLESS else args.lossless
    overwrite = not args.overwrite if DEFAULT_OVERWRITE else args.overwrite
    dry_run = not args.dry_run if DEFAULT_DRY_RUN else args.dry_run

    if not args.source.is_dir():
        print(f"La ruta de origen '{args.source}' no es una carpeta válida.", file=sys.stderr)
        sys.exit(1)

    pngs = gather_pngs(args.source)
    if not pngs:
        print("No se encontraron archivos .png en la carpeta especificada.")
        return

    print(f"Convertir {len(pngs)} PNG(s) en '{args.source}' → WebP "
          f"(quality={args.quality} {'lossless' if lossless else 'con pérdida'} "
          f"max_dim={args.max_dimension or 'sin cambio'})")

    if dry_run:
        for p in pngs:
            webp_path = p.with_suffix(".webp")
            print(f"[DRY] '{p}' -> '{webp_path}'")
        return

    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = []
        for p in pngs:
            futures.append(executor.submit(
                convert_png_to_webp,
                p,
                args.quality,
                lossless,
                args.max_dimension,
                overwrite
            ))
        for fut in concurrent.futures.as_completed(futures):
            pass

if __name__ == "__main__":
    main()

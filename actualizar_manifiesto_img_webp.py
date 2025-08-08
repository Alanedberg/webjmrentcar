#!/usr/bin/env python3
import json
from pathlib import Path
import argparse

def generar_manifest_secuencial(base_dir: Path, ext: str = "webp", output: Path | None = None):
    if output is None:
        output = base_dir / "manifest.json"

    manifest: dict = {}

    for carpeta in sorted(base_dir.iterdir()):
        if not carpeta.is_dir():
            continue
        imgs = []
        i = 1
        while True:
            nombre = f"{i}.{ext}"
            ruta = carpeta / nombre
            if ruta.exists():
                imgs.append(nombre)
                i += 1
            else:
                break  # se asume secuencia sin saltos, se detiene en el primer faltante
        if imgs:
            manifest[carpeta.name] = imgs

    output.parent.mkdir(parents=True, exist_ok=True)
    with open(output, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)

    # resumen
    print(f"Manifest generado en: {output}")
    for carpeta, lista in manifest.items():
        print(f"  - {carpeta}: {len(lista)} foto{'s' if len(lista) != 1 else ''} -> {lista}")
    return manifest

def parse_args():
    parser = argparse.ArgumentParser(
        description="Genera manifest.json para imágenes numeradas secuencialmente en subcarpetas."
    )
    parser.add_argument(
        "-b", "--base",
        type=Path,
        default=Path("assets/img/vehiculos"),
        help="Carpeta raíz con subcarpetas de vehículos."
    )
    parser.add_argument(
        "-e", "--extension",
        type=str,
        default="webp",
        help="Extensión de las imágenes (sin el punto), por defecto 'webp'."
    )
    parser.add_argument(
        "-o", "--out",
        type=Path,
        default=None,
        help="Ruta de salida para manifest.json (por defecto en la carpeta base)."
    )
    return parser.parse_args()

if __name__ == "__main__":
    args = parse_args()
    generar_manifest_secuencial(args.base, ext=args.extension.lower(), output=args.out)

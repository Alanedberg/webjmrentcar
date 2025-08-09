#!/usr/bin/env python3
from pathlib import Path
import shutil
import sys

# === CONFIGURA AQUÍ ===
SOURCE_ROOT = Path(r"C:\\xampp\\htdocs\\JMRentCar\\assets\\img\\vehiculos")   # <- carpeta raíz con subcarpetas que contienen 1.webp
DEST_ROOT = Path(r"C:\xampp\\htdocs\\JMRentCar\\img\\negocio")     # <- donde se copiarán los archivos renombrados
OVERWRITE = False  # poner True para forzar sobrescritura si ya existe
# =======================

def main():
    if not SOURCE_ROOT.is_dir():
        print(f"Error: la fuente '{SOURCE_ROOT}' no es una carpeta válida.", file=sys.stderr)
        sys.exit(1)
    DEST_ROOT.mkdir(parents=True, exist_ok=True)

    subdirs = [p for p in sorted(SOURCE_ROOT.iterdir()) if p.is_dir()]
    if not subdirs:
        print(f"No se encontraron subcarpetas en '{SOURCE_ROOT}'.")
        return

    total = 0
    copiados = 0
    for sub in subdirs:
        total += 1
        source_file = sub / "1.webp"
        if not source_file.exists():
            print(f"[SALTEADO] No existe '1.webp' en '{sub.name}'.")
            continue

        target_name = f"{sub.name}.webp"
        target_path = DEST_ROOT / target_name

        if target_path.exists() and not OVERWRITE:
            print(f"[SALTEADO] '{target_name}' ya existe en destino (habilita OVERWRITE para forzar).")
            continue

        try:
            shutil.copy2(source_file, target_path)
            print(f"[COPIADO] '{source_file}' → '{target_path.name}'")
            copiados += 1
        except Exception as e:
            print(f"[ERROR] al copiar de '{source_file}' a '{target_path}': {e}", file=sys.stderr)

    print(f"\nResumen: {copiados} de {total} subcarpetas procesadas. Archivos copiados: {copiados}.")

if __name__ == "__main__":
    main()

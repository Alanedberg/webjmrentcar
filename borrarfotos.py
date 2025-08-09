#!/usr/bin/env python3
from pathlib import Path
import sys

# --------- CONFIGURA AQUÍ (o pásalo como argumento) ----------
# Si no pasas ruta por línea de comandos, se usará esta:
PATH_TO_SCAN = Path(r"C:\\xampp\\htdocs\\JMRentCar\\assets\\img\\vehiculos")  # <- cambia esto
DRY_RUN = False           # True para simular sin borrar
CONFIRM_BEFORE_DELETE = True  # pide confirmación
USE_TRASH = True          # si tienes send2trash lo usará; si no, borra directo
# ------------------------------------------------------------

# intentar cargar send2trash si se pidió usar papelera
send2trash = None
if USE_TRASH:
    try:
        from send2trash import send2trash  # type: ignore
    except ImportError:
        print("Advertencia: 'send2trash' no está instalado, se borrará directamente.", file=sys.stderr)
        send2trash = None

def gather_pngs(base: Path):
    return list(base.rglob("*.png"))  # busca recursivamente archivos .png

def delete_file(p: Path):
    if send2trash:
        send2trash(str(p))
    else:
        p.unlink()

def main():
    # si se pasa primer argumento, lo toma como ruta
    if len(sys.argv) > 1:
        base = Path(sys.argv[1])
    else:
        base = PATH_TO_SCAN

    if not base.is_dir():
        print(f"Error: '{base}' no es una carpeta válida.", file=sys.stderr)
        sys.exit(1)

    pngs = gather_pngs(base)
    if not pngs:
        print(f"No se encontraron .png en '{base}'.")
        return

    print(f"Encontrados {len(pngs)} archivos .png en '{base}':")
    for p in pngs:
        print("  -", p)

    if DRY_RUN:
        print("\n[DRY RUN] No se eliminará nada.")
        return

    if CONFIRM_BEFORE_DELETE:
        resp = input(f"\n¿Eliminar {len(pngs)} .png? (s/n): ").strip().lower()
        if resp not in ("s", "si", "y", "yes"):
            print("Cancelado.")
            return

    eliminados = 0
    for p in pngs:
        try:
            delete_file(p)
            print(f"[ELIMINADO] {p}")
            eliminados += 1
        except Exception as e:
            print(f"[ERROR] no se pudo eliminar {p}: {e}", file=sys.stderr)

    print(f"\nTotal eliminados: {eliminados}/{len(pngs)}")

if __name__ == "__main__":
    main()

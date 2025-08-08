import qrcode

# URL que deseas codificar
url = "https://espinalrentcar.com/contactos.html"  # Puedes cambiar esta URL

# Crear el objeto QR
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # Nivel alto de corrección de errores
    box_size=10,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

# Generar imagen
img = qr.make_image(fill_color="black", back_color="white")

# Guardar como archivo PNG
img.save("EspinalRentCar_contactos.png")

print("✅ QR generado correctamente: qr_tusitio.png")

document.addEventListener("DOMContentLoaded", () => {
 const testimonios = [
  {
    foto: "assets/img/testimonios/testimonio1.png",
    texto: "¡El servicio fue excelente! Reservé por WhatsApp y todo fue rápido.",
    autor: "Laura G., Santiago"
  },
  {
    foto: "assets/img/testimonios/testimonio2.png",
    texto: "Me entregaron el carro en el aeropuerto sin costo extra. Muy recomendados.",
    autor: "Juan P., Santo Domingo"
  },
  {
    foto: "assets/img/testimonios/testimonio3.png",
    texto: "Reservé desde el extranjero y todo fue puntual. Excelente atención 24/7.",
    autor: "Pedro H., Nueva York"
  },
  {
    foto: "assets/img/testimonios/testimonio4.png",
    texto: "Vehículos nuevos y limpios. El personal siempre atento y amable.",
    autor: "Carlos D., Puerto Plata"
  },
  {
    foto: "assets/img/testimonios/testimonio5.png",
    texto: "Precios claros, sin sorpresas ni cargos ocultos. Volvería a alquilar con ellos.",
    autor: "Patricia S., La Vega"
  },
  {
    foto: "assets/img/testimonios/testimonio6.png",
    texto: "Tuve un imprevisto y me ayudaron rápido por teléfono. ¡Un 10/10!",
    autor: "Edward F., Punta Cana"
  }
];


  // Mezcla aleatoria
  testimonios.sort(() => Math.random() - 1);

  const cont = document.getElementById("contenedorTestimonios");
  cont.innerHTML = "";

  testimonios.forEach((t, i) => {
    const activo = i === 0 ? "active" : "";
    const item = document.createElement("div");
    item.className = `carousel-item ${activo}`;
    item.innerHTML = `
      <div class="testimonial-card-sm">
        <img src="${t.foto}" alt="${t.autor}" class="avatar-sm">
        <p class="comment">“${t.texto}”</p>
        <div class="author">${t.autor}</div>
      </div>
    `;
    cont.appendChild(item);
  });
});

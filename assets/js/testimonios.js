document.addEventListener("DOMContentLoaded", () => {
  const testimonios = [
    {
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      texto: "¡Excelente servicio! Todo fue muy rápido por WhatsApp. El carro estaba impecable y me dieron las mejores recomendaciones locales.",
      autor: "Laura G.",
      ciudad: "Santiago, R.D."
    },
    {
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      texto: "Me entregaron el vehículo en el aeropuerto de Santo Domingo sin cargos sorpresa. El proceso de entrega y devolución fue súper ágil.",
      autor: "Juan P.",
      ciudad: "Santo Domingo, R.D."
    },
    {
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      texto: "Viajo constantemente a RD y siempre alquilo con ellos. Reservar desde el extranjero es fácil y la atención 24/7 da mucha tranquilidad.",
      autor: "Pedro H.",
      ciudad: "Nueva York, EE.UU."
    },
    {
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      texto: "Tienen una flota muy moderna y limpia. El trato de Jose Miguel y su equipo fue excepcional de principio a fin. 100% recomendados.",
      autor: "Carlos D.",
      ciudad: "Puerto Plata, R.D."
    },
    {
      foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      texto: "Lo que más me gustó fue la transparencia. Los precios que te cotizan son los reales, sin depósitos excesivos ni sorpresas.",
      autor: "Patricia S.",
      ciudad: "La Vega, R.D."
    },
    {
      foto: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
      texto: "Tuve un pequeño contratiempo con mi vuelo y me esperaron pacientemente para entregarme el vehículo. Servicio al cliente de primer nivel.",
      autor: "Edward F.",
      ciudad: "Punta Cana, R.D."
    },
    {
      foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      texto: "Alquilar esta vez con ellos fue la mejor decisión para nuestro viaje familiar. Súper puntuales y el vehículo súper cómodo.",
      autor: "Sofía M.",
      ciudad: "Boston, EE.UU."
    },
    {
      foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
      texto: "Excelente relación calidad-precio. Vehículos en perfectas condiciones mecánicas y un trato muy familiar y cercano.",
      autor: "Roberto T.",
      ciudad: "Santiago, R.D."
    }
  ];

  // Mezcla aleatoria
  testimonios.sort(() => Math.random() - 0.5);

  const cont = document.getElementById("contenedorTestimonios");
  if (!cont) return;
  cont.innerHTML = "";

  testimonios.forEach((t, i) => {
    const activo = i === 0 ? "active" : "";
    const item = document.createElement("div");
    item.className = `carousel-item ${activo}`;
    item.innerHTML = `
      <div class="testimonial-card-sm">
        <i class="bi bi-quote quote-icon"></i>
        <img src="${t.foto}" alt="${t.autor}" class="avatar-sm" onerror="this.src='assets/img/icojmrentcar.ico'">
        <div class="stars">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
        <p class="comment">“${t.texto}”</p>
        <div class="author">${t.autor}</div>
        <div class="location">${t.ciudad}</div>
      </div>
    `;
    cont.appendChild(item);
  });
});

// ---------------------------------------------------------
// Inicializar animaciones AOS
// ---------------------------------------------------------
AOS.init({
  duration: 1500,
  once: true
});

// ---------------------------------------------------------
// Animación de contador numérico
// ---------------------------------------------------------
const contadores = document.querySelectorAll('.contador');

const activarContadores = () => {
  contadores.forEach(contador => {
    const actualizar = () => {
      const target = +contador.getAttribute('data-target');
      const actual = +contador.innerText;
      const incremento = target / 100;

      if (actual < target) {
        contador.innerText = Math.ceil(actual + incremento);
        setTimeout(actualizar, 60);
      } else {
        contador.innerText = target;
      }
    };
    actualizar();
  });
};

if (contadores.length > 0) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activarContadores();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  contadores.forEach(contador => observer.observe(contador));
}

// ---------------------------------------------------------
// Botón "Volver arriba"
// ---------------------------------------------------------
const btnSubir = document.getElementById('btnSubir');

if (btnSubir) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      btnSubir.classList.add('show');
    } else {
      btnSubir.classList.remove('show');
    }
  }, { passive: true });

  btnSubir.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------------------------------------------------------
// Mostrar/ocultar widget de redes sociales al hacer scroll
// ---------------------------------------------------------
const socialScroll = document.getElementById('social-scroll');

if (socialScroll) {
  window.addEventListener('scroll', () => {
    const isMobile = window.innerWidth < 992;
    if (window.scrollY > 120) {
      socialScroll.classList.add('show');
    } else {
      socialScroll.classList.remove('show');
      if (isMobile) socialScroll.classList.remove('expanded');
    }
  }, { passive: true });
}



// ---------------------------------------------------------
// Animación del banner de oferta (botón pulsa periódicamente)
// ---------------------------------------------------------
const botonOferta = document.querySelector('.oferta-top .btn');

if (botonOferta) {
  setInterval(() => {
    botonOferta.classList.toggle('animate');
  }, 5000);
}

// ---------------------------------------------------------
// Efecto de escritura en el banner de oferta
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const frases = [
    "¡10% de descuento!",
    "Entregas en aeropuertos",
    "¡Atención personalizada!",
    "Flota moderna"
  ];
  const span = document.getElementById("ofertaTexto");
  if (!span) return;

  let i = 0;
  let j = 0;
  let escribiendo = true;

  function escribirFrase() {
    if (escribiendo) {
      if (j < frases[i].length) {
        span.textContent += frases[i].charAt(j);
        j++;
        setTimeout(escribirFrase, 60);
      } else {
        escribiendo = false;
        setTimeout(escribirFrase, 2000);
      }
    } else {
      if (j > 0) {
        span.textContent = frases[i].substring(0, j - 1);
        j--;
        setTimeout(escribirFrase, 30);
      } else {
        escribiendo = true;
        i = (i + 1) % frases.length;
        setTimeout(escribirFrase, 500);
      }
    }
  }

  escribirFrase();
});

// ---------------------------------------------------------
// Modal de Reserva — lógica completa
// ---------------------------------------------------------
let _reservaData = null; // { nombre, precioActual }

window.abrirReserva = function (nombreVehiculo, precioActual) {
  _reservaData = { nombre: nombreVehiculo, precioActual: Number(precioActual) };

  const modalEl = document.getElementById('modalReservar');
  if (!modalEl) return;

  // Reset de campos y estados
  ['reservaNombre', 'reservaFechaInicio', 'reservaFechaSalida'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.value = '';
      el.classList.remove('is-invalid', 'is-valid');
    }
  });

  // Mínimo hoy
  const hoy = new Date().toISOString().split('T')[0];
  document.getElementById('reservaFechaInicio').min = hoy;
  document.getElementById('reservaFechaSalida').min = hoy;

  // Nombre del vehículo en el header
  const nombreEl = document.getElementById('reservaVehiculoNombre');
  if (nombreEl) nombreEl.textContent = nombreVehiculo;

  // Ocultar preview precio
  const preview = document.getElementById('reservaPrecioPreview');
  if (preview) preview.style.display = 'none';

  bootstrap.Modal.getOrCreateInstance(modalEl).show();
};

// Actualizar preview de precio al cambiar fechas
document.addEventListener('DOMContentLoaded', function () {
  const inicio = document.getElementById('reservaFechaInicio');
  const salida = document.getElementById('reservaFechaSalida');
  const preview = document.getElementById('reservaPrecioPreview');
  const btnEnviar = document.getElementById('btnEnviarReserva');

  function actualizarPreview() {
    if (!inicio || !salida || !_reservaData) return;
    const d1 = inicio.value;
    const d2 = salida.value;

    if (d1) {
      // salida mínima = inicio + 1 día
      const minSalida = new Date(d1);
      minSalida.setDate(minSalida.getDate() + 1);
      salida.min = minSalida.toISOString().split('T')[0];
    }

    if (d1 && d2 && d2 > d1) {
      const dias = Math.ceil((new Date(d2) - new Date(d1)) / 86400000);
      const total = dias * _reservaData.precioActual;
      document.getElementById('reservaDiasTexto').textContent =
        `${dias} día${dias !== 1 ? 's' : ''}`;
      document.getElementById('reservaTotalTexto').textContent =
        `Total estimado: USD$${total}`;
      if (preview) preview.style.display = 'block';
    } else {
      if (preview) preview.style.display = 'none';
    }
  }

  if (inicio) inicio.addEventListener('change', actualizarPreview);
  if (salida) salida.addEventListener('change', actualizarPreview);

  // Enviar a WhatsApp
  if (btnEnviar) {
    btnEnviar.addEventListener('click', function () {
      const nombre = document.getElementById('reservaNombre');
      const fInicio = document.getElementById('reservaFechaInicio');
      const fSalida = document.getElementById('reservaFechaSalida');

      let valido = true;

      // Validar nombre
      if (!nombre.value.trim()) {
        nombre.classList.add('is-invalid');
        nombre.classList.remove('is-valid');
        valido = false;
      } else {
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
      }

      // Validar fecha inicio
      if (!fInicio.value) {
        fInicio.classList.add('is-invalid');
        fInicio.classList.remove('is-valid');
        valido = false;
      } else {
        fInicio.classList.remove('is-invalid');
        fInicio.classList.add('is-valid');
      }

      // Validar fecha salida
      if (!fSalida.value || fSalida.value <= fInicio.value) {
        fSalida.classList.add('is-invalid');
        fSalida.classList.remove('is-valid');
        valido = false;
      } else {
        fSalida.classList.remove('is-invalid');
        fSalida.classList.add('is-valid');
      }

      if (!valido) return;

      // Calcular
      const dias = Math.ceil((new Date(fSalida.value) - new Date(fInicio.value)) / 86400000);
      const total = dias * _reservaData.precioActual;

      // Formatear fechas legibles
      const fmt = s => {
        const [y, m, d] = s.split('-');
        return `${d}/${m}/${y}`;
      };

      const msg =
        `Hola, mi nombre es ${nombre.value.trim()} y quiero reservar el vehículo:\n` +
        `${_reservaData.nombre}\n\n` +
        `Fecha de entrega: ${fmt(fInicio.value)}\n` +
        `Fecha de devolución: ${fmt(fSalida.value)}\n` +
        `Días: ${dias}\n` +
        `Total estimado: USD$${total}\n\n` +
        `¿Está disponible?`;

      // Cerrar modal y abrir WhatsApp
      bootstrap.Modal.getInstance(document.getElementById('modalReservar')).hide();
      window.open('https://wa.me/18094013761?text=' + encodeURIComponent(msg), '_blank');
    });
  }
});

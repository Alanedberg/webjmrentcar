// ---------------------------------------------
// Inicializar animaciones AOS (al hacer scroll)
// ---------------------------------------------
AOS.init({
  duration: 1500,  // Duración de cada animación en ms
  once: true       // Animar solo una vez al entrar en pantalla
});

// ---------------------------------------------------------
// Animación de contador numérico (para estadísticas animadas)
// ---------------------------------------------------------
const contadores = document.querySelectorAll('.contador');

const activarContadores = () => {
  contadores.forEach(contador => {
    const actualizar = () => {
      const target = +contador.getAttribute('data-target');
      const actual = +contador.innerText;
      const incremento = target / 50;

      if (actual < target) {
        contador.innerText = Math.ceil(actual + incremento);
        setTimeout(actualizar, 30);
      } else {
        contador.innerText = target;
      }
    };
    actualizar();
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activarContadores();
      observer.disconnect(); // Solo una vez
    }
  });
}, {
  threshold: 0.5
});

contadores.forEach(contador => observer.observe(contador));

// ---------------------------------------------------------
// Animar el botón del banner de oferta cada cierto tiempo
// ---------------------------------------------------------
const botonOferta = document.querySelector('.oferta-top .btn');

if (botonOferta) {
  setInterval(() => {
    botonOferta.classList.toggle('animate');
  }, 5000); // alterna cada 5 segundos
}

// ---------------------------------------------------------
// Mostrar el botón “subir” al hacer scroll
// ---------------------------------------------------------
const btnSubir = document.getElementById("btnSubir");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnSubir.style.display = "flex";
  } else {
    btnSubir.style.display = "none";
  }
});

// Scroll suave al inicio
btnSubir.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ---------------------------------------------------------
// Cerrar menú al hacer clic fuera (móvil)
// ---------------------------------------------------------
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbar-collapse");
  const toggler = document.querySelector(".navbar-toggler");

  const isNavbarOpen = navbar.classList.contains("show");
  const clickInsideMenu = navbar.contains(event.target) || toggler.contains(event.target);

  if (isNavbarOpen && !clickInsideMenu) {
    new bootstrap.Collapse(navbar).hide();
  }
});

// ---------------------------------------------------------
// Cerrar menú al hacer clic en un enlace (móvil)
// ---------------------------------------------------------
document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapseEl = document.getElementById('navbarNav');
    if (navbarCollapseEl.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapseEl, { toggle: false });
      bsCollapse.hide();
    }
  });
});


// ---------------------------------------------------------
// Marcar como activo el link clicado y quitar de los demás
// ---------------------------------------------------------
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    // quitar active de todos
    document.querySelectorAll('.navbar-nav .nav-link').forEach(el => {
      el.classList.remove('active');
    });
    // añadir active al clicado
    this.classList.add('active');
  });
});


// Mostrar/ocultar iconos sociales al hacer scroll
const socialScroll = document.getElementById('social-scroll');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    socialScroll.classList.add('show');
  } else {
    socialScroll.classList.remove('show');
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const frases = [
      "¡Recibe un 10% de descuento!",
      "Entregas en aeropuerto",
      "¡Atención personalizada 24/7!",
      "Flota moderna y segura"
    ];
    const span = document.getElementById("ofertaTexto");
    let i = 0; // frase actual
    let j = 0; // letra actual
    let escribiendo = true;

    function escribirFrase() {
      if (!span) return;
      if (escribiendo) {
        if (j < frases[i].length) {
          span.textContent += frases[i].charAt(j);
          j++;
          setTimeout(escribirFrase, 60); // velocidad de escritura
        } else {
          escribiendo = false;
          setTimeout(escribirFrase, 2000); // pausa antes de borrar
        }
      } else {
        if (j > 0) {
          span.textContent = frases[i].substring(0, j - 1);
          j--;
          setTimeout(escribirFrase, 30); // velocidad de borrado
        } else {
          escribiendo = true;
          i = (i + 1) % frases.length; // siguiente frase
          setTimeout(escribirFrase, 500);
        }
      }
    }

    escribirFrase();

    const btnSubir = document.getElementById('btnSubir');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) btnSubir.classList.add('show');
  else btnSubir.classList.remove('show');
});

  });

  




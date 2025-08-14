// vehiculos.js
document.addEventListener("DOMContentLoaded", () => {
  const vehiculos = [
    {
      nombre: "Mercedes GLE-AMG Coupe 2018",
      precioAntes: 220,
      precioActual: 200,
      pasajeros: 5,
      caracteristicas: "Techo panoramico y diferentes modos de manejo",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "mercedes-gle-2018"
    },
      {
      nombre: "Maserati 2020",
      precioAntes: 240,
      precioActual: 220,
      pasajeros: 5,
      caracteristicas: "Techo panoramico y diferentes modos de manejo",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "Maserati-2020"
    },
      {
      nombre: "Chevrolet Tahoe 2021 Full",
      precioAntes: 260,
      precioActual: 230,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "Chevrolet-Tahoe-2021-Full"
    },
    {
      nombre: "Changan Uni-T 2024",
      precioAntes: 90,
      precioActual: 75,
      pasajeros: 5,
      caracteristicas: "Techo panoramico y diferentes modos de manejo",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "changan-uni-t-2024"
    },
    {
      nombre: "Changan CS35 2024",
      precioAntes: 65,
      precioActual: 55,
      pasajeros: 5,
      caracteristicas: "Techo panoramico y diferentes modos de manejo",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "changan-cs35"
    },
    {
      nombre: "Jeep Cherokee Panorámica 2017",
      precioAntes: 90,
      precioActual: 75,
      pasajeros: 5,
      caracteristicas: "Techo panoramico y diferentes modos de manejo",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "jeep-cherokee-2017"
    },
    {
      nombre: "Jeep Cherokee Panorámica 2018",
      precioAntes: 90,
      precioActual: 75,
      pasajeros: 5,
      caracteristicas: "Techo panoramico y diferentes modos de manejo",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "jeep-cherokee-2018"
    },
    {
      nombre: "Honda CR-V 2024",
      precioAntes: 100,
      precioActual: 85,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "honda-crv-2024"
    },
    {
      nombre: "Honda CR-V 2016",
      precioAntes: 55,
      precioActual: 45,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "honda-crv-2018-2"
    },
    {
      nombre: "Honda CR-V 2018",
      precioAntes: 65,
      precioActual: 55,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "honda-crv-2018-3"
    },
    {
      nombre: "Honda CR-V 2018",
      precioAntes: 65,
      precioActual: 55,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "honda-crv-2018-4"
    },
    {
      nombre: "Honda CR-V 2022",
      precioAntes: 70,
      precioActual: 65,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "honda-crv-2022"
    },
    {
      nombre: "Honda CR-V 2022",
      precioAntes: 70,
      precioActual: 65,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "honda-crv-2018"
    },
    {
      nombre: "Honda CR-V 2016",
      precioAntes: 55,
      precioActual: 45,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "honda-crv-2016"
    },
    {
      nombre: "Kia Sorento 2019",
      precioAntes: 70,
      precioActual: 55,
      pasajeros: 7,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "kia-sorento-2019"
    },
    {
      nombre: "Jeap Rubicon 2018",
      precioAntes: 110,
      precioActual: 90,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "camioneta",
      carpeta: "jeap-rubicon-2018"
    },
    {
      nombre: "Jeap Gladiador 2020",
      precioAntes: 150,
      precioActual: 120,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "camioneta",
      carpeta: "jeap-gladiador-2020"
    },
    {
      nombre: "Kia Sorento 2019",
      precioAntes: 70,
      precioActual: 55,
      pasajeros: 7,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "kia-sorento-2019-2"
    },
    {
      nombre: "Chevrolet Tahoe 2017",
      precioAntes: 110,
      precioActual: 90,
      pasajeros: 7,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "chevrolet-tahoe-2017"
    },
    {
      nombre: "Toyota 4Runner",
      precioAntes: 90,
      precioActual: 80,
      pasajeros: 7,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "toyota-4runner"
    },
    {
      nombre: "Ford Explorer 2017",
      precioAntes: 85,
      precioActual: 70,
      pasajeros: 7,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "ford-explorer-2017"
    },
    {
      nombre: "Toyota Highlander 2018",
      precioAntes: 85,
      precioActual: 75,
      pasajeros: 7,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "toyota-highlander-2018"
    },
    {
      nombre: "Toyota Hilux 2020",
      precioAntes: 110,
      precioActual: 90,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "camioneta",
      carpeta: "toyota-hilux-2020"
    },
    {
      nombre: "Range rover Sport 2018",
      precioAntes: 250,
      precioActual: 220,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "Jeepeta",
      carpeta: "range-rover-sport-2018"
    },
    {
      nombre: "Hyundai LF GLP",
      precioAntes: 40,
      precioActual: 35,
      pasajeros: 5,
      caracteristicas: "",
      ac: true,
      transmision: "Automática",
      categoria: "carro",
      carpeta: "hyundai-lf-glp"
    }
  ];

  // calcular descuento real y no negativo
  vehiculos.forEach(v => {
    if (v.precioAntes > 0 && v.precioActual < v.precioAntes) {
      v.descuento = Math.round(((v.precioAntes - v.precioActual) / v.precioAntes) * 100);
    } else {
      v.descuento = 0;
    }
  });

  const gridFlotilla = document.getElementById("gridFlotilla");
  const filterButtons = document.querySelectorAll("#filterButtons button");
  const contenedorCarrusel = document.getElementById("contenedorCarruselVehiculos");
  const carouselEl = document.getElementById("carouselVehiculos");
  const modalEl = document.getElementById("modalFotos");
  const modalFotos = modalEl ? new bootstrap.Modal(modalEl, { backdrop: true, keyboard: true }) : null;
  const contenedorFotos = document.getElementById("contenedorFotosVehiculo");
  const modalTitulo = document.getElementById("modalFotosLabel");
  const item = document.createElement("div");
item.className = "carousel-item";

  function renderGrid(categoria) {
    if (!gridFlotilla) return;
    gridFlotilla.innerHTML = "";
    const lista = vehiculos.filter(v => categoria === "todos" || v.categoria === categoria);
    lista.forEach(v => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4";

      const detalles = [];
      if (v.caracteristicas && v.caracteristicas.toString().trim() !== "") {
        detalles.push(`<li class="mb-1"><i class="fas fa-info-circle me-2 text-danger"></i> ${v.caracteristicas}</li>`);
      }
      detalles.push(`<li class="mb-1"><i class="fas fa-users me-2 text-danger"></i> ${v.pasajeros} pasajero${v.pasajeros === 1 ? "" : "s"}</li>`);
      detalles.push(`<li class="mb-1"><i class="fas fa-snowflake me-2 text-primary"></i> ${v.ac ? "A/C" : "Sin A/C"}</li>`);
      detalles.push(`<li><i class="fas fa-cogs me-2 text-secondary"></i> ${v.transmision}</li>`);
      
item.innerHTML = `
  <div class="d-flex justify-content-center">
    <div class="card vehiculo card-glass card-float overflow-visible" style="width: 22rem;" data-aos="fade-up">
      <div class="position-relative overflow-visible">
        <img src="assets/img/vehiculos/${v.carpeta}/1.webp" class="card-img-top rounded-top" alt="${v.nombre}" />
        ${v.descuento > 0 ? `
          <span class="badge badge-descuento position-absolute top-0 start-0 m-2">-${v.descuento}%</span>
          <div class="bg-danger text-white px-3 py-1 position-absolute top-0 end-0 rounded-bottom-start shadow-sm">
            ¡Oferta!
          </div>` : ""
        }
        ${v.categoria ? `
          <span class="badge-categoria position-absolute top-0 start-50 translate-middle-x mt-2">${v.categoria.toUpperCase()}</span>
        ` : ""}
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-semibold mb-2">${v.nombre}</h5>
        <div class="bg-light border p-2 rounded d-inline-block mb-2">
          <del class="text-muted">USD$${v.precioAntes}</del>
          <span class="fw-bold text-success ms-2">USD$${v.precioActual}/día</span>
        </div>
        <ul class="list-unstyled small mb-3 text-muted">
          ${v.caracteristicas ? `<li class="mb-1"><i class="fas fa-info-circle me-2 text-danger"></i> ${v.caracteristicas}</li>` : ""}
          <li class="mb-1"><i class="fas fa-users me-2 text-danger"></i> ${v.pasajeros} pasajero${v.pasajeros === 1 ? "" : "s"}</li>
          <li class="mb-1"><i class="fas fa-snowflake me-2 text-primary"></i> ${v.ac ? "A/C" : "Sin A/C"}</li>
          <li><i class="fas fa-cogs me-2 text-secondary"></i> ${v.transmision}</li>
        </ul>
        <div class="mt-auto d-flex gap-2">
          <button class="btn btn-outline-danger w-50" onclick="verFotos('${v.nombre}', '${v.carpeta}')">
            <i class="fas fa-images me-1"></i> Fotos
          </button>
          <a href="https://wa.me/18094013761?text=${encodeURIComponent(
            `Hola, quiero reservar el ${v.nombre}. Vi que está en oferta por USD$${v.precioActual} por día. ¿Está disponible?`
          )}" target="_blank" class="btn btn-ws w-50">
            <i class="fab fa-whatsapp me-1"></i> Reservar
          </a>
        </div>
      </div>
    </div>
  </div>
`;



      gridFlotilla.appendChild(col);
    });
  }

  function renderCarrusel() {
    if (!contenedorCarrusel) return;
    contenedorCarrusel.innerHTML = "";
    vehiculos.forEach((v, i) => {
      const activo = i === 0 ? "active" : "";
      const item = document.createElement("div");
      item.className = `carousel-item ${activo}`;
     item.innerHTML = `
  <div class="d-flex justify-content-center">
    <div class="card vehiculo card-glass card-float" style="width: 22rem;" data-aos="fade-up">
      <div class="position-relative">
        <img src="assets/img/vehiculos/${v.carpeta}/1.webp" class="card-img-top rounded-top" alt="${v.nombre}" />
        ${v.descuento > 0 ? `
          <span class="badge badge-descuento position-absolute top-0 start-0 m-2">-${v.descuento}%</span>
          <div class="bg-danger text-white px-3 py-1 position-absolute top-0 end-0 rounded-bottom-start shadow-sm">
            ¡Oferta!
          </div>` : ""}
        <span class="position-absolute top-0 end-0 m-2 badge bg-dark text-uppercase shadow-sm">${v.categoria}</span>
      </div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-semibold mb-2">${v.nombre}</h5>
        <div class="bg-light border p-2 rounded d-inline-block mb-2">
          <del class="text-muted">USD$${v.precioAntes}</del>
          <span class="fw-bold text-success ms-2">USD$${v.precioActual}/día</span>
        </div>
        <ul class="list-unstyled small mb-3 text-muted">
          ${v.caracteristicas ? `<li class="mb-1"><i class="fas fa-info-circle me-2 text-danger"></i> ${v.caracteristicas}</li>` : ""}
          <li class="mb-1"><i class="fas fa-users me-2 text-danger"></i> ${v.pasajeros} pasajero${v.pasajeros === 1 ? "" : "s"}</li>
          <li class="mb-1"><i class="fas fa-snowflake me-2 text-primary"></i> ${v.ac ? "A/C" : "Sin A/C"}</li>
          <li><i class="fas fa-cogs me-2 text-secondary"></i> ${v.transmision}</li>
        </ul>
        <div class="mt-auto d-flex gap-2">
          <button class="btn btn-outline-danger w-50" onclick="verFotos('${v.nombre}', '${v.carpeta}')">
            <i class="fas fa-images me-1"></i> Fotos
          </button>
          <a href="https://wa.me/18094013761?text=${encodeURIComponent(
            `Hola, quiero reservar el ${v.nombre}. Vi que está en oferta por USD$${v.precioActual} por día. ¿Está disponible?`
          )}" target="_blank" class="btn btn-ws w-50">
            <i class="fab fa-whatsapp me-1"></i> Reservar
          </a>
        </div>
      </div>
    </div>
  </div>
`;


      contenedorCarrusel.appendChild(item);
    });
  }

  if (filterButtons && filterButtons.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderGrid(btn.dataset.cat);
      });
    });
  }

  renderGrid("todos");
  renderCarrusel();

  window.verFotos = async (nombre, carpeta) => {
    if (!modalFotos || !contenedorFotos || !modalTitulo) {
      console.warn("Elementos del modal no disponibles.");
      return;
    }

    contenedorFotos.innerHTML = "";
    modalTitulo.textContent = nombre;

    const spinner = document.createElement("div");
    spinner.className = "text-center my-4";
    spinner.innerHTML = `<div class="spinner-border" role="status"><span class="visually-hidden">Cargando...</span></div>`;
    contenedorFotos.appendChild(spinner);

    const fragment = document.createDocumentFragment();
    let cargadas = 0;
    let imagenesList = null;

    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 2000);
      const res = await fetch("assets/img/vehiculos/manifest.json", { signal: controller.signal });
      clearTimeout(id);
      if (res.ok) {
        const manifest = await res.json();
        if (manifest[carpeta] && Array.isArray(manifest[carpeta])) {
          imagenesList = manifest[carpeta];
        }
      }
    } catch (e) {
      console.warn("No se pudo cargar manifest, usando fallback secuencial.", e);
    }

    if (imagenesList) {
      await Promise.all(
        imagenesList.map(async nombreImg => {
          const ruta = `assets/img/vehiculos/${carpeta}/${nombreImg}`;
          return new Promise(resolve => {
            const img = new Image();
            img.src = ruta;
            img.alt = `${nombre} ${nombreImg}`;
            img.className = "img-fluid rounded shadow-sm";
            img.onload = () => {
              cargadas++;
              const div = document.createElement("div");
              div.className = "col-md-4 mb-3";
              div.appendChild(img);
              fragment.appendChild(div);
              resolve();
            };
            img.onerror = () => resolve();
          });
        })
      );
    } else {
      let consecutivosFallos = 0;
      const STOP_MISSES = 3;
      let i = 1;
      while (consecutivosFallos < STOP_MISSES) {
        const nombreImg = `${i}.webp`;
        const ruta = `assets/img/vehiculos/${carpeta}/${nombreImg}`;
        await new Promise(resolve => {
          const img = new Image();
          img.src = ruta;
          img.alt = `${nombre} ${i}`;
          img.className = "img-fluid rounded shadow-sm";
          img.onload = () => {
            consecutivosFallos = 0;
            cargadas++;
            const div = document.createElement("div");
            div.className = "col-md-4 mb-3";
            div.appendChild(img);
            fragment.appendChild(div);
            resolve();
          };
          img.onerror = () => {
            consecutivosFallos++;
            resolve();
          };
        });
        i++;
        if (i > 50) break;
      }
    }

    contenedorFotos.innerHTML = "";
    if (cargadas === 0) {
      contenedorFotos.innerHTML = `<p class="text-center text-muted">No hay más fotos disponibles.</p>`;
    } else {
      contenedorFotos.appendChild(fragment);
    }

    modalFotos.show();
  };

  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 1200, once: true });
  }
});

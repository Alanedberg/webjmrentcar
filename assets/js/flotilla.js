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

  const grid = document.getElementById("gridFlotilla");
  const filterButtons = document.querySelectorAll("#filterButtons button");
  const modalFotos = new bootstrap.Modal(document.getElementById("modalFotos"));
  const contenedorFotos = document.getElementById("contenedorFotosVehiculo");
  const modalTitulo = document.getElementById("modalFotosLabel");

function renderGrid(categoria) {
  grid.innerHTML = "";
  const lista = vehiculos.filter(v => categoria === "todos" || v.categoria === categoria);

  lista.forEach(v => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-lg-4 d-flex";

    const catLabel = { 'Jeepeta': 'Jeepeta', 'carro': 'Carro', 'camioneta': 'Camioneta' }[v.categoria] || v.categoria;
    const pasLabel = `Disponibilidad: ${v.pasajeros} personas`;

    col.innerHTML = `
      <div class="card-vehiculo-moderna w-100">

        <!-- Imagen principal -->
        <div class="card-img-wrapper">
          <img src="assets/img/vehiculos/${v.carpeta}/1.webp"
               class="card-main-img" alt="${v.nombre}"
               onerror="this.src='assets/img/icojmrentcar.ico'" />
          ${v.descuento > 0 ? `<span class="badge-oferta-card">-${v.descuento}% OFF</span>` : ''}
        </div>

        <div class="card-thumbnails">
          <img src="assets/img/vehiculos/${v.carpeta}/2.webp"
               onerror="this.src='assets/img/vehiculos/${v.carpeta}/1.webp'"
               onclick="verFotos('${v.nombre}','${v.carpeta}')" alt="foto 2" />
          <img src="assets/img/vehiculos/${v.carpeta}/3.webp"
               onerror="this.src='assets/img/vehiculos/${v.carpeta}/1.webp'"
               onclick="verFotos('${v.nombre}','${v.carpeta}')" alt="foto 3" />
          <img src="assets/img/vehiculos/${v.carpeta}/4.webp"
               onerror="this.src='assets/img/vehiculos/${v.carpeta}/1.webp'"
               onclick="verFotos('${v.nombre}','${v.carpeta}')" alt="foto 4" />
        </div>

        <!-- Cuerpo -->
        <div class="card-vehiculo-body">

          <!-- Ubicación -->
          <div class="card-ubicacion">
            <i class="bi bi-geo-alt-fill"></i>
            <div class="card-ubicacion-texto">
              <small>Ubicación del Vehículo</small>
              <span>Santiago, R.D.</span>
            </div>
          </div>

          <!-- Nombre + badge activo -->
          <div class="card-vehiculo-nombre-row">
            <h5 class="card-vehiculo-title">${v.nombre}</h5>
            <span class="badge-activo">Activo</span>
          </div>

          <!-- Subtítulo categoría -->
          <p class="card-vehiculo-sub">${catLabel} &bull; ${v.transmision}</p>

          <!-- Disponibilidad -->
          <span class="badge-disponibilidad">
            <i class="bi bi-people-fill"></i> ${pasLabel}
          </span>

          <!-- Precio -->
          <div class="card-precio-row">
            ${v.descuento > 0 ? `<span class="card-precio-antes">$${v.precioAntes}</span>` : ''}
            <span class="card-precio-actual">$${v.precioActual}</span>
            <span class="card-precio-dia">/día</span>
          </div>

          <!-- Botones -->
          <div class="card-acciones">
            <button class="btn-ver-fotos"
                    onclick="verFotos('${v.nombre}','${v.carpeta}')">
              <i class="bi bi-images"></i> Fotos
            </button>
            <button class="btn-reservar-ws" onclick="abrirReserva('${v.nombre}', ${v.precioActual})">
              <i class="fab fa-whatsapp"></i> Reservar
            </button>
          </div>

        </div>
      </div>
    `;
    grid.appendChild(col);
  });

  if (window.AOS) AOS.refresh();
}


  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid(btn.dataset.cat);
      
    });
  });

  // renderizar todos al inicio
  renderGrid("todos");

// función para mostrar galería
window.verFotos = async (nombre, carpeta) => {
  contenedorFotos.innerHTML = "";
  modalTitulo.textContent = nombre;

  // spinner temporal mientras carga
  const spinner = document.createElement("div");
  spinner.className = "text-center my-4";
  spinner.innerHTML = `<div class="spinner-border" role="status"><span class="visually-hidden">Cargando...</span></div>`;
  contenedorFotos.appendChild(spinner);

  const fragment = document.createDocumentFragment();
  let cargadas = 0;

  // intento cargar manifest con timeout
  let imagenesList = null;
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 2000); // 2s timeout
    const res = await fetch("assets/img/vehiculos/manifest.json", { signal: controller.signal });
    clearTimeout(id);
    if (res.ok) {
      const manifest = await res.json();
      if (manifest[carpeta] && Array.isArray(manifest[carpeta])) {
        imagenesList = manifest[carpeta];
      }
    }
  } catch (e) {
    console.warn("No se pudo cargar manifest (o se agotó), usando fallback.", e);
  }

  if (imagenesList) {
    // cargar en paralelo pero conservar orden
    const promises = imagenesList.map(async nombreImg => {
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
        img.onerror = () => {
          console.warn("Falló carga de imagen del manifest:", ruta);
          resolve();
        };
      });
    });
    await Promise.all(promises);
  } else {
    // fallback secuencial con parada tras 3 fallos consecutivos
    let consecutivosFallos = 0;
    const STOP_MISSES = 3;
    let i = 1;
    while (consecutivosFallos < STOP_MISSES) {
      const nombreImg = `${i}.webp`;
      const ruta = `assets/img/vehiculos/${carpeta}/${nombreImg}`;
      // esperar a que cargue o falle
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
      // seguridad: no se vaya a infinito (por si hay un bug)
      if (i > 50) break;
    }
  }

  // limpiar y mostrar resultados
  contenedorFotos.innerHTML = "";
  if (cargadas === 0) {
    contenedorFotos.innerHTML = `<p class="text-center text-muted">No hay más fotos disponibles.</p>`;
  } else {
    contenedorFotos.appendChild(fragment);
  }

  modalFotos.show();
};


  // inicializar AOS
  AOS.init({ duration: 1200, once: true });
});

// Array con las URLs de tus fotos (reemplaza con tus imágenes)
const businessPhotos = [
  'img/negocio/changan-cs35.webp',
  'img/negocio/changan-uni-t-2024.webp',
  'img/negocio/chevrolet-tahoe-2017.webp',
  'img/negocio/ford-explorer-2017.webp',
  'img/negocio/honda-crv-2016.webp',
  'img/negocio/honda-crv-2018.webp',
  'img/negocio/honda-crv-2018-2.webp',
  'img/negocio/honda-crv-2018-3.webp',
  'img/negocio/honda-crv-2018-4.webp',
  'img/negocio/honda-crv-2022.webp',
  'img/negocio/honda-crv-2024.webp',
  'img/negocio/hyundai-lf-glp.webp',
  'img/negocio/jeap-gladiador-2020.webp',
  'img/negocio/jeap-rubicon-2018.webp',
  'img/negocio/jeep-cherokee-2017.webp',
  'img/negocio/jeep-cherokee-2018.webp',
  'img/negocio/kia-sorento-2019.webp',
  'img/negocio/kia-sorento-2019-2.webp',
  'img/negocio/mercedes-gle-2018.webp',
  'img/negocio/range-rover-sport-2018.webp',
  'img/negocio/toyota-4runner.webp',
  'img/negocio/toyota-highlander-2018.webp',
  'img/negocio/toyota-hilux-2020.webp',
  'img/negocio/Maserati-2020.webp',
];



// Cuando el modal se muestre, carga las fotos
document.getElementById('photosModal').addEventListener('shown.bs.modal', function() {
  const carouselInner = document.querySelector('#businessCarousel .carousel-inner');
  carouselInner.innerHTML = '';
  
  businessPhotos.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    item.innerHTML = `<img src="${photo}" class="d-block w-100" alt="Foto del negocio ${index + 1}">`;
    carouselInner.appendChild(item);
  });
});
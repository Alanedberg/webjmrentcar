
// Función para mostrar el globito de WhatsApp
function mostrarTooltipWhatsapp() {
  const tooltip = document.querySelector('.tooltip-whatsapp');
  tooltip.classList.add('show');
  setTimeout(() => {
    tooltip.classList.remove('show');
  }, 4000);
}
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(mostrarTooltipWhatsapp, 2000);
  setInterval(mostrarTooltipWhatsapp, 20000);
});
// Simulación de descarga de CV
function downloadCV() {
  alert("Descargando tu CV...");
  // Aquí puedes enlazar a un archivo PDF real.
}
document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.querySelector('#portfolio .left-btn');
  const nextBtn = document.querySelector('#portfolio .right-btn');
  const slides = document.querySelectorAll('#portfolio .project');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);  // Inicializa el slider
});
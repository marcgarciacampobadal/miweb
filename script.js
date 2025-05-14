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
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.getAttribute("action");

    fetch(action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          message.style.display = "block";
        } else {
          alert("Ocurrió un error. Por favor, inténtalo más tarde.");
        }
      })
      .catch((error) => {
        alert("Error al enviar. Intenta más tarde.");
      });
  });
});

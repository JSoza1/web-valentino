// Selecciona el botón
const btnUp = document.getElementById("btn-up");

// Mostrar u ocultar el botón al hacer scroll
window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    btnUp.style.display = "block"; // Mostrar
  } else {
    btnUp.style.display = "none"; // Ocultar
  }
};

// Al hacer clic, desplaza hacia arriba suavemente
btnUp.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

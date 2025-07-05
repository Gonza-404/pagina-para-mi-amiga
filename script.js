let clicActual = 0;

function mostrarCorazon(mensaje) {
  const container = document.getElementById("corazonContainer");
  const path = document.getElementById("heartPath");
  const text = document.getElementById("heartText");
  const boton1 = document.getElementById("boton1");
  const boton2 = document.getElementById("boton2");

  // Reset
  path.style.strokeDashoffset = 1500;
  path.style.animation = "none";
  text.textContent = "";
  text.setAttribute("opacity", "0");

  // Mostrar contenedor
  container.style.opacity = "1";

  // Forzar reflujo para reiniciar animación
  void path.offsetWidth;

  // Iniciar animación de nuevo
  path.style.animation = "dibujar 3s forwards ease-in-out";

  // Luego de dibujar el corazón, mostrar el texto letra por letra
  setTimeout(() => {
    text.setAttribute("opacity", "1");
    let index = 0;
    const interval = setInterval(() => {
      text.textContent += mensaje[index];
      index++;
      if (index >= mensaje.length) clearInterval(interval);
    }, 150);
  }, 3000);

  // Cambiar visibilidad de botones
  if (clicActual === 0) {
    boton1.classList.add("oculto");
    boton2.classList.remove("oculto");
    clicActual++;
  } else {
    boton2.classList.add("oculto");
  }
}

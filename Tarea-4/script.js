const counterValueEl = document.getElementById("value"); // obtener el elemento del valor del contador
let counterValue = parseInt(counterValueEl.textContent); // inicializar el valor del contador con el valor actual en la interfaz

document.querySelector("[data-action='increment']").addEventListener("click", () => {
  counterValue++; // aumentar el valor del contador en 1
  counterValueEl.textContent = counterValue; // actualizar el valor en la interfaz
});

document.querySelector("[data-action='decrement']").addEventListener("click", () => {
  counterValue--; // disminuir el valor del contador en 1
  counterValueEl.textContent = counterValue; // actualizar el valor en la interfaz
});

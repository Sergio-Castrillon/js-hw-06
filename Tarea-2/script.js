const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients"); // Obtener la lista vacía por su ID

ingredients.forEach((ingredient) => {
  const li = document.createElement("li"); // Crear un elemento <li>
  li.textContent = ingredient; // Agregar el nombre del ingrediente como contenido de texto
  li.classList.add("item"); // Agregar la clase "item"
  ul.appendChild(li); // Añadir el elemento <li> al final de la lista <ul>
});

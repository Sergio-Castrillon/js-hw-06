const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ul = document.querySelector(".gallery"); // Obtener la lista <ul> por su clase

const galleryMarkup = images
  .map(
    (image) =>
      `<li><img src="${image.url}" alt="${image.alt}"></li>` // Crear el marcado para cada imagen
  )
  .join(""); // Unir todos los elementos del array en una única cadena de texto

ul.insertAdjacentHTML("beforeend", galleryMarkup); // Añadir todo el marcado a la lista <ul>

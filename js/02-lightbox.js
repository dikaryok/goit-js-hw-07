import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createGallery(images) {
  //   return images
  //     .map(({ preview, original, description }) => {
  //       return `
  //      <li><a class="gallery__item" href="${original}">
  //   <img class="gallery__image" src="${preview}" alt="${description}" />
  // </a></li>
  //     `;
  //     })
  //       .join("");
  return images.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
     <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
    `,
    ""
  );
}
console.log(createGallery(galleryItems));

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoomFactor: 0.2,
  navText: ["⇚", "⇛"],
  closeText: "&#10008",
});

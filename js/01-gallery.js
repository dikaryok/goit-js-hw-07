import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);
galleryContainer.addEventListener("click", onPictureClick);

function createGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}
// console.log(createGallery(galleryItems));

function onPictureClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}"/> 
        `); // доступ к оригиналу большого изображения в data-source
  instance.show();

  if (instance.show() === true) {
    window.addEventListener("keydown", onEsc); // вкл. слушателя события
  } else {
    window.removeEventListener("keydown", onEsc); // выкл. слушателя события
  }

  //   console.log(event.target.dataset.source);
  function onEsc(e) {
    if (e.code === `Escape`) {
      // задействование кнопки 'Esc'
      instance.close();
    }

    //   console.log("code", e.code);
  }
}

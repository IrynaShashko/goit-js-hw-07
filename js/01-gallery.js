import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryItems(galleryItems);
imageContainer.insertAdjacentHTML("beforeend", cardsMarkup);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
    </a>
    </div>
     `
    }).join("");
};


imageContainer.addEventListener("click",onImageContainerClick);

function onImageContainerClick(evt) {
    evt.preventDefault();
    evt.target.src = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${evt.target.src = evt.target.dataset.source}" width="1000" height="800">
`)
instance.show()
}

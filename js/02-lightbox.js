import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryItems(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", cardsMarkup);


function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
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
     `
    }).join("");
};

    const gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt"});
    imageContainer.addEventListener("click", gallery);
    




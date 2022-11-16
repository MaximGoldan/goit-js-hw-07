import { galleryItems } from './gallery-items.js';

const imgContainer = document.querySelector('.gallery');
const addCardMarkup = createImagCardsMarcup(galleryItems);
let instance;
imgContainer.insertAdjacentHTML('beforeend', addCardMarkup);
imgContainer.addEventListener('click', crateModal);
function createImagCardsMarcup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}
function crateModal(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('gallery__image')) {
    const source = evt.target.dataset.source;
    instance = basicLightbox.create(
      `
      <img src="${source}" width="800" height="600">`,
      {
        onShow: () => imgContainer.addEventListener('keydown', onEscClose),
        onClose: () => imgContainer.removeEventListener('keydown', onEscClose),
      }
    );
    instance.show();
  }
}
function onEscClose(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}

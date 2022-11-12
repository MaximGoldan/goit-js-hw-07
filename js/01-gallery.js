import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const imgContainer = document.querySelector('.gallery');

function createImagCardsMarcup(galleryItems) {
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

const addCardMarkup = createImagCardsMarcup(galleryItems);

imgContainer.innerHTML = addCardMarkup;
imgContainer.addEventListener('click', clickImagContainer);

function clickImagContainer(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  imgContainer.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}

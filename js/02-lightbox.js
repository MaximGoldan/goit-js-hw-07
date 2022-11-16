import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgContainer = document.querySelector('.gallery');

const createImagCardsMarcup = (preview, original, description) =>
  `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`;

const render = () => {
  const arrayFromList = galleryItems.map((item) =>
    createImagCardsMarcup(item.preview, item.original, item.description)
  );
  imgContainer.innerHTML = arrayFromList.join('');
};
render();

const gallaryEl = new SimpleLightbox('ul.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

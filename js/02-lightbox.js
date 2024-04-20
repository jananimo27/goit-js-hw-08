import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const markup = galleryItems
  .map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `)
  .join('');


gallery.innerHTML = markup;


new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

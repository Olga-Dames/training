// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryRef = document.querySelector('.gallery')

const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
      `;
    }).join(''); 

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
// galleryRef.addEventListener('click', onClickSimpleLightBox);
  
// function onClickSimpleLightBox(e) {
//   e.preventDefault();

//   if (!e.target.classList.contains('gallery__image')) {
//     return;
//   }
// }


let lightbox = new SimpleLightbox('.gallery a',
{
  captionsData: 'alt',
  captionDelay: '250ms'
  })
console.log(galleryItems);

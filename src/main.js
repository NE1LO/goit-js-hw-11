import { render } from './js/render';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '41690622-1f4c10e5fb0aefa04cb32f231';
const BASE_URL = 'https://pixabay.com/api/';
const listRender = document.querySelector('.photo-list');
const formEl = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = new SimpleLightbox('.photo-list a');

const formSubmit = e => {
  e.preventDefault();
  if (listRender.children.length > 0) {
    listRender.innerHTML = '';
  }

  loader.style.display = 'inline-block';

  const option = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    q: formEl.search.value,
    orientation: 'horizontal',
    safesearch: true,
  });
  fetch(`${BASE_URL}?${option}`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      if (json.hits < 1) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        loader.style.display = 'none';
      } else {
        listRender.innerHTML = render(json.hits);
        loader.style.display = 'none';
        gallery.refresh();
      }
    })
    .catch(error => console.log(error));
  formEl.reset();
};

formEl.addEventListener('submit', formSubmit);

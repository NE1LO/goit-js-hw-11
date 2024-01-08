const render = arr => {
  let renderHtml;
  renderHtml = arr.reduce(
    (HTML, item) =>
      HTML +
      `<li class="photo-list__item">
        <a href="${item.largeImageURL}">
          <img
            width="360"
            height="200"
            src="${item.largeImageURL}"
            alt="${item.tags}"
          />
        </a>
        <div class="photo-list__block">
          <div class="photo-list__block__info">
            <p><b>Likes</b></p>
            <p>${item.likes}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Views</b></p>
            <p>${item.views}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Comments</b></p>
            <p>${item.comments}</p>
          </div>
          <div class="photo-list__block__info">
            <p><b>Download</b></p>
            <p>${item.downloads}</p>
          </div>
        </div>
      </li>`,
    ''
  );

  return renderHtml;
};

const listRender = document.querySelector('.photo-list');
const API_KEY = '41690622-1f4c10e5fb0aefa04cb32f231';
const BASE_URL = 'https://pixabay.com/api/';

const option = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  q: 'dog',
  orientation: 'horizontal',
  safesearch: true,
});

fetch(`${BASE_URL}?${option}`)
  .then(response => response.json())
  .then(json => {
    console.log(json.hits);
    listRender.insertAdjacentHTML('afterbegin', render(json.hits));
  });

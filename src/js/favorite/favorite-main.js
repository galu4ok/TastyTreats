import RecipeApiService from '../service/service-api';
import sprite from '../../images/sprite.svg';

const recipeApiSerive = new RecipeApiService();

const favList = document.querySelector('.fav-list');
const empty = document.querySelector('.fav-empty');
const hero = document.querySelector('.fav-hero');

recipeApiSerive.getRecipe().then(response => {
  const arr = response.results;

  const FAV_DATA = 'favotires-data';
  const toStorage = [];

  for (let i = 0; i < 6; i++) {
    const { _id, title, category, rating, preview, description } = arr[i];
    toStorage.push({
      _id,
      title,
      category,
      rating,
      preview,
      description,
    });
  }

  localStorage.setItem(FAV_DATA, JSON.stringify(toStorage));
});

function getRating(rating) {
  return `<ul class='stars-list'>
             <li class=${obtainRating(1, rating)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${sprite}#rate-star'></use>
              </svg>
            </li>
            <li class=${obtainRating(2, rating)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${sprite}#rate-star'></use>
              </svg>
            </li>
            <li class=${obtainRating(3, rating)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${sprite}#rate-star'></use>
              </svg>
            </li>
            <li class=${obtainRating(4, rating)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${sprite}#rate-star'></use>
              </svg>
            </li>
            <li class=${obtainRating(5, rating)}>
              <svg class='star-icon' width='18' height='18'>
                <use href='${sprite}#rate-star'></use>
              </svg>
            </li>
          </ul>`;
}

function obtainRating(star, rating) {
  if (star <= rating) {
    return 'star-rated-item';
  }
  return 'star-item';
}

// Rendering cards
function renderingFavRec(arr) {
  const { title, description, preview, rating, _id, category } = arr;

  const parsedRating = parseFloat(rating);
  let setRating = parsedRating > 5 ? 5 : parsedRating.toFixed(1);

  function ifRecInFavor(id) {
    const data = JSON.parse(localStorage.getItem('favotires-data') || '[]');
    return data.some(el => el._id === id) ? 'active' : '';
  }

  const markup = `
   <div class="rec-item" style="background: linear-gradient(0deg, rgba(5, 5, 5, 0.6),
                      rgba(5, 5, 5, 0)),
                      url(${preview}); 
                      background-position: center;
                      background-size: cover;">
        <div class="upper-part">
          
          <button class="heart-btn ${ifRecInFavor(_id)}" type="button">
            <svg class="icon-heart" width="18" height="16">
              <use href="${sprite}#heart"></use>
            </svg>
          </button>
  

          <h2 class="rec-card-title title-cut">${title}</h2>
          <p class="rec-card-desc desc-cut">
            ${description}
          </p>
          
          <div class="rec-rate">
            <p class="rate">${setRating}</p>
            ${getRating(setRating)}
            <button type="button" class="rec-btn-open rec-btn" data-id="${_id}">See recipe</button>
          </div>
        </div>
      </div>`;
  return markup;
}

function groupArrayIntoChunks(array, chunkSize) {
  const groupedChunks = {};

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunkNumber = Math.ceil((i + 1) / chunkSize);
    groupedChunks[chunkNumber] = array.slice(i, i + chunkSize);
  }

  return groupedChunks;
}

// Create favorires cards
function createFavoritesList(objNum = 1) {
  const data = JSON.parse(localStorage.getItem('favotires-data') ?? '[]');

  if (data && data.length) {
    const objData = groupArrayIntoChunks(data, 9);

    const favCardsMarkup = objData[objNum]
      .map(item => renderingFavRec(item))
      .join('');

    favList.innerHTML = favCardsMarkup;
    empty.classList.add('visually-hidden');
  } else {
    empty.classList.remove('visually-hidden');

    if (window.innerWidth < 768) {
      hero.classList.add('visually-hidden');
    }
  }
}

createFavoritesList();

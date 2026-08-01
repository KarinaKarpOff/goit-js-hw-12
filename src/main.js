import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

form.addEventListener('submit', onSearch);

loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  currentQuery = event.target.elements['search-text'].value.trim();

  if (!currentQuery) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });

    return;
  }

  currentPage = 1;

  clearGallery();

  hideLoadMoreButton();

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });

      return;
    }

    createGallery(data.hits);

    if (totalHits > 15) {
      showLoadMoreButton();
    }
  } catch {
    iziToast.error({
      message: 'Something went wrong!',
    });
  } finally {
    hideLoader();
  }

  form.reset();
}

async function onLoadMore() {
  currentPage++;

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);

    const loadedImages = currentPage * 15;

    if (loadedImages >= totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    const card = document.querySelector('.gallery-item');

    const cardHeight = card.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,

      behavior: 'smooth',
    });
  } catch {
    iziToast.error({
      message: 'Something went wrong!',
    });
  } finally {
    hideLoader();
  }
}

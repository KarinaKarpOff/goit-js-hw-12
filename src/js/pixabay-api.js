import axios from 'axios';

const API_KEY = '56851300-c491d43abc7e67be9ecfe50b0';

export async function getImagesByQuery(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}

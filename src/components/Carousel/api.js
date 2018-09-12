import 'isomorphic-fetch';

const url = 'https://api.unsplash.com/photos';
const API_KEY = 'f71107a858693f48baed86ac2305f58d7d0422f78ab7b74ca33bc031de246048';

export const getUnsplash = () => fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}`)
    .then(response => response.json())
    .then(json => json);

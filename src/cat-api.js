import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.headers.common["x-api-key"] = " live_0uzFrhrvkKnqaoJx5WNElSiDZreG30vJLqCj5VUE34lm7B6QreERDn0wtePZq7IK ";
const BASE_URL = 'https://api.thecatapi.com/v1';


export function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`)
        .then((response) => response.data)
        .catch(() => {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
            document.querySelector('.loader').setAttribute('hidden','')
        })
}

export function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
        .then(response => response.data)
        .catch(() => {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
        })
 
}

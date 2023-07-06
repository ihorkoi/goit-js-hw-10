import {fetchBreeds, fetchCatByBreed} from "./cat-api";

const breedSelectorRef = document.querySelector('.breed-select');
const loaderRef = document.querySelector('.loader');
const catInfoRef = document.querySelector('.cat-info')

function createBreedsOptionsMarckup(catsArr) {
    let marckup = '';
    catsArr.forEach(cat => {
        marckup += `<option value="${cat.name}" data-id=${cat.id}>${cat.name}</option>`
    });
    breedSelectorRef.insertAdjacentHTML('beforeend', marckup);

    breedSelectorRef.removeAttribute('hidden');
    loaderRef.setAttribute('hidden', '')
}

function createCatInfoMarckup(catInfo) {
    const catInfoParsed = catInfo[0].breeds[0];

    let marckup =
        `<div class='image-thumb'><img src="${catInfo[0].url}" alt="${catInfoParsed.name}"></div>
    <div class='cat-description'>
    <h1>${catInfoParsed.name}</h1>
    <p>${catInfoParsed.description}</p>
    <p><b>Temperament: </b>${catInfoParsed.temperament}</p>
    </div>`;

    catInfoRef.innerHTML = marckup;
    
    breedSelectorRef.removeAttribute('hidden');
    loaderRef.setAttribute('hidden', '')


}

breedSelectorRef.addEventListener('change', () => {
    breedSelectorRef.setAttribute('hidden', '');
    loaderRef.removeAttribute('hidden')

    const selectedCat = breedSelectorRef.selectedOptions[0].dataset.id;
    catInfoRef.innerHTML = '';
    fetchCatByBreed(selectedCat).then(createCatInfoMarckup)

})

fetchBreeds().then(createBreedsOptionsMarckup);


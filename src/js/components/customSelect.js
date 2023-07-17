document.addEventListener('DOMContentLoaded', () => {

const region = document.querySelector('.header__city-select');
const choicesRegion = new Choices(region, {
    allowHTML: true,
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
    position: 'bottom',
});

const category = document.querySelector('#category');
const choicesCategory = new Choices(category, {
    allowHTML: true,
    searchEnabled: false,
    searchChoices: false,
    itemSelectText: '',
    position: 'bottom',
});

})

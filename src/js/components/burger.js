
const burgerBtn = document.querySelector('.burger__button');
const burgerMenu = document.querySelector('.burger__menu');
burgerBtn.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger__button--active');
  burgerMenu.classList.toggle('burger__menu--active');
  console.log('click!');
});

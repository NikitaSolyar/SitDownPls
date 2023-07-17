window.onload = function () {

// slider hero

const heroSlider = new Swiper('.hero__swiper', {
  preloadImages: false,
  parallax: true,
  fadeEffect: {
      crossFade: true
  },
  spaceBetween: 100,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function () {
      return `
      <span class="swiper-pagination-bullet" aria-label="следующий слайд">
        <svg class="pagination-progress" viewbox="-2 -2 20 20">
          <circle class="pagination-progress__background" r="7" cx="7" cy="7" fill="none" />
          <circle class="pagination-progress__circle" r="7" cx="7" cy="7" fill="none"/>
         </svg>
      </span>
		`;
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    slidesPerView: 1,
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  a11y: {
    enabled: true,
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});

// slider specials

const specialsSlider = new Swiper('.offers__swiper', {
  loop: false,
  slidesPerGroup: 3,
  slidesPerView: 3,

  speed: 1500,
  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 16
    },
    576: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 16
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32
    },
    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32
    },
    1320: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32
    },
  },
  spaceBetween: 32,
  navigation: {
    nextEl: '.specials__slider-btn-next',
    prevEl: '.specials__slider-btn-prev',
  },

});

// slider useful

const usefulSlider = new Swiper('.useful__swiper', {
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 32
    },
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 16
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32
    },
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 32
    },
    1320: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32
    },
  },
  navigation: {
    nextEl: '.useful__btn-next',
    prevEl: '.useful__btn-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

});

// slider card-main

const cardSliderNav = new Swiper('.card-page__slider-nav', {
  freeMode: true,
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    890: {
      spaceBetween: 20,
      slidesPerView: 'auto',
    },
    695: {
      slidesPerView: 'auto',
      direction: 'vertical',
      spaceBetween: 20,
    },
    320: {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 5,
    },
  }
});

const cardSliderMain = new Swiper('.card-page__slider-main', {
  slidesPerView: 1,
  initialSlide: 4,
  spaceBetween: 10,
  mousewheel: true,
  grabCursor: true,
  thumbs: {
    swiper: cardSliderNav,
  },
});

}

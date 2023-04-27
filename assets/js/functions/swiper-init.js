import Swiper, { Navigation, Pagination } from '../libs/swiper-bundle.min';

const swiper = new Swiper('.swiper', {
	speed: 400,
	loop: true,

	navigation: {
		nextEl: '.experts-btn--next',
		prevEl: '.experts-btn--prev',
	},

	slidesPerView: 3,
	spaceBetween: 40,

	breakpoints: {
		1201: {
			slidesPerView: 3,
			spaceBetween: 40,
		},

		769: {
			slidesPerView: 2,
		},

		320: {
			allowTouchMove: true,
			navigation: false,
			slidesPerView: 1,
			spaceBetween: 20,
		},
	},
});

const swiperReviews = new Swiper('.reviews-slider', {
	speed: 400,
	loop: true,

	navigation: {
		nextEl: '.reviews-btn--next',
		prevEl: '.reviews-btn--prev',
	},

	slidesPerView: 3,
	spaceBetween: 40,

	breakpoints: {
		1201: {
			slidesPerView: 3,
			spaceBetween: 40,
		},

		769: {
			slidesPerView: 2,
		},

		320: {
			allowTouchMove: true,
			navigation: false,
			slidesPerView: 1,
			spaceBetween: 20,
		},
	},
});

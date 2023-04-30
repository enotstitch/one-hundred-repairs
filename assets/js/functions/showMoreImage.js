const galleryWrap = document.querySelector('.gallery__wrap');
const galleryLink = document.querySelector('.gallery__link');

const imageItems = galleryWrap.children.length;

if (imageItems > 6) {
	galleryLink.style.display = 'inline-block';
}

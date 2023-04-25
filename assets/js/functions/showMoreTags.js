const tagsLink = document.querySelector('.tags__link');
const tagsWrap = document.querySelector('.tags__wrap');

const changeLinkText = () => {
	const isTagsVisible = tagsWrap.classList.contains('tags-visible');

	if (isTagsVisible) {
		tagsLink.textContent = 'Свернуть';
	} else {
		tagsLink.textContent = 'Показать больше';
	}
};

const showMoreTags = () => {
	const tags = tagsWrap.childNodes;
	const tagItems = tags.length;

	if (tagItems > 7) {
		tagsWrap.classList.toggle('tags-visible');
	}

	changeLinkText();
};

tagsLink.addEventListener('click', showMoreTags);

const tagsLink = document.querySelector('.tags__link');
const tagsWrap = document.querySelector('.tags__wrap');

const changeLinkText = () => {
	const isTagsHidden = tagsWrap.classList.contains('hidden');

	if (isTagsHidden) {
		tagsLink.textContent = 'Показать больше';
	} else {
		tagsLink.textContent = 'Свернуть';
	}
};

const showMoreTags = () => {
	const tags = tagsWrap.childNodes;
	const tagItems = tags.length;

	if (tagItems > 7) {
		tagsWrap.classList.toggle('hidden');
	}

	changeLinkText();
};

tagsLink.addEventListener('click', showMoreTags);

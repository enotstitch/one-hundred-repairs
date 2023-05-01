const isMobile = document.documentElement.clientWidth <= 650;

const showMoreCards = (parentClass, childrenClass, btnClass) => {
	const parent = document.querySelector(`.${parentClass}`);
	const showMoreBtn = document.querySelector(`.${btnClass}`);
	const children = parent.children;
	const childrenLength = children.length;

	if (!isMobile && childrenLength > 6) {
		for (let i = 6; i < childrenLength; i++) {
			children[i].classList.add(`${childrenClass}--hidden`);
		}
		showMoreBtn.classList.add(`${btnClass}--visible`);
	} else if (isMobile && childrenLength > 3) {
		for (let i = 3; i < childrenLength; i++) {
			children[i].classList.add(`${childrenClass}--hidden`);
		}
		showMoreBtn.classList.add(`${btnClass}--visible`);
	}

	showMoreBtn.addEventListener('click', () => {
		if (!isMobile && showMoreBtn.textContent === 'Показать ещё') {
			console.log(1);
			for (let i = 6; i < childrenLength; i++) {
				children[i].classList.remove(`${childrenClass}--hidden`);
			}
			showMoreBtn.textContent = 'Скрыть';
		} else if (!isMobile && showMoreBtn.textContent === 'Скрыть') {
			console.log(12);
			for (let i = 6; i < childrenLength; i++) {
				children[i].classList.add(`${childrenClass}--hidden`);
			}
			showMoreBtn.textContent = 'Показать ещё';
		} else if (isMobile && showMoreBtn.textContent === 'Показать ещё') {
			console.log(13);
			for (let i = 3; i < childrenLength; i++) {
				children[i].classList.remove(`${childrenClass}--hidden`);
			}
			showMoreBtn.textContent = 'Скрыть';
		} else if (isMobile && showMoreBtn.textContent === 'Скрыть') {
			console.log(14);
			for (let i = 3; i < childrenLength; i++) {
				children[i].classList.add(`${childrenClass}--hidden`);
			}
			showMoreBtn.textContent = 'Показать ещё';
		}
	});
};

showMoreCards('examples__cards', 'examples-card', 'examples__btn');
showMoreCards('gallery__wrap', 'gallery__item', 'gallery__link');

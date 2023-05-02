const isMobile = document.documentElement.clientWidth <= 650;

const showMoreCards = (parentClass, childrenClass, btnClass) => {
	try {
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
				for (let i = 6; i < childrenLength; i++) {
					children[i].classList.remove(`${childrenClass}--hidden`);
				}
				showMoreBtn.textContent = 'Скрыть';
			} else if (!isMobile && showMoreBtn.textContent === 'Скрыть') {
				for (let i = 6; i < childrenLength; i++) {
					children[i].classList.add(`${childrenClass}--hidden`);
				}
				showMoreBtn.textContent = 'Показать ещё';
			} else if (isMobile && showMoreBtn.textContent === 'Показать ещё') {
				for (let i = 3; i < childrenLength; i++) {
					children[i].classList.remove(`${childrenClass}--hidden`);
				}
				showMoreBtn.textContent = 'Скрыть';
			} else if (isMobile && showMoreBtn.textContent === 'Скрыть') {
				for (let i = 3; i < childrenLength; i++) {
					children[i].classList.add(`${childrenClass}--hidden`);
				}
				showMoreBtn.textContent = 'Показать ещё';
			}
		});
	} catch (error) {
		console.log('хуй');
		return;
	}
};

showMoreCards('examples__cards', 'examples-card', 'examples__btn');
showMoreCards('gallery__wrap', 'gallery__item', 'gallery__btn');
showMoreCards('tags__wrap', 'tag', 'tags__btn');

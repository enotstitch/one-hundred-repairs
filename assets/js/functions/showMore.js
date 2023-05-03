const isMobile = document.documentElement.clientWidth <= 650;
const tableBody = document.querySelectorAll('.table__body');

const TEXT_CONTENT_BTN = {
	SHOW: 'Показать ещё',
	HIDE: 'Скрыть',
};

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
			if (!isMobile && showMoreBtn.textContent === TEXT_CONTENT_BTN.SHOW) {
				for (let i = 6; i < childrenLength; i++) {
					children[i].classList.remove(`${childrenClass}--hidden`);
				}
				showMoreBtn.textContent = TEXT_CONTENT_BTN.HIDE;
			} else if (!isMobile && showMoreBtn.textContent === TEXT_CONTENT_BTN.HIDE) {
				for (let i = 6; i < childrenLength; i++) {
					children[i].classList.add(`${childrenClass}--hidden`);
				}
				showMoreBtn.textContent = TEXT_CONTENT_BTN.SHOW;
			} else if (isMobile && showMoreBtn.textContent === TEXT_CONTENT_BTN.SHOW) {
				for (let i = 3; i < childrenLength; i++) {
					children[i].classList.remove(`${childrenClass}--hidden`);
				}
				showMoreBtn.textContent = TEXT_CONTENT_BTN.HIDE;
			} else if (isMobile && showMoreBtn.textContent === TEXT_CONTENT_BTN.HIDE) {
				for (let i = 3; i < childrenLength; i++) {
					children[i].classList.add(`${childrenClass}--hidden`);
				}
				showMoreBtn.textContent = TEXT_CONTENT_BTN.SHOW;
			}
		});
	} catch (error) {
		return;
	}
};

const showMoreRowTable = () => {
	tableBody.forEach((bodyItem) => {
		const rowItems = bodyItem.children;
		const rowItemsLength = rowItems.length - 1;
		const tableBtn = rowItems[rowItemsLength];

		if (rowItemsLength > 5) {
			for (let i = 5; i < rowItemsLength; ++i) {
				rowItems[i].classList.add('row-hidden');
			}
			tableBtn.classList.remove('row-hidden');
		}

		bodyItem.addEventListener('click', (e) => {
			const target = e.target;
			const isTableBtn = target.classList.contains('table__btn');

			if (isTableBtn && target.textContent === TEXT_CONTENT_BTN.SHOW) {
				for (let i = 5; i < rowItemsLength; ++i) {
					rowItems[i].classList.remove('row-hidden');
				}
				target.textContent = TEXT_CONTENT_BTN.HIDE;
			} else if (isTableBtn && target.textContent === TEXT_CONTENT_BTN.HIDE) {
				for (let i = 5; i < rowItemsLength; ++i) {
					rowItems[i].classList.add('row-hidden');
				}
				target.textContent = TEXT_CONTENT_BTN.SHOW;
			}
		});
	});
};

showMoreCards('examples__cards', 'examples-card', 'examples__btn');
showMoreRowTable();
showMoreCards('gallery__wrap', 'gallery__item', 'gallery__btn');
showMoreCards('tags__wrap', 'tag', 'tags__btn');

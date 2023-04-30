const isMobile = document.documentElement.clientWidth <= 650;

const showMoreCards = (parentClass, btnClass) => {
	const parent = document.querySelector(parentClass);
	const showMoreBtn = document.querySelector(btnClass);
	const children = parent.children;
	const childrenLength = children.length;

	if (!isMobile && childrenLength > 6) {
		for (let i = 6; i < childrenLength; i++) {
			children[i].classList.add('examples-card--hidden');
		}
		showMoreBtn.classList.add('examples__btn--visible');
	} else if (isMobile && childrenLength > 3) {
		for (let i = 3; i < childrenLength; i++) {
			children[i].classList.add('examples-card--hidden');
		}
		showMoreBtn.classList.add('examples__btn--visible');
	}

	showMoreBtn.addEventListener('click', () => {
		if (!isMobile && showMoreBtn.textContent === 'Показать ещё') {
			console.log(1);
			for (let i = 6; i < childrenLength; i++) {
				children[i].classList.remove('examples-card--hidden');
			}
			showMoreBtn.textContent = 'Скрыть';
		} else if (!isMobile && showMoreBtn.textContent === 'Скрыть') {
			console.log(12);
			for (let i = 6; i < childrenLength; i++) {
				children[i].classList.add('examples-card--hidden');
			}
			showMoreBtn.textContent = 'Показать ещё';
		} else if (isMobile && showMoreBtn.textContent === 'Показать ещё') {
			console.log(13);
			for (let i = 3; i < childrenLength; i++) {
				children[i].classList.remove('examples-card--hidden');
			}
			showMoreBtn.textContent = 'Скрыть';
		} else if (isMobile && showMoreBtn.textContent === 'Скрыть') {
			console.log(14);
			for (let i = 3; i < childrenLength; i++) {
				children[i].classList.add('examples-card--hidden');
			}
			showMoreBtn.textContent = 'Показать ещё';
		}
	});
};

showMoreCards('.examples__cards', '.examples__btn');

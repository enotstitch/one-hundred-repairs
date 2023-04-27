const modals = document.querySelectorAll('.modal');
const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const linksCloseModal = document.querySelectorAll('.close-modal');

let unlock = true;

const timeout = 800;

if (modalLinks.length > 0) {
	for (let index = 0; index < modalLinks.length; index++) {
		const modalLink = modalLinks[index];
		modalLink.addEventListener('click', function (e) {
			const modalName = modalLink.getAttribute('href').replace('#', '');
			const curentmodal = document.getElementById(modalName);
			modalOpen(curentmodal);
			e.preventDefault();
		});
	}
}

function modalOpen(curentmodal) {
	if (curentmodal && unlock) {
		const modalActive = document.querySelector('.modal.open');
		if (modalActive) {
			modalClose(modalActive, false);
		} else {
			bodyLock();
		}
		curentmodal.classList.add('open');
	}
}

function modalClose(doUnlock = true) {
	const modalActive = document.querySelector('.modal.open');
	modalActive.classList.remove('open');

	if (doUnlock) {
		bodyUnLock();
	}
}

function bodyLock() {
	const lockPaddingValue =
		window.innerWidth - document.querySelector('.site-container').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

linksCloseModal.forEach((link) => {
	link.addEventListener('click', () => {
		modalClose();
	});
});

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		modalClose();
	}
});

modals.forEach((modal) => {
	modal.addEventListener('click', (e) => {
		if (!e.target.closest('.modal__content')) {
			modalClose();
		}
	});
});

const tableBody = document.querySelectorAll('.table__body');

tableBody.forEach((bodyItem) => {
	const rowItems = bodyItem.children;
	const rowItemsLength = rowItems.length - 1;

	if (rowItemsLength > 5) {
		for (let i = 5; i < rowItemsLength; ++i) {
			rowItems[i].style.display = 'none';
		}
		const tableBtn = rowItems[rowItemsLength];
		tableBtn.style.display = 'table-row';
	}

	bodyItem.addEventListener('click', (e) => {
		const isTableBtn = e.target.classList.contains('table__btn');

		if (isTableBtn && e.target.textContent === 'Показать ещё') {
			for (let i = 5; i < rowItemsLength; ++i) {
				rowItems[i].style.display = 'table-row';
			}
			e.target.textContent = 'Скрыть';
		} else if (isTableBtn && e.target.textContent === 'Скрыть') {
			for (let i = 5; i < rowItemsLength; ++i) {
				rowItems[i].style.display = 'none';
			}
			e.target.textContent = 'Показать ещё';
		}
	});
});

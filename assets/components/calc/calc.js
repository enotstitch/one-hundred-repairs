const square = document.querySelector('.calc-square__range');
const squareOutput = document.querySelector('.calc-square__value');
const squareOutputControls = document.querySelectorAll('.calc-square__button');
const squareAdd = document.getElementById('randgeAdd');
const squareSubstraction = document.getElementById('randgeSubstraction');
const repairPrice = document.querySelector('.calc__cost');
const repairTypes = document.querySelectorAll('.calc-type__value');

const changeInputBackground = () => {
	const min = square.min;
	const max = square.max;
	const val = square.value;

	square.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
};

const repairPrices = {
	draftRepair: 3020,
	capitalRepair: 5520,
	cosmeticRepair: 8082,
	eliteRepair: 13133,
};

let currentRepair = {
	square: 36,
	type: 'draftRepair',
	getRepairPrice() {
		return repairPrices[this.type];
	},
};

const calcUpdate = () => {
	squareUpdate();
	changeInputBackground();
	priceUpdate();
};

const squareUpdate = () => {
	currentRepair.square = square.value;
	squareOutput.value = currentRepair.square;
};

const squareControlsUpdate = (event) => {
	let squareValue = +currentRepair.square;
	if (event.target === squareAdd) {
		squareValue += 1;
	} else {
		squareValue -= 1;
	}
	square.value = squareValue;
	calcUpdate();
};

const priceUpdate = () => {
	const { square } = currentRepair;
	const totalPrice = square * currentRepair.getRepairPrice();
	repairPrice.textContent = totalPrice + '\u20BD';
};

const squareInputUpdate = (event) => {
	const squareInputValue = squareOutput.value;
	square.value = squareInputValue;
	calcUpdate();
};

const repairTypeSelect = (event) => {
	const typeItem = event.target.closest('.calc-type__value');
	const type = typeItem.getAttribute('for');
	currentRepair.type = type;
	priceUpdate();
};

const handleInputChange = () => {
	calcUpdate();
};
squareOutputControls.forEach((btn) => {
	btn.addEventListener('click', squareControlsUpdate);
});

squareOutput.addEventListener('input', squareInputUpdate);

square.addEventListener('input', handleInputChange);

repairTypes.forEach((el) => {
	el.addEventListener('click', repairTypeSelect);
});

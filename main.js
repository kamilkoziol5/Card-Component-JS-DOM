const nameInput = document.querySelector('#input-card-name');
const cardNumberInput = document.querySelector('#input-card-number');
const cardMonthInput = document.querySelector('#input-card-month');
const cardYearInput = document.querySelector('#input-card-year');
const cardCvcInput = document.querySelector('#input-card-cvc');
const confirmBtn = document.querySelector('#confirm-btn');
const readyMessage = document.querySelector('.ready-message');
const formDiv = document.querySelector('.form-container');
const continueBtn = document.querySelector('#continue-btn');

const cardNamePlace = document.querySelector('.card-name');
const cardNumberPlace = document.querySelector('#card-number');
const cardMonthPlace = document.querySelector('.card-month');
const cardYearPlace = document.querySelector('.card-year');
const cardCvcPlace = document.querySelector('.card-cvc');

confirmBtn.addEventListener('click', () => {
	const cardName = nameInput.value.trim();
	const cardNumber = cardNumberInput.value.trim();
	const cardMonth = cardMonthInput.value.trim();
	const cardYear = cardYearInput.value.trim();
	const cardCvc = cardCvcInput.value.trim();

	if (cardName === '') {
		nameInput.classList.add('error');
	} else {
		nameInput.classList.remove('error');
	}
	if (!cardNumber) {
		cardNumberInput.classList.add('error');
		alert('Wpisz odpowiedni numer karty!');
	}

	if (!cardMonth || cardMonth.length < 2) {
		cardMonthInput.classList.add('error');
	} else {
		cardMonthInput.classList.remove('error');
	}

	if (!cardYear || cardYear.length < 2) {
		cardYearInput.classList.add('error');
	} else {
		cardYearInput.classList.remove('error');
	}

	if (cardCvc.length < 3) {
		alert('CVC must be exactly 3 digits!');
		cardCvcInput.classList.add('error');
		return;
	} else {
		cardCvcInput.classList.remove('error');
	}

	cardNamePlace.textContent = cardName;
	cardNumberPlace.textContent = cardNumber;
	cardMonthPlace.textContent = `${cardMonth}/`;
	cardYearPlace.textContent = cardYear;
	cardCvcPlace.textContent = cardCvc;

	nameInput.value = '';
	cardNumberInput.value = '';
	cardMonthInput.value = '';
	cardYearInput.value = '';
	cardCvcInput.value = '';

	formDiv.style.display = 'none';
	readyMessage.style.display = 'flex';
});

cardNumberInput.addEventListener('input', () => {
	let value = cardNumberInput.value.replace(/\D/g, '');
	let formatted = value.replace(/(.{4})/g, '$1 ').trim();
	cardNumberInput.value = formatted;
});

continueBtn.addEventListener('click', () => {
	readyMessage.style.display = 'none';
	formDiv.style.display = 'flex';
});

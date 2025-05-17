const nameInput = document.querySelector('#input-card-name');
const cardNumberInput = document.querySelector('#input-card-number');
const cardMonthInput = document.querySelector('#input-card-month');
const cardYearInput = document.querySelector('#input-card-year');
const cardCvcInput = document.querySelector('#input-card-cvc');
const confirmBtn = document.querySelector('#confirm-btn');
const readyMessage = document.querySelector('.ready-message');
const formDiv = document.querySelector('.form-container');
const continueBtn = document.querySelector('#continue-btn');
const errorName = document.querySelector('.error-name');
const errorNumber = document.querySelector('.error-number');
const errorDate = document.querySelector('.error-date');
const errorCvc = document.querySelector('.error-cvc');

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

	let hasError = false;

	if (cardName === '') {
		nameInput.classList.add('error');
		errorName.style.display = 'block';
		hasError = true;
	} else {
		nameInput.classList.remove('error');
		errorName.style.display = 'none';
	}

	if (cardNumber === '') {
		cardNumberInput.classList.add('error');
		errorNumber.style.display = 'block';
		hasError = true;
	} else if (cardNumber.length < 14) {
		errorNumber.textContent = 'To short number!';
		errorNumber.style.display = 'block';
		cardNumberInput.classList.add('error');
		hasError = true;
	} else {
		cardNumberInput.classList.remove('error');
		errorNumber.style.display = 'none';
	}

	if (!cardMonth || cardMonth.length < 2) {
		cardMonthInput.classList.add('error');
		errorDate.style.display = 'block';
		hasError = true;
	} else {
		cardMonthInput.classList.remove('error');
	}

	if (!cardYear || cardYear.length < 2) {
		cardYearInput.classList.add('error');
		errorDate.style.display = 'block';
		hasError = true;
	} else {
		cardYearInput.classList.remove('error');
		errorDate.style.display = 'none';
	}

	if (cardCvc.length < 3) {
		cardCvcInput.classList.add('error');
		errorCvc.style.display = 'block';
		hasError = true;
	} else {
		cardCvcInput.classList.remove('error');
		errorCvc.style.display = 'none';
	}

	if (hasError) return;

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
	cardNamePlace.textContent = 'Jane Appleseed';
	cardNumberPlace.textContent = '0000 0000 0000 0000';
	cardMonthPlace.textContent = '09';
	cardYearPlace.textContent = '00';
	cardCvcPlace.textContent = '000';
});

const items = document.querySelectorAll('.item');
const total = document.querySelector('.total');

items.forEach(item => {
	const subtract = item.querySelector('.subtract');
	const add = item.querySelector('.add');
	const quantity = item.querySelector('.quantity');
	const price = item.querySelector('.price');
	const heart = item.querySelector('.heart');
	const deleteButton = item.querySelector('.delete');

	let quantityValue = parseInt(quantity.innerText);
	let priceValue = parseFloat(price.innerText.replace('$', ''));

	subtract.addEventListener('click', () => {
		quantityValue--;
		if (quantityValue < 1) {
			quantityValue = 1;
		}
		quantity.innerText = quantityValue;
		price.innerText = `$${quantityValue * priceValue}`;
		calculateTotal();
	});

	add.addEventListener('click', () => {
		quantityValue++;
		quantity.innerText = quantityValue;
		price.innerText = `$${quantityValue * priceValue}`;
		calculateTotal();
	});

	heart.addEventListener('click', () => {
		heart.classList.toggle('liked');
	});

	deleteButton.addEventListener('click', () => {
		item.remove();
		calculateTotal();
	});
});

function calculateTotal() {
	let totalValue = 0;
	items.forEach(item => {
		const price = item.querySelector('.price');
		const priceValue = parseFloat(price.innerText.replace('$', ''));
		totalValue += priceValue;
	});
	total.innerText = `Total: $${totalValue}`;
}
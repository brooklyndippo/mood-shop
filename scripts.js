import data from './data.js'

const itemsContainer = document.querySelector('#items')

// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item'
	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image
	img.width = 300
	img.height = 300
	// Add the image to the div
	newDiv.appendChild(img)
	console.log(img) // Check the console!
	itemsContainer.appendChild(newDiv)
	// Create a p element with the item description
	const description = document.createElement('p');
	description.id = "description"
	description.innerText = data[i].desc
	// Add the description to the div
	newDiv.appendChild(description)
	// Create a p element with the price
	const price = document.createElement('p');
	price.id = "price"
	price.innerText = data[i].price
	// Add teh price to the div
	newDiv.appendChild(price)
	// Create a button element 
	const button = document.createElement('button');
	// Assign the name as the id of each button & the price as a custom data point
	button.id = data[i].name
	button.dataset.price = data[i].price
	//button text "Add to Cart"
	button.innerHTML = "Add to Cart"
	// Add button to the div
	newDiv.appendChild(button)
}

const cart = []

function addItem(name, price) {
	for (let i=0; i < cart.length; i++) {
		if (cart[i].name === name) {
			cart[i].qty += 1;
			return
		}
	}

	const item = {
		name, 
		price, 
		qty: 1}
		//refactored to eliminate redundancies, same name
	cart.push(item)
}

function getQty() {
	//create a loop to calculate the total number of items in a shopping cart
	let qty = 0
	for (let i=0; i <cart.length; i++) {
		qty += cart[i].qty
	}
	return qty
}

function getTotal() {
	//create a loop to calculate the total cost of a shopping cart
	let total = 0.00
	for (let i=0; i< cart.length; i++) {
		total += (cart[i].price * cart[i].qty)
	}
	return total.toFixed(2)
}

function showItems() {
	const qty = getQty()
	console.log(`You have ${qty} items in your cart.`)

	for (let i = 0; i < cart.length; i++) {
		console.log(`- ${cart[i].name} - ${cart[i].price} x ${cart[i].qty}`)
	}

	const total = getTotal()
	console.log(`Your cart total is: $${total}`)
}

addItem('apple', 0.99)
addItem('orange', 1.29)
addItem('apple', 0.99)
addItem('orange', 1.29)
showItems()
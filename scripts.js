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
	const item = {
		name: name, 
		price: price, 
		qty: 1}
	cart.push(item)
}

function showItems() {
	console.log(`You have ${cart.length} items in your cart.`)

}

addItem('apple', 0.99)
addItem('orange', 1.29)

showItems()
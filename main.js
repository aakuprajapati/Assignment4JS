
// select header and section tag

var header = document.querySelector('header');
var section = document.querySelector('section');


// Json file on github and request URL
var requestingURL = 'https://raw.githubusercontent.com/aakuprajapati/Assignment3JS/master/product.json';

// Create a new object
var request = new XMLHttpRequest();

// request() method to get URL from server
request.open('GET', requestingURL);
request.responseType = 'json';


// Sending request to server
request.send();


// loading page
request.onload = function() {

	// declare variable for header
	var weirdDeals = request.response;

	// console for weird
	console.log(weirdDeals);

	//Main Header
	mainHeader(weirdDeals);

	//Top Weird Deals
	topDeals(weirdDeals);
};


// Function for mainHeader

function mainHeader(jsonObj){

	// Set the main Header
	var firstHeader = document.createElement('h1');
	// Grab the main header
	firstHeader.textContent = jsonObj.Head;
	// Set this header in header tag
	header.appendChild(firstHeader);
}


// Another function for top deals

function topDeals(jsonObj){

	//Declaration of top deals variable

	var deals = jsonObj.topDeals;

	//for loop to topdeals object

	for (var i = 0; i < deals.length; i++){

		// Declaration of varibles to set all tags

		var article = document.createElement('article');
		var h2 = document.createElement('h2');
		var product = document.createElement('img');
		var p1 = document.createElement('p');
		var p2 = document.createElement('p');
		var list = document.createElement('ul');



		// Set all property for each element based on JSON

		product.setAttribute('src', 'https://raw.githubusercontent.com/aakuprajapati/Assignment3JS/master/images/' + deals[i].image);
		product.setAttribute('alt', deals[i].name);

		h2.textContent = deals[i].name;
		p1.textContent = 'Price: $' + deals[i].price;

		p2.textContent = 'Description: ' + deals[i].description;

		
		// Declaration of variable for features
		var features = deals[i].feature;



		//For loop for list item
		for (var j = 0; j < features.length; j++){

		var productItem = document.createElement('li');

		productItem.textContent = features[j];
		list.appendChild(productItem);
		}


		article.appendChild(product);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(list);
		section.appendChild(article);
	}
}
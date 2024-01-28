/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let fname = 'Luke';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())

document.querySelector('#name').textContent = fname;
// Step 3: declare and instantiate a variable to hold the current year

let date = new Date();
let year = date.getFullYear();


// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').textContent = year;
// Step 5: declare and instantiate a variable to hold the name of your picture

let picture ="images/1000002234.jpg";
// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src',picture);
document.querySelector('img').setAttribute('width', 300);
document.querySelector('img').setAttribute('height', 240);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let favFoods = ['chocolate', 'steak', 'ice cream'];

// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector('#food').textContent = favFoods.join(', ');

// Step 3: declare and instantiate a variable to hold another favorite food

let anotherfood = 'cake';

// Step 4: add the variable holding another favorite food to the favorite food array

favFoods.push(anotherfood);

// Step 5: repeat Step 2

document.querySelector('#food').textContent = favFoods.join(', ');

// Step 6: remove the first element in the favorite foods array

favFoods.shift();

// Step 7: repeat Step 2

document.querySelector('#food').textContent = favFoods.join(', ');

// Step 8: remove the last element in the favorite foods array

favFoods.pop();

// Step 9: repeat Step 2

document.querySelector('#food').textContent = favFoods.join(', ');
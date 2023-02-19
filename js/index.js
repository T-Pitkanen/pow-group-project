// Declaring our variables
const mobileLinks = document.querySelector('.mobile-nav-links');
const mobileLink = document.querySelectorAll('.mobile-nav-link');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');

//We are using an if statement to check if mobileLinks have the showMenu class
// If it does, we're removing the showMenu class
//If it doesn't, we're adding the showMenu class

function toggleMenu() {
	if (mobileLinks.classList.contains('showMenu')) {
		mobileLinks.classList.remove('showMenu');
		closeIcon.style.display = 'none';
		menuIcon.style.display = 'block';
	} else {
		mobileLinks.classList.add('showMenu');
		closeIcon.style.display = 'block';
		menuIcon.style.display = 'none';
	}
}

//Setting closeIcon to display none
closeIcon.style.display = 'none';

//Adding a click event for hamburger
//When clicked, it will run the toggleMenu function
hamburger.addEventListener('click', toggleMenu);

//Looping through all of the menuItems and adding an click event to each of them
mobileLink.forEach((menuItem) => {
	menuItem.addEventListener('click', toggleMenu);
});

//NEWSLETTER

//Checking if the email is valid
const validateEmail = (email) =>
	email.match(
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
	);

//declaring a const variable
const newsForm = document.querySelector('#newsForm');

//listening for a submit event on the form
newsForm.addEventListener('submit', (e) => {
	e.preventDefault();

	//setting the statusElement.textContent to 'Sending ... ' when pressed submit
	const statusElement = document.querySelector('#status');
	statusElement.textContent = 'Sending ... ';

	const email = document.querySelector('.finp');

	//Email validation

	//if email is invalid, adding the alertForm class
	if (email.value === '' || !validateEmail(email.value)) {
		email.classList.add('alertForm');
	} else {
		email.classList.remove('alertForm');
	}

	//if email has alertForm class, changes textContent of the status
	if (email.classList.contains('alertForm')) {
		statusElement.textContent = 'Check your details again 😊';
	} else {
		//changing textContent after 3s
		setTimeout(() => {
			const statusElement = document.querySelector('#status');
			statusElement.textContent = 'Thank you for subscribing! 🎉 ';
		}, 3000);
	}
	//changing textContent after 10s
	setTimeout(() => {
		const statusElement = document.querySelector('#status');
		statusElement.textContent = ' ';
	}, 10000);

	const contactObj = {
		email: email.value,
	};

	console.log(contactObj);
});

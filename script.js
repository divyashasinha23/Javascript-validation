const form = document.getElementById('form_main');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('phone');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkValidity();
});

function checkValidity() {

	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	const numberValue = number.value.trim();
	
	
	if(nameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(numberValue === '') {
		setErrorFor(number, 'Password cannot be blank');
	} else {
		setSuccessFor(number);
	}
	

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email){
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}







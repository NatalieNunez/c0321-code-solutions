var $userName = document.getElementById('user-name');
var $userEmail = document.getElementById('user-email');
var $userMessage = document.getElementById('user-message');
var $contactForm = document.getElementById('contact-form');
var userData = {};

function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('value of name:', event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  userData.name = $contactForm.elements.name.value;
  userData.email = $contactForm.elements.email.value;
  userData.message = $contactForm.elements.message.value;
  console.log(userData);
  $contactForm.reset();
}

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);

$contactForm.addEventListener('submit', handleSubmit);

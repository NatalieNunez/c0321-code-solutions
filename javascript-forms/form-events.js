var $userName = document.getElementById('user-name');
var $userEmail = document.getElementById('user-email');
var $userMessage = document.getElementById('user-message');
var $contactForm = document.getElementById('contact-form');
var person = {};

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
  person.name = $contactForm.elements.name.value;
  person.email = $contactForm.elements.email.value;
  person.message = $contactForm.elements.message.value;
  console.log(person);
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

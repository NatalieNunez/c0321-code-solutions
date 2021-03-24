var $contactForm = document.getElementById('contact-form');
var userData = {};

function handleSubmit(event) {
  event.preventDefault();
  userData.name = $contactForm.elements.name.value;
  userData.email = $contactForm.elements.email.value;
  userData.message = $contactForm.elements.message.value;
  console.log(userData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);

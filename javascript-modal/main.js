var $openButton = document.querySelector('.open-button');
var $modal = document.querySelector('.modal');
var $surveyButton = document.querySelector('.survey-button');

$openButton.addEventListener('click', function (event) {
  $modal.className = 'modal-open';
});

$surveyButton.addEventListener('click', function (event) {
  $modal.className = 'modal';
});

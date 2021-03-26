var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

function handlesClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tabs.length; i++) {
    if ($tabs[i] === event.target) {
      $tabs[i].className = 'tab active';
    } else {
      $tabs[i].className = 'tab';
    }
  }

  var checkValue = event.target.dataset.view;
  for (var k = 0; k < $views.length; k++) {
    if ($views[k].dataset.view !== checkValue) {
      $views[k].className = 'hidden';
    } else {
      $views[k].className = 'view';
    }
  }
}

$tabContainer.addEventListener('click', handlesClick);

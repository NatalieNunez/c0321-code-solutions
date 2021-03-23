var $container = document.querySelector('.container.on');
var $lightbulb = document.querySelector('.lightbulb.on');

function clickLightbulb(event) {
  if ($lightbulb.className === 'lightbulb on') {
    $lightbulb.className = 'lightbulb off';
    $container.className = 'container off';
  } else {
    $lightbulb.className = 'lightbulb on';
    $container.className = 'container on';
  }
}

$lightbulb.addEventListener('click', clickLightbulb);

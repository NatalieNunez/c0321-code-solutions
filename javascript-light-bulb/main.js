var $container = document.querySelector('.container.off');
var $lightbulb = document.querySelector('.lightbulb.off');
var isOn = false;

function clickLightbulb(event) {
  isOn = !isOn;
  if (isOn) {
    $container.className = 'container on';
    $lightbulb.className = 'lightbulb on';
  } else {
    $container.className = 'container off';
    $lightbulb.className = 'lightbulb off';
  }
}

$lightbulb.addEventListener('click', clickLightbulb);

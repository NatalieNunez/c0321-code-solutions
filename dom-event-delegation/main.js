var $taskList = document.querySelector('.task-list');

function handleClickList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('closet .task-list-item:', event.target.closest('.task-list-item'));
    var $closest = event.target.closest('.task-list-item');
    $closest.remove();
  }
}

$taskList.addEventListener('click', handleClickList);

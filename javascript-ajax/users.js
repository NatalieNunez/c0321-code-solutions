var $userList = document.getElementById('user-list');

function load() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var responseArr = xhr.response;
    console.log('xhr status', xhr.status);
    console.log('xhr response:', xhr.response);
    for (var i = 0; i < responseArr.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = responseArr[i].name;
      $userList.appendChild(listItem);
    }
  });
  xhr.send();
}

load();

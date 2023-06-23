function showList(listId) {
  var lists = document.getElementsByClassName('todo-list')[0].getElementsByTagName('div');
  for (var i = 0; i < lists.length; i++) {
    if (lists[i].id === listId) {
      lists[i].classList.remove('hidden');
    } else {
      lists[i].classList.add('hidden');
    }
  }
}

var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);

  myNodelist[i].addEventListener('click', function() {
    this.classList.toggle('checked');
  });
}

var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement(ulId, inputId) {
  var ul = document.getElementById(ulId);
  var li = document.createElement("li");
  var inputValue = document.getElementById(inputId).value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
    alert("Bu alan boş bırakılmaz!");
  } else {
    ul.appendChild(li);
  }
  document.getElementById(inputId).value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };

  li.addEventListener('click', function() {
    this.classList.toggle('checked');
  });
}

function createNewList() {
  var todoListDivs = document.getElementsByClassName('todo-list')[0].getElementsByTagName('div');
  var newListId = "list" + (todoListDivs.length + 1);
  var newListTitle = "To-Do List " + (todoListDivs.length + 1);

  var newDiv = document.createElement('div');
  newDiv.id = newListId;
  newDiv.classList.add('hidden');

  var newHeading = document.createElement('h2');
  newHeading.innerText = newListTitle;

  var newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.id = 'myInput' + (todoListDivs.length + 1);
  newInput.placeholder = 'Yeni aktivite giriniz...';

  var newAddBtn = document.createElement('span');
  newAddBtn.classList.add('addBtn');
  newAddBtn.innerText = 'Add';

  var ulId = 'myUL' + (todoListDivs.length + 1);
  var inputId = 'myInput' + (todoListDivs.length + 1);
  newAddBtn.addEventListener('click', function() {
    newElement(ulId, inputId);
  });

  var newUL = document.createElement('ul');
  newUL.id = 'myUL' + (todoListDivs.length + 1);

  newDiv.appendChild(newHeading);
  newDiv.appendChild(newInput);
  newDiv.appendChild(document.createElement('br'));
  newDiv.appendChild(document.createElement('br'));
  newDiv.appendChild(newAddBtn);
  newDiv.appendChild(newUL);

  var todoList = document.getElementsByClassName('todo-list')[0];
  todoList.appendChild(newDiv);

  showList(newListId);
  addListToMenu(newListId, newListTitle);

  var newmyNodelist = newDiv.getElementsByTagName("LI");
  for (var i = 0; i < newmyNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newmyNodelist[i].appendChild(span);

    newmyNodelist[i].addEventListener('click', function() {
      this.classList.toggle('checked');
    });
  }

  var newclose = newDiv.getElementsByClassName("close");
  for (var i = 0; i < newclose.length; i++) {
    newclose[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  var newlist = newDiv.querySelector('ul');
  newlist.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

function addListToMenu(listId, listTitle, isActive) {
  var menu = document.getElementById('menu');
  var listItem = document.createElement('li');
  var button = document.createElement('button');
  button.className = isActive ? 'list-button active' : 'list-button';
  button.setAttribute('onclick', `showList('${listId}')`);
  
  var title = document.createElement('span');
  title.innerText = listTitle;
  button.appendChild(title);

  listItem.classList.add('list-item');
  listItem.appendChild(button);
  menu.insertBefore(listItem, menu.lastElementChild);
}


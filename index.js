'use strict';

function handleInput(event) {
  event.preventDefault(); 

  var inputBox = event.target.inputBox.value;
  if (!inputBox) {
    return alert('No value!');
  }
}


var listener = document.getElementById('form');
listener.addEventListener('submit', handleInput);
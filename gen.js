var symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7',
  '8', '9', '!', '"', '#', '$', '%', '&', '(', ')',
  '*', '+', ',', '-', '.', '/', ':', ';', '<', '=',
  '>', '?', '@', '[', '\\', ']', '_', '{', '}', '~']

var pass = document.getElementById('text');
var next = document.getElementById('next');

function handler() {
  var passList = [];
  for (var i = 0; i < 12; i++) {
    var num = Math.floor(Math.random() * symbols.length);
    passList.push(symbols[num]);
  }

  var password = passList.join('');
  pass.textContent = password;
};

function copyText() {
  var copyTextarea = document.getElementById('text');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
};

next.addEventListener("click", handler);
copy.addEventListener("click", copyText);

var symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7',
  '8', '9', '!', '"', '#', '$', '%', '&', '(', ')',
  '*', '+', ',', '-', '.', '/', ':', ';', '<', '=',
  '>', '?', '@', '[', '\\', ']', '_', '{', '}', '~']

var secure = document.getElementById('secure');
var ultra = document.getElementById('ultra');

function geniePass(numLength) {
  do {
    var passList = [];
    for (var i = 0; i < numLength; i++) {
      var num = Math.floor(Math.random() * symbols.length);
      passList.push(symbols[num]);
    }

    var password = passList.join('');
  } while (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(password) != true);

  text.textContent = password;
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

secure.addEventListener("click", () => {
  geniePass(8);
});
ultra.addEventListener("click", () => {
  geniePass(12);
});
copy.addEventListener("click", copyText);

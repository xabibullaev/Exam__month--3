var string = prompt("xoxlagan soningizni kiriting");
var value = checkPalindrome(string);
function checkPalindrome(array) {
  const len = array.length;
  for (let i = 0; i < len / 2; i++) {
    if (array[i] !== array[len - 1 - i]) {
      alert("Bu poledrom son emas");
      return;
    }
  }

  alert("bu poledrom son");
}

console.log(value);

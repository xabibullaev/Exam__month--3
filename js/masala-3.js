var t = [5, -6, 9, -1, -2, 3];

var positiveArray = [];
var negativeArray = [];

t.forEach(function (item) {
  if (item < 0) {
    negativeArray.push(item);
  } else {
    positiveArray.push(item);
  }
});

console.log(positiveArray); // should output [5, 6, 1]
console.log(negativeArray);

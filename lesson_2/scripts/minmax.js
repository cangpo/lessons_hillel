let numberFirst = prompt('Enter first number');
let numberSecond = prompt('Enter second number');
let numberThird = prompt('Enter third number');
let numberFourth = prompt('Enter fourth number');

let numbersArray = [numberFirst, numberSecond, numberThird, numberFourth];

let minValue = Math.min(...numbersArray);
let maxValue = Math.max(...numbersArray);
let multiOutput = minValue*maxValue;

if (!isNaN(multiOutput)){
  alert(multiOutput);
} else {
  alert('Please reload page and enter correct numbers');
}
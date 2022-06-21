let ageNumber = prompt('Your age');
ageNumber = Number(ageNumber);

let ageWord = 'років';

if (ageNumber === 1 || ageNumber % 10 === 1 && ageNumber % 100 !== 11){
  ageWord = 'рік';
} else if (ageNumber % 10 >= 2 && ageNumber % 10 <= 4 && ageNumber % 100 !== 11){
  ageWord = 'роки';
}

const ageOutput = ageNumber + ' ' + ageWord;

if (ageNumber){
  alert(ageOutput);
} else {
  alert('Enter correct age in number');
}
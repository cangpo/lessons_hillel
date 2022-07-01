let arrayLength = Number(prompt('Enter array length'));

if (Number.isInteger(arrayLength) && arrayLength > 0){
  
  let newArray = [];
  for (i = 1; i <= arrayLength; i++){
    newArray.push((Math.random() * 100).toFixed());
  }
  
  let averageValue = 0;
  for(i = 0; i < newArray.length; i++){
    averageValue += Number(newArray[i])
  }
  averageValue = averageValue / arrayLength;
  
  alert('Your new array: ['+newArray+']; Average number from sum elements: '+averageValue+';');
  
} else {
  alert('Refresh page, and enter valid integer number, more than 0');
}
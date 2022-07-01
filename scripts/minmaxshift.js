function shiftMinMax(min, max, arr){
  
  let newArr = arr,
      indexMin = 0,
      indexMax = 0;
  
  for (i = 0; i < arr.length; i++){
    if (arr[i] === min){
      indexMin = i;
    }
    if (arr[i] === max){
      indexMax = i;
    }
  }
  
  newArr[indexMin] = max;
  newArr[indexMax] = min;

  return newArr;
}

let arrayLength = Number(prompt('Enter array length'));

if (Number.isInteger(arrayLength) && arrayLength > 0){
  
  let preArray = [];
  
  for (i = 0; i < arrayLength; i++){
    let numToArray = Number(prompt('Add number to array'));
    if (!isNaN(numToArray)){
      preArray.push(numToArray);  
    } else {
      alert('Entered value must be a numeric, refresh page and start again');
      break;
    }
  }
  
  if (preArray.length > 0){
    
    let arrayMin = Math.min(...preArray);
    let arrayMax = Math.max(...preArray);
    
    alert('Your array: ['+preArray+'], Мінімальний = '+arrayMin+', Максимальний = '+arrayMax+', Новий масив = ['+shiftMinMax(arrayMin, arrayMax, preArray)+']');
  }
  
} else {
  alert('Refresh page, and enter valid integer number, more than 0');
}
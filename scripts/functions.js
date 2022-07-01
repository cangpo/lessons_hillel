let testArr = ['a', 'b', 'c', 'd'];

function newShift(arr){ 
  let newArr = [];
  let arrVal = arr[0];
  for (a = 0; a < arr.length - 1; a++){
    b = a + 1;
    newArr[a] = arr[b];
  }
  return newArr; 
  //return arrVal;
}

function newUnShift(arr, val){ 
  let newArr = [];
  newArr[0] = val;
  for (a = 0; a < arr.length; a++){
    b = a + 1;
    newArr[b] = arr[a]; 
  }
  return newArr;
}

function newPop(arr){ 
  let newArr = [];
  let arrVal = arr[arr.length - 1];
  for (a = 0; a < arr.length - 1; a++){
    newArr[a] = arr[a]; 
  }
  return newArr;
  //return arrVal;
}

function newPush(arr, val){ 
  let newArr = [];
  newArr[arr.length] = val;
  for (a = 0; a < arr.length; a++){
    newArr[a] = arr[a]; 
  }
  return newArr;
}

console.log(newShift(testArr), testArr);
console.log(newUnShift(testArr, 'value'), testArr);
console.log(newPop(testArr), testArr);
console.log(newPush(testArr, 'value'), testArr);
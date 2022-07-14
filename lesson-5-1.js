let arr = [1, 8, 37, 5, 17];
let max = arr[0];

function getMax(arr, i){

  if (i === arr.length){
    return max;
  }

  max = arr[i] > max ? arr[i] : max;

  i++;
  return getMax(arr, i);
}

console.log(`Max element from array [${arr}] = ${getMax(arr, 0)};`);

let f = 5;

function factorial(val){
  if (val === 0){
    return 1;
  }
  return val * factorial(val - 1);
}

console.log(`Factorial from ${f} = ${factorial(f)};`);
const n = 3;
const m = 3;

const cornerTopLeft = n - (n - 1);
const cornerTopRight = n;
const cornerBottomLeft = n * (m - 1) + 1; 
const cornerBottomRight = n * m;

let allNums = [];
for (let i = 0; i < n * m; i++){
  allNums[i] = i + 1;
} 
const edgeLeft = Number(allNums.filter(value => value === n + 1).join(''));
const edgeRight = Number(allNums.filter(value => value === n * (m - 1)).join(''));
const edgeTop = Number(allNums.filter(value => value === n - 1).join(''));
const edgeBot = Number(allNums.filter(value => value === n * m - 1).join(''));

function numsAdj(val){
  
  if (isNaN(val)){
    return false;
  }

  val = Number(val);
  valStr = val.toString();
  nums = [];
  
  if (val === cornerTopLeft){
    nums.push(valStr, edgeTop.toString(), edgeLeft.toString());
    
  } else if (val === cornerTopRight){
    nums.push(valStr, edgeTop.toString(), edgeRight.toString());
    
  } else if (val === cornerBottomLeft){
    nums.push(valStr, edgeLeft.toString(), edgeBot.toString());
    
  } else if (val === cornerBottomRight){
    nums.push(valStr, edgeBot.toString(), edgeRight.toString());
    
  } else if (val === edgeLeft){
    nums.push(valStr, cornerTopLeft.toString(), cornerBottomLeft.toString(), (edgeLeft + 1).toString());
    
  } else if (val === edgeRight){
    nums.push(valStr, cornerTopRight.toString(), cornerBottomRight.toString(), (edgeRight - 1).toString());
    
  } else if (val === edgeTop) {
    nums.push(valStr, cornerTopLeft.toString(), cornerTopRight.toString(), (edgeLeft + 1).toString());
    
  } else if (val === edgeBot) {
    nums.push(valStr, cornerBottomLeft.toString(), cornerBottomRight.toString(), (edgeLeft + 1).toString(), '0');
    
  } else if (val === 0){
    nums.push(valStr, edgeBot.toString());
    
  } else {
    nums.push(valStr, (val + 1).toString(), (val - 1).toString(), (val + n).toString(), (val - n).toString())
  }
  
  return nums;
}

function addNum(arr1, arr2){
  let result = [];
  arr1.forEach((el) => {
    let a2 = arr2.map((el2) => {
      el2 = el + el2;
      result.push(el2);
    }) 
  })
  
  return result;
}

let observedCode = '1357';

function getCodes(observedCode){
  let result = '';
  
  let numArr1 = numsAdj(observedCode[0]);
  let numArr2 = numsAdj(observedCode[1]);
  let numArr3 = numsAdj(observedCode[2]);
  let numArr4 = numsAdj(observedCode[3]);
  
  if (observedCode.length === 1){
    result = numArr1;
    
  } else if (observedCode.length === 2) {
    result = addNum(numArr1, numArr2);
    
  } else if (observedCode.length === 3) {
    result = addNum(addNum(numArr1, numArr2), numArr3);
    
  } else if (observedCode.length === 4) {
    result = addNum(addNum(addNum(numArr1, numArr2), numArr3), numArr4);
    
  }
  
  return result;
}

console.log(getCodes(observedCode));

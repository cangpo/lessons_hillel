function inputCheck(val){
  if (Number.isInteger(val) && val > 0){
    return true;
  }
}

function randNumber(n){
  let num = (Math.random() * 10 * n).toFixed();
  if (Math.random() <= 0.5){
    num = num * -1;
  };
  return num;
}

function findMultiplesNumbers(val, n){
  val = Number(val);
  n = Number(n);
  let num = 0;
  if (val % n === 0){
    num = val;
  }
  return num;
}

function arrayOutput(arr){
  let output = '';
  for (i = 0; i < arr.length; i++){
    output += '['+arr[i]+']<br>';    
  }
  return output;
}

const result = document.getElementById('result');
let arrN = Number(prompt('Enter N for multi dimension array'));
let arrM = Number(prompt('Enter M for multi dimension array'));
let multiplesNumber = Number(prompt('Enter multiples number for multidemensial array'));

if (inputCheck(arrN) === true && inputCheck(arrM) === true && inputCheck(multiplesNumber) === true){
  
  let arr = [];
  
  for (a = 0; a < arrN; a++){
    let toArr = [];
    for (b = 0; b < arrM; b++){
      toArr[b] = randNumber(multiplesNumber);
    }
    arr[a] = toArr;
  };

  let myNumbersMultiples = '';

  for (i = 0; i < arrN; i++){
    for (j = 0; j < arrM; j++){
      if (findMultiplesNumbers(arr[i][j], multiplesNumber) !== 0){
        myNumbersMultiples += ''+findMultiplesNumbers(arr[i][j], multiplesNumber)+'; ';
      }
    }
  }
  
  let myNumbersMultiplesUnique = [...new Set(myNumbersMultiples.split('; '))].join('; ');
  
  if (myNumbersMultiplesUnique === ''){
    myNumbersMultiplesUnique = 'None of matching numbers wasnt generated by random, refresh page and try again';
  }

  result.innerHTML = `
    ---<br>
    Array: <br>
    `+arrayOutput(arr)+`
    ---<br>
    Numbers (% `+multiplesNumber+`): <br>
    `+myNumbersMultiplesUnique+`<br>
    ---
  `;
  
} else {
  alert('Enter proper numbers, must be higher than 0 and integer');
}

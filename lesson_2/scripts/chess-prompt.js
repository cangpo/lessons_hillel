const horse = document.getElementById('horse');
const horseStep = document.getElementById('horse-step');

function MinMax(val){
  if (typeof val === 'number' && Math.sign(val) !== -1) {
    if (val && val >= 1 && val <= 8){
      return Math.abs(val);
    }
  }
}

let startX = MinMax(Number(prompt('Enter start X')));
let startY = MinMax(Number(prompt('Enter start Y')));
let moveX = MinMax(Number(prompt('Enter move to X')));
let moveY = MinMax(Number(prompt('Enter move to Y')));

if (startX && startY){
  let xMovePos = 0;
  let yMovePos = 0;
  
  horseStep.style.bottom = startX * 40 - 40 + 'px'; 
  horseStep.style.left = startY * 40 - 40 + 'px'; 
  horseStep.style.display = 'block';

  if (moveX && moveY){

      if (moveX === startX + 2 || moveX === startX - 2){
        xMovePos = moveX;

        if (moveY === startY + 1 || moveY === startY - 1){
          yMovePos = moveY;
        }
      } else if (moveY === startY + 2 || moveY === startY - 2){
        yMovePos = moveY;

        if (moveX === startX + 1 || moveX === startX - 1){
          xMovePos = moveX;
        }
      }

    if (xMovePos != 0 && yMovePos != 0){
      alert('True');
      horse.style.bottom = xMovePos * 40 - 40 + 'px';
      horse.style.left = yMovePos * 40 - 40 + 'px';  
    } else {
      alert('False, horse cant move like that');
    }

  } else {
    alert('Type move numbers between 1 and 8');
  }

} else {
  alert('Type start numbers between 1 and 8');
}

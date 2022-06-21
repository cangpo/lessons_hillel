const horse = document.getElementById('horse');
const horseStep = document.getElementById('horse-step');

function MinMax(val){
  if (val >= 1 && val <= 8){
    return val;
  }
}

let startX = MinMax(Math.abs(prompt('Enter start X')));
let startY = MinMax(Math.abs(prompt('Enter start Y')));
let moveX = MinMax(Math.abs(prompt('Enter move to X')));
let moveY = MinMax(Math.abs(prompt('Enter move to Y')));

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

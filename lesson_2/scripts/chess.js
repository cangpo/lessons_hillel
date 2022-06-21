const result = document.getElementById('result');
const horse = document.getElementById('horse');
const horseStep = document.getElementById('horse-step');

const startX = document.getElementById('startX');
const startY = document.getElementById('startY');
const moveX = document.getElementById('moveX');
const moveY = document.getElementById('moveY');

function MinMax(val){
  if (typeof val === 'number' && Math.sign(val) !== -1) {
    if (val && val >= 1 && val <= 8){
      return Math.abs(val);
      result.innerHTML = '';
    }
  } else {
    result.innerHTML = 'Enter number between 1 and 8';
  }
}

window.addEventListener('input', function(){
  
    let startXval = MinMax(Number(startX.value));
    let startYval = MinMax(Number(startY.value));
    let moveXval = MinMax(Number(moveX.value));
    let moveYval = MinMax(Number(moveY.value));
    
    if (startXval && startYval){
      let xStartPos = startXval;
      let yStartPos = startYval;
      
      moveX.disabled = false; moveY.disabled = false;
      
      horse.style.bottom = xStartPos * 40 - 40 + 'px'; 
      horse.style.left = yStartPos * 40 - 40 + 'px'; 
      horseStep.style.bottom = xStartPos * 40 - 40 + 'px'; 
      horseStep.style.left = yStartPos * 40 - 40 + 'px'; 
      result.innerHTML = xStartPos +' '+ yStartPos + ' Enter move to params';
      
      let xMovePos = 0;
      let yMovePos = 0;
      
      if (moveXval && moveYval){
        
          if (moveXval === startXval + 2 || moveXval === startXval - 2){
            xMovePos = moveXval;
            
            if (moveYval === startYval + 1 || moveYval === startYval - 1){
              yMovePos = moveYval;
            }
          } else if (moveYval === startYval + 2 || moveYval === startYval - 2){
            yMovePos = moveYval;

            if (moveXval === startXval + 1 || moveXval === startXval - 1){
              xMovePos = moveXval;
            }
          }
       
        if (xMovePos != 0 && yMovePos != 0){
          horse.style.bottom = xMovePos * 40 - 40 + 'px';
          horse.style.left = yMovePos * 40 - 40 + 'px';  
          result.innerHTML = 'True';
          horseStep.style.display = 'block';
        } else {
          horseStep.style.display = 'none';
          result.innerHTML = 'False, horse cant move like that';
        }
        
      }
      
    }

}, false);
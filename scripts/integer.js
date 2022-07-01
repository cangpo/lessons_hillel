let startNum = Number(prompt('Enter start number'));
let endNum = Number(prompt('Enter end number'));

if (Number.isInteger(startNum) && Number.isInteger(endNum)){
  
  if (startNum < endNum && startNum != endNum){
    
    let resultArray = [];
    for (startNum; startNum <= endNum; startNum++){
      resultArray.push(startNum); 
    }
    
    alert('Result: '+resultArray);

  } else { 
    alert('Start number must be less and no equal to end number, refresh page and enter valid Numbers');
  }
  
} else {
  alert('Refresh page and enter Integer Numbers');
}
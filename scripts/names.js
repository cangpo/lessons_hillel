function letterCheck(val){
  let letter = val.toLowerCase();
  const allowedLetters = ['a', 'b', 'c'];  
  for(i = 0; i < allowedLetters.length; i++){
    if(letter === allowedLetters[i]){
      return true;
    }
  }
}

function randIndex(length){
  let result = Math.floor(Math.random() * length);
  return result;
};

const maleNames = {
  'A': ['Alexander', 'Ashton', 'Anton'],
  'B': ['Bill', 'Brut'],
  'C': ['Constantin', 'Caesar'],
}
const maleSurnames = {
  'A': ['Acerola', 'Akebia', 'Almond'],
  'B': ['Babaco', 'Barbadine'],
  'C': ['Cabeluda', 'Caimito'],
}

const femaleNames = {
  'A': ['Ashly', 'America'],
  'B': ['Bella', 'Beatrice', 'Brystol'],
  'C': ['Charlotte', 'Chloe', 'Cecilia']
}
const femaleSurnames = {
  'A': ['Arrowroot', 'Ambada'],
  'B': ['Beets', 'Broccoflower', 'Broccolini'],
  'C': ['Celeriac', 'Carrots', 'Calabrese']
}

let nameLetter = prompt('Enter first letter of name (a, b, c)');
let surnameLetter = prompt('Enter first letter of surname (a, b, c)');
let gender = prompt('Enter gender (male, female)');

let genderCheck = gender === 'male' || gender === 'female';

if (letterCheck(nameLetter) && letterCheck(surnameLetter) && genderCheck){
  
  nameLetter = nameLetter.toUpperCase();
  surnameLetter = surnameLetter.toUpperCase();
  
  if (gender === 'male'){
    
    let NameArrLength = maleNames[nameLetter].length;
    let name = maleNames[nameLetter][randIndex(NameArrLength)];
    
    let SurnameArrLength = maleSurnames[surnameLetter].length;
    let surname = maleSurnames[surnameLetter][randIndex(SurnameArrLength)];
    
    alert('Your name is: '+name+'. Your surname is: '+surname+'. Your gender is male');
    
  } else if (gender === 'female'){
    
    let NameArrLength = femaleNames[nameLetter].length;
    let name = femaleNames[nameLetter][randIndex(NameArrLength)];
    
    let SurnameArrLength = femaleSurnames[surnameLetter].length;
    let surname = femaleSurnames[surnameLetter][randIndex(SurnameArrLength)];
    
    alert('Your name is: '+name+'. Your surname is: '+surname+'. Your gender is female');
    
  }
  
} else {
  alert('Error occured, letters must be "a, b, c", gender "male or female", refresh page and enter valid values');
}
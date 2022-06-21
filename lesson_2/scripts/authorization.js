let userName = prompt('Name:');
let userPassword = prompt('Password:');

if(userName === 'admin' && userPassword === 'qWeRty123'){
  alert('Hello admin! Access granted');
} else {
  alert('Authorization failed! Reload page');
}
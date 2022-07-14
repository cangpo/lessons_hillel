function quotient(a, b){
    let result = '';

    if (isNaN(a) || isNaN(b)){
        return false;
    }

    result = parseInt(a / b);
    
    return result;     
}

function doFunction(a, b, foo){
    return foo.call(this, a, b);
}

console.log(`7, 2, quotient: ${doFunction(7, 2, quotient)};`);

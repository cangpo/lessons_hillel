function power(a){
    return function powB(b){
        return Math.pow(a, b);
    }
}

const pow = power(5)(2);

console.log(`Currying power: ${pow};`);
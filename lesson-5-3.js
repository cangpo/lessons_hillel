const sumArr = [];

function sum(val){

    let result = '';
    sumArr.push(val);

    function createSum(arr){
        result = sumArr.reduce((a,b) => a + b, 0);
        return result;
    }
    return createSum(sumArr);
}

console.log(`first 3: ${sum(3)}, second +5: ${sum(5)}, third +20: ${sum(20)};`);
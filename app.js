function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
var combineValue;
combineValue = add;
console.log(combineValue(8, 8));
printResult(add(5, 12));

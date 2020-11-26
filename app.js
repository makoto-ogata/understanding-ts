function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
var combineValue;
combineValue = add;
console.log(combineValue(8, 8));
printResult(add(5, 12));

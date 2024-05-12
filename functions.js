"use strict";
function add(num1, num2, num3) {
    return num1 + num2;
}
console.log(add(2, 3));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 3));
const mul = function (num1, num2, ...num3) {
    return num1 * num2 * num3.reduce((a, b) => a + b, 0);
};
console.log(mul(2, 3, 4));
console.log(mul(2, 3, ...[5, 6, 7]));
let numbers = [7, 8, 9];
console.log(mul(2, 3, ...[5, 6, 7], ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
//let concateRes = getItems([1, 2, 3, 4, 5]);
let concateRes = getItems([1, 2, 3, 4, 5]);
//let concateRes2 = getItems(["a", "b", "c", "d"]);
let concateRes2 = getItems(["a", "b", "c", "d"]);
console.log(concateRes);
console.log(concateRes2);

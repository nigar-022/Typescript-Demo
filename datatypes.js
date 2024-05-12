"use strict";
let lname = "jphn";
//lname = 10; //Type 'number' is not assignable to type 'string'
let fname;
fname = "Nigars";
let newName = fname.toUpperCase();
console.log(newName);
let age = 20;
//age = "hui"  //Type 'string' is not assignable to type 'number'.
let isValid = false;
console.log(isValid); //Variable 'isValid' is used before being assigned.
let numList;
//let numList: Array<number>;
numList = [1, 2, 3, 4, 5];
const res = numList.reduce((acc, num) => acc + num);
console.log(res);
let c = 0 /* Color.red */;
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
//swapNums[2] //Tuple type '[number, number]' of length '2' has no element at index '2'.
swapNums[1];
console.log(swapNums);

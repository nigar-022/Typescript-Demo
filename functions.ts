function add(num1: number, num2: number, num3?: number): number {
  return num1 + num2;
}

console.log(add(2, 3));

const sub = (num1: number, num2: number, num3: number = 10): number =>
  num1 - num2 - num3;
console.log(sub(2, 3));

const mul = function (num1: number, num2: number, ...num3: number[]): number {
  return num1 * num2 * num3.reduce((a, b) => a + b, 0);
};
console.log(mul(2, 3, 4));
console.log(mul(2, 3, ...[5, 6, 7]));
let numbers = [7, 8, 9];
console.log(mul(2, 3, ...[5, 6, 7], ...numbers));

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

//let concateRes = getItems([1, 2, 3, 4, 5]);

let concateRes = getItems<number>([1, 2, 3, 4, 5]);

//let concateRes2 = getItems(["a", "b", "c", "d"]);
let concateRes2 = getItems<string>(["a", "b", "c", "d"]);
console.log(concateRes);
console.log(concateRes2);

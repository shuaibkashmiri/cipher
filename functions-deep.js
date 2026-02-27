// A Closer Look into Functions

// function start() {
//   greet();
// }

// start();

// callback
// function greet() {
//   console.log("Hello World!");
// }

// // HOF higher order functions
// function execute(fn) {
//   return fn();
// }

// execute(greet);

// function add(a, b) {
//   return a + b;
// }

// function calculator(a, b, opr) {
//   return opr(a, b);
// }

// console.log(calculator(2, 3, add));

// // // very very important
// // // closures
// function outer() {
//   let count = 0;
//   return function inner() {
//     return count++;
//   };
// }

// const counter = outer();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// destructuring

// es6

// /array
// const nums = [2, 3, 5];

// const [a, , c, d] = nums;

// console.log();

// object destructuring
// let user = { name: "Harris", age: 20 };
// let { name: fullname, age } = user;

// console.log(fullname);

// spread operator

// const arr1 = [2, 4, 5, 6];
// const arr2 = [5, 7];
// console.log(arr1);
// // console.log(nums);
// console.log(...arr1);

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// let user = { name: "Harris", age: 20 };

// const newUser = { ...user, age: 23 };

// console.log(newUser);

// rest operator

// function collect(...nums) {
//   return nums.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
// }

// console.log(collect(2, 3, 9, 8, 7, 8));

// const nums = [2, 3, 4, 5, 6];

// console.log(nums.reduce((acc, curr) => acc + curr));

count = 0;
console.log(++count);

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

// // very very important
// // closures
// function outer() {
//   let count = 0;
//   return function inner() {
//     return count++;
//   };
// }

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

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
// let { name, age} = user;

// Execution Context

// Hoisting

// debugger;
// console.log(a);

// let a = "Hello";
// console.log(a);
// debugger;

// // callstack
// function first() {
//   console.log("First");
// }

// function second() {
//   console.log("second");
//   first();
//   console.log("another Console ");
// }

// second();

//

// setTimeout(() => {
//   console.log("hello world");
// }, 2000);

// setTimeout(() => {
//   console.log("Hello Again!");
// }, 1000);

// console.log("Javascript");
// function oneFunction() {
//   console.log("Harris");
// }

// callback queue

// oneFunction();

// eventloop

setInterval(() => {
  const getTime = new Date();
  //   console.log(getTime);
  console.log(
    `${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`,
  );
}, 1000);

// console.log("Harris");

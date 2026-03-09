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

// setInterval(() => {
//   const getTime = new Date();
//   //   console.log(getTime);

//   document.querySelector("h1").textContent =
//     `${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`;
// }, 1000);

// console.log("Harris");

// let button = document.querySelector("#btn");

// button.addEventListener("click", () => {
//   button.textContent = "Submitting...";
//   setTimeout(() => {
//     button.textContent = "Submitted";
//   }, 3000);
// });

// function main(callback) {
//   callback();
// }

// function greet() {
//   setTimeout(() => {
//     console.log("Hello");
//   }, 3000);
// }

// main(greet);

// setTimeout(() => {
//   console.log("User Logged In");

//   setTimeout(() => {
//     console.log("User Data");

//     setTimeout(() => {
//       console.log("User Posts");
//     }, 3000);
//   }, 2000);
// }, 1000);

// let promise = new Promise((resolve, reject) => {
//   let sucess = true;
//   if (sucess) {
//     resolve({ name: "Harris" });
//   } else {
//     reject("Promise Rejected");
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function evenOdd(num) {
//   return new Promise((resolve, reject) => {
//     if (num % 2 == 0) {
//       resolve("Even");
//     } else {
//       reject("Odd");
//     }
//   });
// }

// evenOdd(6)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Operation Completed");
//   });

function login() {
  return new Promise((resolve, reject) => {
    resolve("User Logged In Successfully");
  });
}

function userData() {
  return new Promise((resolve, reject) => {
    resolve({ name: "Harris" });
  });
}

login()
  .then((data) => {
    console.log(data);
    return userData();
  })
  .then((userData) => {
    console.log(userData);
  });

// airthmatic operators

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// comparison operators

// let x = 5;
// let y = 5;

// console.log(x != y);
// console.log(x == y);
// console.log(x === y);
// console.log(x <= y);
// console.log(x >= y);

// logical operators

// console.log(false || false);
// console.log(false && false);
// console.log(!false);

// let numOne = Number(prompt("Enter First Number"));
// let numTwo = Number(prompt("Enter Second Number"));
// console.log(`Sum is  ${numOne + numTwo}`);

// reassing the values

// let a = 4;
// let b = 6;

// // let temp = a;
// // a = b;
// // b = temp;

// a = a + b; //now a = 10
// b = a - b; // b=4
// a = a - b; // a=6
// console.log(`${a} ${b}`);

// conditional flow and decision making in js

// const age = 17;

// if (age >= 18) {
//   console.log("You can Drive");
// } else {
//   console.log("You Cannot Drive");
// }

// const num = 6;

// if (num % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// const marks = 60;

// if (marks >= 90) {
//   console.log("A Grade");
// } else if (marks >= 75) {
//   console.log("B Grade");
// } else {
//   console.log("nograde");
// }

// const num1 = Number(prompt("Enter First Number"));
// const num2 = Number(prompt("Enter Second Number"));
// const opr = prompt("+, -,*,/");

// if (opr == "+") {
//   console.log(num1 + num2);
// } else if (opr == "-") {
//   console.log(num1 - num2);
// } else if (opr == "*") {
//   console.log(num1 * num2);
// } else {
//   console.log(num1 / num2);
// }

// if (userName == "admin") {
//   if (password == "1234") {
//     console.log("User Logged In ");
//   } else {
//     console.log("Password Incorrect");
//   }
// } else {
//   console.log("No Admin");
// }

// if (userName == "admin" && password == "1234") {
//   console.log("User Logged In Successfully");
// } else {
//   console.log("Invalid Credentials");
// }

// const userName = "u";
// const role = "user";

// if (role == "admin" || role == "superAdmin") {
//   console.log(`Welcome ${userName} to the Admin Panel`);
// } else {
//   console.log(`Welcome ${userName} to Your Dashboard`);
// }

// ternary operator

// const age = 15;

// age >= 18 ? console.log("You Can Drive") : console.log("you Cannot Drive");

// let savedPin = "1234";
// let balance = 10000;

// let enteredPin = prompt("Enter Your Pin!");

// if (enteredPin != savedPin) {
//   console.log("Incorrect Pin");
// } else {
//   let choice = prompt("Enter 2 For Withdrawl and 1 for Balance Check");
//   if (choice == "1") {
//     console.log(`Account Balance is ${balance}`);
//   } else {
//     let withdrawlAmount = Number(prompt("Enter Amount"));

//     if (withdrawlAmount > balance) {
//       console.log(`Insufficent Balance`);
//     } else {
//       console.log(
//         `Transaction of ${withdrawlAmount} done remaining Balance is ${balance - withdrawlAmount}`,
//       );
//     }
//   }
// }

// console.log("Hello World");
// var name = "Bhat"
// varaibles
// let name = "shoaib";
// const age = 26;

// name = "harris";

// console.log(name);
// console.log(age);

// data types
// string
// let name = "shoaib";

// console.log(typeof name);

// Number
// const age = 23;
// const percentage = 80.8;
// console.log(typeof age);
// console.log(typeof percentage);

// boolean

// const isAdmin = false;
// const isUser = true;

// console.log(isAdmin);
// console.log(typeof isAdmin);

// let a;
// console.log(typeof a);
// const b = null;
// console.log(typeof b);

// const firstname = "shoaib";
// const lastname = "bhat";

// console.log(fistname + " " + lastname);
// console.log(`${firstname} ${lastname}`);

// const name = "Shoaib";
// const age = 26;

// console.log(`My name is ${name} and my age is ${age}`);

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

// loops !important

// debugger;

// while (num <= 10) {
//   console.log(num);
//   num++;
// }
// let num = 10;
// do {
//   console.log(num);
//   num++;
// } while (num <= 5);

// for loop   v.vvv important
// const num = 3;

// for (let i = 1; i <= 10; i++) {
//   //   console.log(i);
//   console.log(`${num} * ${i} = ${num * i}`);
// }

// let num = 100;
// // let isPrime = true;

// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log(`${num} is a Prime Number`);
// } else {
//   console.log(`${num} is not a Prime Number`);
// }

// nesting in loops
// debugger;
// for (let i = 5; i >= 1; i--) {
//   let star = " ";

//   for (let j = 1; j <= i; j++) {
//     star += "*";
//   }
//   console.log(star);
// }

// Overview of String Methods

// let email = "shoaib@gmail.com";
// // let str2 = str1.trim();

// if(!email.includes("@")){
//     console.log("invalid Email");
// }

// const password = "1234";

// if (password.length >= 8) {
//   console("Password is Valid");
// } else {
//   console.log("Password must be of 8 letters ");
// }

// console.log();

// Math
// debugger;
// const num = Math.floor(1000 + Math.random() * 9000);

// console.log(num);

//  intro Arrays in js
// debugger;

// const nums = [2, 4, 5, 6];
// //   0, 1, 2, 3    index numbers

// console.log(nums[3]);

// const numsLength = nums.length;

// console.log(numsLength);

// // const arr = new Array(2, 4, 5, 6);

// console.log(nums[nums.length - 1]);

// // console.log(arr);

// const arr = [1, 4.6, "Hello", null, {}];

// arr[2] = "world";
// arr = [2, 4];

// console.log(arr);

// const nums = [1, 2, 4, 6];

// console.log(nums);

// // console.log(nums.indexOf(19));
// // console.log(nums.includes(2));

// nums.push(8);

// console.log(nums);

// const poppedNum = nums.pop();
// // nums.pop();

// console.log(poppedNum);

// console.log(nums);

// nums.unshift(10);
// console.log(nums);

// nums.shift();

// console.log(nums);

// // debugger;
// const nums = [2, 5, 6, 8, 9, 12, 15, 8];
// // const evenNumbers = [];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 3 == 0) {
//     console.log(nums[i] + " Buzz");
//   }
//   if (nums[i] % 5 == 0) {
//     console.log(nums[i] + " Fizz");
//   }

//   //   console.log(nums[i]);
// }

// console.log(evenNumbers);

// for of loop

// const nums = [2, 3, 4, 5, 6];

// for (const i of nums) {
//   console.log(i);
// }

// relation between strings and arrays

// let str1 = "Hello";

// for (let i = 0; i < str1.length; i++) {
//   console.log(str1[i]);
// }

// console.log(str1);
// const newArr = str1.split("");
// console.log(newArr);
// newArr.pop();

// console.log(newArr);

// const str2 = newArr.join("");

// console.log(str2);

// functions
// declaring a funtion or defining
// function greetings() {
//   console.log("Hello World");
// }

// calling/invoking a function
// greetings();

// function greetings(name) {
//   console.log(`Hello ${name}`);
// }

// greetings("Shoaib");
// debugger;
// function sumOfNumbers(a, b) {
//   return a + b;
// }

// console.log(sumOfNumbers(2, 3));

// sumOfNumbers(4, 7);
//

// debugger;
// for (let i = 1; i <= 10; i++) {
//   console.log("Hello World");
// }

// function arrSum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum / arr.length);
// }

// arrSum([2, 3, 4, 5]);

// const arr = [2, 3, 5];

// console.log(arr[1]);

// function expression
// const myFunction = function greetings() {
//   console.log("Hello");
// };

// myFunction();

// function generateOtp() {
//   return Math.floor(1000 + Math.random() * 9000);
// }

// const otp = generateOtp();

// console.log(otp);
// debugger;

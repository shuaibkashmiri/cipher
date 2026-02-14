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

// basic for loop
for (let i = 1; i <= 10; i++) {
  console.log(i + "Hello");
}

// table printing logic
const tableOf = 3;

for (let i = 1; i <= 10; i++) {
  //   console.log(i);
  console.log(`${tableOf} * ${i} = ${tableOf * i}`);
}

// prime number Logic
let anyNum = 100;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (anyNum % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${anyNum} is a Prime Number`);
} else {
  console.log(`${anyNum} is not a Prime Number`);
}

// nesting in loops
// star pattern printing
debugger;
for (let i = 5; i >= 1; i--) {
  let star = " ";

  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

// Overview of String Methods

let email = "shoaib@gmail.com";
let str2 = str1.trim();

if (!email.includes("@")) {
  console.log("invalid Email");
}

const password = "1234";

if (password.length >= 8) {
  console("Password is Valid");
} else {
  console.log("Password must be of 8 letters ");
}

// console.log();

// Math
// debugger;
const num = Math.floor(1000 + Math.random() * 9000);

console.log(num);

//  intro Arrays in js
// debugger;

const nums = [2, 4, 5, 6];
// //          0, 1, 2, 3    index numbers

console.log(nums[3]);

const numsLength = nums.length;

console.log(numsLength);

// creating an array using array constructor
const arr = new Array(2, 4, 5, 6);

console.log(nums[nums.length - 1]);

console.log(arr);

const arr2 = [1, 4.6, "Hello", null, {}];

arr2[2] = "world";
// arr2 = [2, 4];

console.log(arr);

const nums2 = [1, 2, 4, 6];

console.log(nums2);

console.log(nums2.indexOf(19));
console.log(nums2.includes(2));

nums2.push(8);

console.log(nums2);

const poppedNum = nums2.pop();
nums2.pop();

console.log(poppedNum);

console.log(nums2);

nums2.unshift(10);
console.log(nums2);

nums2.shift();

console.log(nums2);

// // debugger;
const numsArr = [2, 5, 6, 8, 9, 12, 15, 8];
const evenNumbers = [];

for (let i = 0; i < numsArr.length; i++) {
  if (numsArr[i] % 3 == 0) {
    console.log(numsArr[i] + " Buzz");
  }
  if (numsArr[i] % 5 == 0) {
    console.log(numsArr[i] + " Fizz");
  }

  console.log(numsArr[i]);
}

console.log(evenNumbers);

// for of loop

const newNums = [2, 3, 4, 5, 6];

for (const i of newNums) {
  console.log(i);
}

// relation between strings and arrays

let str1 = "Hello";

for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

console.log(str1);
const newArr = str1.split("");
console.log(newArr);
newArr.pop();

console.log(newArr);

const str = newArr.join("");

console.log(str);

const user = {
  firstname: "Shoaib",
  lastname: "Bhat",
};

// const nameKey = "name";

console.log(user);

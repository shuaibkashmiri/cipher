// selectors in Dom

// document.querySelector(".header");
// document.querySelector("h1")
// document.querySelector("#_id").innerHTML;

// debugger;
// let box = document.querySelectorAll("div");

// for (const item of box) {
//   //   console.log(item);
//   item.style.color = "blue";
//   item.style.backgroundColor = "yellow";
// }

// box.classList.remove("box");

// box.classList.add("box");

// function changeBg() {
//   body.style.backgroundColor = "#000000";
// }

// let body = document.querySelector("body");

// function randomPass() {
//   let char = "ABCDEF0123456789";
//   let hex = "#";
//   for (let i = 0; i < 6; i++) {
//     let random = Math.floor(Math.random() * char.length);
//     hex += char[random];
//   }
//   body.style.backgroundColor = hex;
// }

// let count = 0;

// let countOnUi = document.getElementById("countValue");
// let decBtn = document.getElementById("btn1");
// let resetBtn = document.getElementById("btn2");
// let incBtn = document.getElementById("btn3");

// countOnUi.textContent = count;

// function updateUI() {
//   if (count > 0) {
//     countOnUi.style.color = "green";
//   } else if (count == 0) {
//     countOnUi.style.color = "black";
//   } else {
//     countOnUi.style.color = "red";
//   }
// }

// updateUI();
// function increaseCount() {
//   count++;
//   countOnUi.textContent = count;
//   updateUI();
// }

// function resetcouunt() {
//   count = 0;
//   countOnUi.textContent = count;
// // }
// // passing a refrence of a function
// incBtn.addEventListener("click", increaseCount);

// // passing an direct function
// resetBtn.addEventListener("click", function () {
//   count = 0;
//   countOnUi.textContent = count;
//   updateUI();
// });

// decBtn.addEventListener("click", () => {
//   count--;
//   countOnUi.textContent = count;
//   updateUI();
// });

// resetBtn.addEventListener("click",resetcouunt)

// let box = document.getElementById("box");

// box.addEventListener("click", (event) => {
//   box.style.backgroundColor = "red";
//   console.log(event.target);
// });

// const randomNumber = Math.floor(Math.random() * 20) + 1;
// // document.querySelector(".number").textContent = randomNumber;
// console.log(randomNumber);
// const msg = document.querySelector(".msg");

// const submitBtn = document.querySelector("#submit");

// submitBtn.addEventListener("click", () => {
//   const enteredNumber = Number(document.querySelector(".guess").value);
//   if (!enteredNumber || enteredNumber == 0) {
//     msg.textContent = "Enter a Number between 1 to 20";
//   } else if (enteredNumber > randomNumber) {
//     msg.textContent = "📈 Number Too High";
//   } else if (enteredNumber < randomNumber) {
//     msg.textContent = "📈 Number Too Low";
//   } else if (enteredNumber == randomNumber) {
//     msg.textContent = "🎉 You Guessed a Right Number";
//     document.querySelector("body").style.backgroundColor = "green";
//     document.querySelector(".number").textContent = randomNumber;
//   }
// });

// document.querySelector("#reset").addEventListener("click", () => {
//   document.querySelector("body").style.backgroundColor = "#333";
//   msg.textContent = "Start Guessing a Number...";
// });

// document.querySelector(".btn").addEventListener("click", () => {
//   // alert("Hello");
//   const randomNumber = Math.floor(Math.random() * 6) + 1;
//   console.log(randomNumber);
//   document.querySelector("#left").src = `dice${randomNumber}.png`;
//   const randomNumber2 = Math.floor(Math.random() * 6) + 1;
//   console.log(randomNumber);
//   document.querySelector("#right").src = `dice${randomNumber2}.png`;

//   if (randomNumber > randomNumber2) {
//     document.querySelector(".header").textContent = "Player 1 Is Winner";
//   } else if (randomNumber == randomNumber2) {
//     document.querySelector(".header").textContent = "Draw!";
//   } else {
//     document.querySelector(".header").textContent = "Player 2 is Winner";
//   }
// });

// !important array methods or Array specific loops

// const nums = [2, 4, 6, 7, 8];

// users.forEach((user) => {
//   console.log(user.fullname);
//   console.log(user.age);
// });

// const names = users.map((user) => {
//   if (user.age > 18) return user.fullname;

// });

// console.log(names);
// const numsSq = nums.map((num) => {
//   return num * num;
// });

// console.log(numsSq);
// using arrow function
// const numSq = nums.forEach((num,i,arr) => {

// });

// console.log(numSq);
// console.log(nums);
// nums.forEach(function (num, i, arr) {

// });

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// const fruits = ["Apple", "Orange", "Grapes"];
// const list = document.querySelector("ul");

// list.innerHTML = fruits.map((fruit) => {
//   // const creteLi = document.createElement("li");
//   // creteLi.textContent = fruit;
//   // list.appendChild(creteLi);
//   return `<li>${fruit}</li>`;
// });

// const data = fruits
//   .map((fruit) => {
//     // const creteLi = document.createElement("li");
//     // creteLi.textContent = fruit;
//     // list.appendChild(creteLi);
//     return `<li>${fruit}</li>`;
//   })
//   .join("");

// console.log(data);
// console.log(list.innerHTML);

// const numsSq = nums.map((num) => {
//   return num * num;
// });
// console.log(numsSq);

// const nums = [2, 3, 4, 5, 7, 8];

// const result = nums
//   .filter((num) => num % 2 == 0)
//   .map((num) => num * num)
//   .reduce((acc, curr) => acc + curr);

// console.log(result);

// const evenSq = evenNumbers.map((num) => {
//   return num * num;
// });

// const sumOfnums = nums.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// step 1; step2; step3
// acc0   0+2

// console.log(sumOfnums);
// console.log(evenNumbers);
// console.log(evenSq);

// const users = [
//   {
//     fullname: "Harris",
//     salary: 39999,
//     role: "Developer",
//   },
//   {
//     fullname: "Saqib",
//     salary: 35000,
//     role: "Developer",
//   },
//   {
//     fullname: "Shaiaan",
//     salary: 40000,
//     role: "Engineer",
//   },
// ];

// const nums = [2, { name: "shoaib" }, 6, 7];
// console.log(nums[1]);
// // console.log(users[0]);

// const filteredData = users.filter((user) => user.role == "Developer");
// console.log(filteredData);

// const salarySum = users.reduce((total, curr) => {
//   return total + curr.salary;
// },0);

// console.log(salarySum);

document.querySelector("button").addEventListener("click", () => {
  document.querySelector("div").classList.toggle("hidden");
});

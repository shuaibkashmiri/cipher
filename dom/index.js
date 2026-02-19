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

let count = 0;

let countOnUi = document.getElementById("countValue");
let decBtn = document.getElementById("btn1");
let resetBtn = document.getElementById("btn2");
let incBtn = document.getElementById("btn3");

countOnUi.textContent = count;

function updateUI() {
  if (count > 0) {
    countOnUi.style.color = "green";
  } else if (count == 0) {
    countOnUi.style.color = "black";
  } else {
    countOnUi.style.color = "red";
  }
}

updateUI();
function increaseCount() {
  count++;
  countOnUi.textContent = count;
  updateUI();
}

// function resetcouunt() {
//   count = 0;
//   countOnUi.textContent = count;
// }
// passing a refrence of a function
incBtn.addEventListener("click", increaseCount);

// passing an direct function
resetBtn.addEventListener("click", function () {
  count = 0;
  countOnUi.textContent = count;
  updateUI();
});

decBtn.addEventListener("click", () => {
  count--;
  countOnUi.textContent = count;
  updateUI();
});

// resetBtn.addEventListener("click",resetcouunt)

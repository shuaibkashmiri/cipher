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

// function login() {
//   return new Promise((resolve, reject) => {
//     resolve("User Logged In Successfully");
//   });
// }

// function userData() {
//   return new Promise((resolve, reject) => {
//     resolve({ name: "Harris" });
//   });
// }

// login()
//   .then((data) => {
//     console.log(data);
//     return userData();
//   })
//   .then((userData) => {
//     console.log(userData);
//   });

// function greet() {
//   return new Promise((resl, rejc) => {
//     // console.log("Hello");\
//     setTimeout(() => {
//       resl("Hello");
//     }, 3000);
//   });
// }

// async function getData() {
//   const response = await greet();

// }

// getData();

// function stepTwo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Step Two Completed");
//     }, 2000);
//   });
// }

// async function getData() {
//   const step1 = await stepOne();

//   console.log(step1);
//   const step2 = await stepTwo();
//   console.log(step2);
// }

// getData();

// function stepOne() {
//   return new Promise((resolve, reject) => {
//     const sucess = false;
//     if (sucess) {
//       resolve("Solved!");
//     } else {
//       reject("Some Error ");
//     }
//   });
// }

// async function handle() {
//   try {
//     const res = await stepOne();
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // handle();

// async function fetchData() {
//   try {
//     const name = prompt("Enter Your Name");
//     const res = await fetch(`https://api.nationalize.io/?name=${name}`, {
//       method: "GET",
//     });

//     const data = await res.json();
// data.forEach((element) => {
//   console.log(element);
// });
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();

// fetch("https://api.thecatapi.com/v1/images/search?limit=10")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.forEach((element) => {
//       console.log(element.url);
//       const createImage = document.createElement("img");
//       createImage.setAttribute("src", element.url);
//       document.querySelector("body").appendChild(createImage);
//     });
//   });

// async function getImages() {
//   try {
//     const res = await fetch(
//       "https://api.thecatapi.com/v1/images/search?limit=10",
//     );
//     const data = await res.json();
//     data.forEach((element) => {
//       console.log(element.url);
//       const createImage = document.createElement("img");
//       createImage.setAttribute("src", element.url);
//       document.querySelector("body").appendChild(createImage);
//     });

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getImages();

async function getWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=582dadc6e882931bac1cb287adbed3e4&units=metric`,
    );
    const data = await res.json();
    console.log(data);
    console.log(
      `The Waeather in ${city} is ${data.weather[0].main} with Min Temp of ${data.main.temp_min} with High of ${data.main.temp_max}`,
    );
  } catch (error) {
    console.log(error);
  }
}

getWeather("Srinagar");

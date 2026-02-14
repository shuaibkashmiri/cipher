// // objects
// const user = {
//   name: "Harris",
//   age: 20,
//   isVerified: true,
//   skills: ["Javascript", "Reactjs", "NodeJS"],
// };

// const userInput = prompt("Enter The Name of Property You want to Know ");
// console.log(user[userInput]);

// console.log(user.age);

// const username = user.name;

// console.log(username);

// console.log(user.skills);

// console.log(
//   `Hello My name is ${user.name} and My age is ${user.age} i Have ${user.skills.length} Skills and My Fav Skill is ${user.skills[0]}`,
// );
// const name = "shoaib";

const user = {
  name: "Harris",
  birthYear: 2005,
  isVerified: true,
  skills: ["Javascript", "Reactjs", "NodeJS"],
  greetings: function () {
    return `Hello ${this.name}`;
  },
  getBirthYear() {
    return 2026 - this.birthYear;
  },
};

// console.log(user.getBirthYear());

// console.log(user.name);

// user.name = "sharafat";

// console.log(user.name);

// console.log(user.fullname);

const userObj = {
  name: "Harris",
  birthYear: 2005,
  isVerified: true,
  details: function () {
    return this;
  },
};

console.log(userObj.details());
// console.log(userObj.skills.two);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// const string = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
// console.log(string);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: false,

// calcAge: function (birthYeah) {
//   return 2037 - birthYeah;
// },
//   calcAge: function () {
//     this.age = 2023 - this.birthYeah;
//     return this.age;
//   },
// };
// jonas.calcAge();
// // console.log(jonas.calcAge());
// console.log(jonas.age);
// // "Jonas is a 46-year old teacher, and he has a driver's license"

// console.log(
//   `${jonas.firstName} is a ${jonas.age}-years old teacher, and her has ${
//     jonas.hasDriversLicense ? "a" : "no"
//   } driver's license `
// );

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
// }
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages[i] = 2023 - years[i];
// }
// console.log(ages);

// function getRandomNumber() {
//   // Generate a random decimal between 0 (inclusive) and 1 (exclusive)
//   const randomDecimal = Math.random();

//   // Scale the random decimal to the range 1 to 6 (inclusive)
//   const randomNumber = Math.floor(randomDecimal * 6) + 1;

//   return randomNumber;
// }

// // Example usage
// const randomNum = getRandomNumber();
// console.log("Random number between 1 and 6:", randomNum);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = bills[i] + tips[i];
}

console.log("Bills", bills);
console.log("Tips", tips);
console.log("Totals", totals);

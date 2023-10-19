// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const filteredTemperatures = temperatures.filter(
//   (item) => typeof item === "number"
// );
// console.log(filteredTemperatures);

// if (filteredTemperatures.length === 0) {
//   console.log("No valid temperatures found.");
// } else {
//   const minValue = Math.min(...filteredTemperatures);
//   const maxValue = Math.max(...filteredTemperatures);

//   console.log("Minimum temperature:", minValue);
//   console.log("Maximum temperature:", maxValue);
// }
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// Problem : Array into the string
// sub problem 1 :Test loop
// sub problem 2 : Extract Loop
//

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    const str = `...${arr[i]} in ${i + 1} ${i == 0 ? "day" : "days"}`;
    result += str;
  }
  console.log(result);
};
printForecast(data1);
printForecast(data2);

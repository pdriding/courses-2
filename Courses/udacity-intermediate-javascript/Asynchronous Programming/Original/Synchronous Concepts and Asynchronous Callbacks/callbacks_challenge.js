// Challenge 1: Broken callback chain

// There are three problems with this code, fix them to get the console.log message:
// "Well done! { points: [ 45938, 1314 ], type: '3K8B' }"

// Hint: Order of function calls should go getData -> HandleResponse -> parseResponse -> useValues

const dataJson = {
  response: {
    timeElapsed: 45938,
    distanceTotal: 1314,
    variant: "3K8B",
  },
};

const useValues = (parsedData) => {
  // pretend we're using these
  console.log("Well done!", parsedData);
};

// cb is a common naming choice for a callback argument
const parseResponse = (data, cb) => {
  const parsedData = JSON.parse(data);
  const parsed = {
    points: [
      parsedData.response.timeElapsed,
      parsedData.response.distanceTotal,
    ],
    type: parsedData.response.variant,
  };
  cb(parsed);
};

const handleResponse = (json) => {
  let data = json;
  parseResponse(data, useValues);
};

const getData = () => {
  // Mock API call
  setTimeout(handleResponse, 1000, JSON.stringify(dataJson));
};

// getData();

// -----------------------------------------

// Callback Challenge 2: Secret Number

// Write a callback chain that does the following:

// 1. Generates a random number
// 2. Waits three seconds, then adds 5 to the random number
// 3. Every two seconds, adds 2 to the random number for a total of 6 seconds
// 4. Subtracts 3
// 5. Waits four seconds, and logs the resulting number

// Your Code Here:

// Function for you to get started with:
let num = 0;

const numSubtract = function () {
  num = num - 3;
  setTimeout(function () {
    console.log(num);
  }, 4000);
};

const numberMaker = function () {
  num = num + 2;
};

const addNum = function () {
  intervalId = setInterval(numberMaker, 2000, num);
  setTimeout(function () {
    clearInterval(intervalId);
    console.log(num);
    numSubtract(num);
  }, 7000);
};

const generateRandomNumber = () => {
  num = Math.round(Math.random() * 10);
  console.log(num);
  setTimeout(function () {
    num = num + 5;
    console.log(num);
    addNum();
  }, 3000);
  // ....
};

generateRandomNumber();

// setTimeout(function () {
//   clearInterval(setNumber);
// }, 10000);

// HINT: Add in console logs!

// HINT: setInterval can be stopped using clearInterval like this:
// const myInterval = setInterval(exampleFunc, 2000)
// clearInterval(myInterval)

// --------------- SOLUTION --------------------

const wait4 = (secret_num) => {
  setTimeout(console.log, 4000, secret_num);
};

const interval2 = (rand, cb) => {
  let sum = rand;
  const add1 = () => {
    sum = sum + 2;

    if (sum - rand >= 6) {
      clearInterval(byTwo);
      cb(sum - 3);
    }
  };
  const byTwo = setInterval(add1, 2000);
};

const add5 = (rand, cb, cb2) => {
  cb(rand + 5, cb2);
};

const generateRandomNumber2 = () => {
  const rand = Math.round(Math.random() * 10);
  setTimeout(add5, 3000, rand, interval2, wait4);
};

generateRandomNumber2();

// Here's a summary of the process flow:

// generateRandomNumber is called, generating a random number rand and setting a timeout of 3 seconds.
// After 3 seconds, the add5 function is called with rand, interval2, and wait4 as arguments.
// Inside add5, rand + 5 is calculated, and then interval2 is called with rand + 5 and wait4 as callbacks.
// Inside interval2, rand + 5 is assigned to sum, and the add1 function is set to execute every 2 seconds.
// The add1 function increments sum by 2 in each call and checks if sum - rand >= 6. When this condition is met, the interval is cleared, and wait4(sum - 3) is called.
// Inside wait4, sum - 3 is logged to the console after a delay of 4 seconds.
// In summary, the code generates a random number, adds 5 to it, repeatedly adds 2 to the result until the difference between the current value and the initial random number is at least 6, and then finally logs the value minus 3 after a delay of 4 seconds.

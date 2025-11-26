// Here is an example with Promises where we need to wait for both responses before performing an action
console.log("hi");
const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 19);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 23);
  });

promise1()
  .then((num1) => {
    promise2()
      .then((num2) => {
        console.log(
          `The answer to life, the universe, and everything is: ${num1 + num2}`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });

// Challenge 1

// Try using JUST Promise syntax to sum the results of both Promises and console log the message below
// "The answer to life, the universe, and everything is: 42"

// REMINDER: If you want to use Promise.allSettled in your answer, you will need to run the following command in your terminal window first:
// source  update_node.sh

// your code here

// ---------------------------------------------------------------------------

// Challenge 2
// Now try the same example, but instead of implementing it with Promises, use Async/await
// Console log: "The answer to life, the universe, and everything is: 42"

// your async/await code here
async function myAsyncFunction() {
  try {
    console.log("Start of the async function");
    const result1 = await promise1();
    console.log(result1);
    const result2 = await promise2();
    console.log(result2);
    console.log(
      `The answer to life, the universe, and everything is: ${
        result1 + result2
      }`
    );
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Calling the async function
myAsyncFunction();

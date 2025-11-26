const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 5);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 6);
  });

function handleManyThings() {
  const value1 = promise1();
  console.log("waiting on first promise", value1);

  const value2 = promise2();
  console.log("waiting on second promise", value2);

  setTimeout(console.log, 3000, value1, value2);
  return value1 + value2;
}

const result = handleManyThings();
console.log("The Function Result is: ", result);

//---------------------

// const promise1 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 100);
//   });

// async function exampleAsync() {
//   const value1 = await promise1();
//   console.log("waited for the value to be ready", value1);

//   return value1;
// }

// exampleAsync();

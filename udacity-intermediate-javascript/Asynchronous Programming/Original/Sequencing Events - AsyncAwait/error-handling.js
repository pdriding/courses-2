// ------------ TRY CATCH --------------
const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 5);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "Could not get value");
  });

async function handleManyThings() {
  try {
    const value1 = await promise1();
    console.log("waiting on first promise", value1);

    const value2 = await promise2();
    console.log("waiting on second promise", value2);

    console.log("Solution:", value1 + value2);
    return value1 + value2;
  } catch (error) {
    console.log(error);
  }
}

handleManyThings();

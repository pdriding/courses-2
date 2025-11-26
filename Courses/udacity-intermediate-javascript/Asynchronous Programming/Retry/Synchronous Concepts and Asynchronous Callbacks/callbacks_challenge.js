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
  console.log(data);
  const parsed = {
    points: [data.response.timeElapsed, data.response.distanceTotal],
    type: data.response.variant,
  };
  cb(parsed);
};

const handleResponse = (json) => {
  let data = JSON.parse(json);
  parseResponse(data, useValues);
};

const getData = () => {
  // Mock API call
  setTimeout(handleResponse, 1000, JSON.stringify(dataJson));
};

// getData();

// Callback Challenge 2: Secret Number

// Write a callback chain that does the following:

// 1. Generates a random number
// 2. Waits three seconds, then adds 5 to the random number
// 3. Every two seconds, adds 2 to the random number for a total of 6 seconds
// 4. Subtracts 3
// 5. Waits four seconds, and logs the resulting number

// Your Code Here:

// Function for you to get started with:

let rand = 0;

const generateRandomNumber = () => {
  rand = Math.round(Math.random() * 10);
  console.log(1, rand);
  setTimeout(addFive, 3000, rand, addTwo);

  // ....
};

const addFive = (num, cb) => {
  rand = rand + 5;
  console.log(2, rand);
  const myInterval = setInterval(addTwo, 2000, rand);
  setTimeout(() => {
    clearInterval(myInterval);
    subThree();
  }, 8000);
};

const addTwo = (num, cb) => {
  rand = rand + 2;
  console.log(3, rand);
};

const subThree = (num) => {
  rand = rand - 3;
  console.log(4, rand);
};

// generateRandomNumber();

// HINT: Add in console logs!

// HINT: setInterval can be stopped using clearInterval like this:
// const myInterval = setInterval(exampleFunc, 2000)
// clearInterval(myInterval)

const mockAPI = (returnValue) => (arg, cb) => {
  setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI(["lions", "tigers", "bears"]);

const runPromises = () => {
  return fetchSession("session-id")
    .then((session) => fetchUser(session))
    .then((user) => fetchUserFavorites(user))
    .then((favorites) => console.log(favorites))
    .catch((error) => console.log("oops!"));
};

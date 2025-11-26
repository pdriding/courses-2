const book1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Enders Game");
});

const book2 = new Promise((resolve, reject) => {
  setTimeout(reject, 4000, "Sorry, not available!");
});

const book3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Harry Potter and The Prisoner of Azkaban");
});

const book4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Stranger in a Strange Land");
});

Promise.all([book1, book2, book3, book4])
  .then((results) => {
    console.log(results);
    results.forEach((result) => console.log(result.value));
  })
  .catch((error) => console.log(error));

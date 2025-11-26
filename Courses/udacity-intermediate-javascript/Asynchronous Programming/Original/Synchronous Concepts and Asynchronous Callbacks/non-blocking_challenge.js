// Task 2 - print each word of this quote every second using built javascript method setInterval. Print the quote source all at once afterwards

// Tip: To stop a setInterval - call clearInterval()
// Tip: To pass arguments to the function setInterval is calling, add them as a 3rd (and 4th if you need it) argument to setInterval, after the milliseconds

// "The art of programming is the skill of controlling complexity."
// "-- Marijn Haverbeke, Eloquent JavaScript"

const quote = "The art of programming is the skill of controlling complexity.";
const reference = "-- Marijn Haverbeke, Eloquent JavaScript";
let i = 0;

const quoteMaker = function () {
  const quote2 = quote.split(" ");
  console.log(quote2[i]);
  i = i + 1;
};

const intervalId = setInterval(quoteMaker, 1000);

setTimeout(function () {
  clearInterval(intervalId);
  console.log("-- Marijn Haverbeke, Eloquent JavaScript");
}, 10000);

// --------------------------------------------

const printWordClosure = () => {
  let index = 0;

  return (quotation) => {
    console.log(quotation[index]);
    if (index === quotation.length - 1) {
      clearInterval(quoteInterval);
      console.log(reference);
    }
    index++;
  };
};

const quoteInterval = setInterval(printWordClosure(), 1000, quote.split(" "));

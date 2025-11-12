Solution: Asynchronous Programming
Asynchronous Introduction Exercise Solution
CHALLENGE 1
Move the setTimeout after the console log, Does that change the outcome?

const printHelloWorld = () => {
console.log("Hello ");
setTimeout(console.log, 2000, "World");
}

printHelloWorld();
Typically, changing the order of lines of code changes the outcome -- did you expect it to in this case? It doesn't change the outcome because asynchronous actions actually change the order in which our code runs, so that it might not go line by line anymore. The setTimeout method call has changed the way our code runs. We will cover the specifics of how in the next lesson.

CHALLENGE 2
Edit the time elapsed between "Hello" and "World" appearing on the screen

const printHelloWorld = () => {
setTimeout(console.log, 5000, "World");
console.log("Hello ");
}

printHelloWorld();
Did you figure out how? And perhaps more importantly, did you figure out how time is represented? The setTimeout method takes three arguments, and the middle one looks like it could be a time. But it can't be in seconds or minutes or epoch time, those don't fit. When using JavaScript timer methods, the time is always given in milliseconds. So this program waits 2 seconds (2000 milliseconds) and here I've edited it to wait 5 seconds (5000 milliseconds).

CHALLENGE 3
Edit the message being sent to have three parts:

const printMessage = (message) => {
setTimeout(console.log, 4000, "...hronous!")
}

const printHelloWorld = () => {
console.log("I'm ");
setTimeout(printMessage, 2000, "Async");
}

printHelloWorld();
There are lots of directions you could go with this of course, in this case I added a console.log() before and after the asynchronous call to print out the string "Hello there, World"

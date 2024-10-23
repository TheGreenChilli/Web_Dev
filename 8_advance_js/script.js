/* Asynchronous JavaScript with Event Loop
Task 1: Simulating Asynchronous Behavior

Create a function simulateAsyncTask() 
that logs “Task started”, then after 2 seconds logs “Task finished”.
Use setTimeout to simulate this behaviour.
*/

function simulateAsyncTask() {
    console.log("Task started");
    
    setTimeout(() => {
    console.log("Task finished");
  }, 2000);
}


/* Task 2: Simulate Multiple Async Tasks 
with Different Delays Create a function simulateMultipleTasks() 
that starts three asynchronous tasks with different delays 
(1 second, 2 seconds, and 3 seconds).Each task should log "Task [n] 
finished" where [n] is the task number. Ensure the tasks run asynchronously.
/*

function simulateMultipleTasks() {
  setTimeout(() => {
    console.log('Task 1 finished');
  }, 1000);
 
  setTimeout(() => {
    console.log('Task 2 finished');
  }, 2000);
 
  setTimeout(() => {
    console.log('Task 3 finished');
  }, 3000);
}

/* Task 3: Async Task with Callback Function
Create a function fetchDataWithCallback(callback) 
that simulates fetching data asynchronously using 
setTimeout (after 2 seconds).
Once the data is “fetched”, it should invoke the provided callback 
function with "Fetched data" as an argument.
*/

function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = 'Fetched data';
    callback(data);
  }, 2000);
}


/* Closures in JavaScript
Task 1: Creating a Counter Using Closures
Create a function createCounter() that returns a function 
which increments and returns a counter value each time it is called.
 */

function createCounter() {
  let counter = 0;
  return function(){
      counter++
      return counter
  }
}

/* 
Task 2: Rate Limiter Function
Create a function rateLimiter(fn, limit) that returns a new function. 
The returned function allows calling fn only once within a limit
time in milliseconds. If it is called again before the limit is reached,
it should return "Rate limit exceeded".
*/



/*
Task 3: Memoization Function
Write a function memoize(fn) that returns a memoized version of fn.
The memoized function should cache the results of function calls,
and return the cached result if the same inputs are provided again.
*/




/*
Prototypal Inheritance in JavaScript
Task 1: Create Inheritance Using Prototypes
Create a constructor Animal with a method makeSound().
Then create a constructor Dog that inherits from 
Animal and adds a method bark()
*/

// Task 1
function Animal(name) {
}
Animal.prototype.makeSound = function() {
    return 'Animal sound';
};

function Dog() {
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
  return 'Woof!';
};
Dog.prototype.constructor = Dog;



/*
Task 2: Shape and Rectangle Inheritance
Create a constructor function Shape that takes 
color as a parameter and has a method getColor()
that returns the color. Create another constructor Rectangle 
that inherits from Shape and adds properties width and height.
Add a method getArea() to Rectangle that returns the area of the rectangle.
*/

// Task 2
function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function() {
  return this.color;
};

function Rectangle(width, height, color) {
  Shape.call(this, color); 
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};


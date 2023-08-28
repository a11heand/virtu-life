// Filename: ComplexCode.js

/* 
   Complex JavaScript Code Example
   This code demonstrates an advanced implementation
   with multiple functionalities and optimizations.
   Author: [Your Name]
   Date: [Current Date]
*/

// Utility Function: Retrieve random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Class: Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  canVote() {
    return this.age >= 18;
  }
}

// Class: Car
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  startEngine() {
    console.log(`Starting the ${this.make} ${this.model}'s engine.`);
  }

  stopEngine() {
    console.log(`Stopping the ${this.make} ${this.model}'s engine.`);
  }
}

// Function: Generate Fibonacci Series up to n
function generateFibonacciSeries(n) {
  const fibonacciSeries = [0, 1];

  while (fibonacciSeries.length < n) {
    const nextNumber = fibonacciSeries[fibonacciSeries.length - 1] + fibonacciSeries[fibonacciSeries.length - 2];
    fibonacciSeries.push(nextNumber);
  }

  return fibonacciSeries;
}

// Main Program
(function () {
  console.log("Starting the ComplexCode program...");

  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(getRandomNumber(1, 100));
  }

  console.log("Generated random numbers:", numbers);

  const sum = numbers.reduce((acc, current) => acc + current, 0);
  console.log("Sum of the generated numbers:", sum);

  const average = sum / numbers.length;
  console.log("Average of the generated numbers:", average);

  const fibonacciSeries = generateFibonacciSeries(10);
  console.log("First 10 Fibonacci numbers:", fibonacciSeries);

  const john = new Person("John Doe", 25, "Male");
  john.introduce();

  if (john.canVote()) {
    console.log(`${john.name} can vote.`);
  } else {
    console.log(`${john.name} cannot vote yet.`);
  }

  const myCar = new Car("Tesla", "Model S", 2022, "Red");
  myCar.startEngine();
  myCar.stopEngine();

  console.log("ComplexCode program execution completed.");
})();
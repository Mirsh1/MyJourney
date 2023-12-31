/* Activity 1 - Vanilla JS Functions
Write 2 JavaScript functions to: 
show the array content. 
find the max value in the array.
Sample Array : [10, 2, 3, 4, 7]
Expected Output :
The content of the array is: [10, 2, 3, 4, 7]
The max value in the array is: 10
Important:
Don't forget to comment your code. */


let values = [10, 2, 3, 4, 7]
  
function showValue(){
    console.log("The content of the array is " + values);
}

  function maxValue() {
    let maxva = Math.max(...values);
    console.log("The max value in the array is: " + maxva);
  }

  showValue()
  maxValue()

/*
  Activity 2 - Vanilla JS Functions
  Write a JavaScript function to calculate the factorial of a number (a non-negative integer n ). 
  The function accepts the number as an argument.
  
  Note:
  The factorial of a number is the product of all the integers from 1 to that number and it is represented by n!
  
  For example, the factorial of 6! is 1*2*3*4*5*6 = 720. 
  
  The factorial is not defined for negative numbers, and the factorial of zero is one, 0! = 1.
  
  Important:
  Don't forget to comment your code. */ 
  
 let n = prompt("Enter a number")

 function calcFactorial (n) {
  if (n < 0) {
     console.log("number must be positive");
     return 
  }
  if (n === 0) {
    return 1;
  }

  return  n * calcFactorial(n - 1);
}

const result = calcFactorial(n);
console.log(`The factorial of ${n} is:`, n * calcFactorial(n - 1));

/* Activity 3 - Vanilla JS Functions
Write a JavaScript function that takes a number as a parameter and check the number is prime or not. 

Note: 

Prime numbers are the numbers that are only divisible by themselves and 1, 
in other words, if we try to divide them by another number, the result is not a whole number. 

So, if we divide the number by anything other than 1 or itself, we will get a remainder that is not zero. 

Negative numbers can not be prime.

Important:
Don't forget to comment your code. */ 



function isPrime(number) {
  if (number < 2) {
      return false;
  } else if (number === 2 || number === 3 || number === 5 || number === 7) {
      return true;
  } else if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
      return false;
  } else {
      return true;
  }
}

let userInput = prompt("Pick a positive whole number");
let number = parseInt(userInput);
let result = isPrime(number);
console.log(`The number ${number} is ${result ? "a prime number." : "not a prime number."}`);

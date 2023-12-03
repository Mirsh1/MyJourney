/*Activity 1 - Vanilla JS Arrays
Write a JavaScript program to sum values of an array.
Test Data:
Sample Array:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Expected Output:
The sum is 55.
Important:
Don't forget to comment your code. */

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let Vallength = (values.length - 1)
let sum = 0

for ( let i = 0; i <= Vallength; i++){
    sum += values[i]
}

console.log( `The sum is ${sum}`)

/* Activity 2 - Vanilla JS Arrays
Write a JavaScript program to calculate the average value of an array elements.

Test Data:
Sample Array:
[20, 30, 25, 35, -16, 60, -100]
Expected Output:
Average value of the array elements is : 7.7.

Important:
Don't forget to comment your code. */


const values = [20, 30, 25, 35, -16, 60, -100]
let sum = 0
let length = values.length


for ( let i = 0; i  < values.length; i++){
     sum += values[i];
}
let average = (sum/values.length)
console.log(`Average value of the array elements is: ${average}`)


/* Activity 3 - Vanilla JS Arrays
Write a JavaScript program to find the maximum and minimum value of an array.

Test Data:
Sample Array:
[25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Expected Output:
Original Array: [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]
Maximum value for the above array = 77
Minimum value for the above array = 14

Important:
Don't forget to comment your code. */ 


const sampleArray = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];
console.log("Original Array:", sampleArray);

const maxValue = Math.max(...sampleArray);
console.log("Maximum value for the above array =", maxValue);

const minValue = Math.min(...sampleArray);
console.log("Minimum value for the above array =", minValue);
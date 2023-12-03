/* /*Activity 1 - Vanilla JS Loops
Write a JavaScript program that will iterate from 0 to 15. 
For each iteration, it will check if the current number is odd or even, and display a message to the screen.

Expected Output:

"0 is even"
"1 is odd"
"2 is even"

Important:
Don't forget to comment your code. */ 

let n = 15;

for ( i = 1; i <= n; i++){
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

/*Activity 2 - Vanilla JS Loops
Write a JavaScript program to create the multiplication table (from 1 to 10) of a number.
Expected Output:
Input a number: 6
6 x 1 = 6 
6 x 2 = 12 
6 x 3 = 18 
6 x 4 = 24 
6 x 5 = 30 
6 x 6 = 36 
6 x 7 = 42 
6 x 8 = 48 
6 x 9 = 54 
6 x 10 = 60
Important:
Don't forget to comment your code. */ 

let number = parseInt(prompt("Enter a number"));
let n = 10

for (let i = 1; i <= n; i++) {
    let result = i * number;
    console.log(` ${number} x ${i} = ${result}`);
}
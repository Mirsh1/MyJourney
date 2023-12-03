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

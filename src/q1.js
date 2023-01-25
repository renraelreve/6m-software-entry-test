/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    if (isNaN(x) && isNam(y))
    {
        tempx = x;
        x=y;
        y=tempx;  
        console.log(x,y);
    }
    else 
    {
        alert ("-1")
    }
    
}

// Task 2: Add code here
swap(x,y); 

module.exports = swap;

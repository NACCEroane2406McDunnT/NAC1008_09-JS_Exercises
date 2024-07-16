// Exercise 1.8.3

// Step 1: Declare two variables, 'numC' with the value 5 and 'stringNumC' with the value '5'.
// Write your code below

var numC= 5, stringNumC= '5';
// Step 2: Declare a variable named 'isStrictEqual' and 
    // use the strict equal operator '===' to check if 'numC' and 'stringNumC' are equal in both value and type.
// Write your code below

isStrictEqual = numC === stringNumC;
isStrictEqual2 = numC === numC;
console.log(isStrictEqual,isStrictEqual2 );
// Expected Output: false




// In the terminal, copy & paste the code below and run it to see the result in the console.
// node 01_BasicsJS/08_Comparison_Operators/03_Strict_Equal_Operator.js
// Exercise 1.6.3

// Step 1: Declare a variable named 'sentence' with the value 'The quick brown fox jumps over the lazy dog.'.
// Write your code below

var sentence = 'The quick brown fox jumps over the lazy dog.';

// Step 2: Declare a variable named 'color' and extract the substring 'brown' from the 'sentence' variable.
    // Hint: Use the '.slice()' method with a first parameter of 10 and a second parameter of 15.
// Write your code below

var color = sentence.slice(10,15);

console.log(color);
// Expected Output: brown




// In the terminal, copy & paste the code below and run it to see the result in the console.
// node 01_BasicsJS/06_String_Manipulation/03_Extract_Substring.js
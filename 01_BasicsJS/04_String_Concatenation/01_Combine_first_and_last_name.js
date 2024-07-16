// Exercise 1.4.1

// Step 1: Declare two variables, 'firstName' with the value 'Alice' and 'lastName' with the value 'Smith'.
// Write your code below

var firstName = "Alice" , lastName = "Smith";
// Step 2: Concatenate them to create a variable named 'fullName'.
    // Hint: You can concatenate strings with the '+' operator OR the 'concat()' method OR using ${}.
// Write your code below
fullName2 = firstName + " " + lastName;
// fullName2 = ${lastName} +" "+${firstName};
fullName = firstName.concat(" ",lastName);

console.log(`Her first name is ${firstName} and her last name is ${lastName}, she is ${fullName} or ${fullName2}`);
// Expected Output: Her first name is Alice and her last name is Smith, she is Alice Smith




// In the terminal, copy & paste the code below and run it to see the result in the console.
// node 01_BasicsJS/04_String_Concatenation/01_Combine_first_and_last_name.js
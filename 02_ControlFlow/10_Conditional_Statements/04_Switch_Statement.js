// Exercise 2.10.4

// Step 1: Declare a variable 'dayNumber' with the function value 'new Date().getDay()'.
// Write your code below

var dayNumber= new Date().getDay();
console.log(dayNumber);
// Don't change the code declaration below
let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayNumber];
console.log(`Today it is ${dayName}`)


// Step 2: Use a switch statement to check the value of 'dayNumber' and 
  // console.log(`It's the start of the week`) if it is 'Mondday',
  // console.log(`It's the middle of the week`) if it is Tuesday,
  // console.log(`It's the middle of the week`) if it is Wednesday,
  // console.log(`It's the middle of the week`) if it is Thursday,
  // console.log(`It's almost the weekend`) if it is Friday,
  // console.log(`It's the weekend`) if it is Saturday,
  // console.log(`It's the weekend`) if it is Sunday,
  // and console.log(`Invalid day`) otherwise (default).
  // Write your code below
switch (dayName) {
  case "Monday":
    console.log(`It's the start of the week`);
    break;
  case "Tuesday":
    console.log(`It's the middle of the week`);
    break;
  case "Wednesday":
    console.log(`It's the middle of the week`);
    break;
  case "Thursday":
    console.log(`It's the middle of the week`);
    break;
  case "Friday":
    console.log(`It's almost the weekend`);
    break;
  case "Saturday":
    console.log(`It's the weekend`);
    break;
  case "Sunday":
    console.log(`It's the weekend`);
    break;
  default:
    console.log(`Invalid day`);
}


// Expected Output: Will depend on the value of 'dayNumber'




// In the terminal, copy & paste the code below and run it to see the result in the console.
// node 02_ControlFlow/10_Conditional_Statements/04_Switch_Statement.js
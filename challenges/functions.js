// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback 
 * In the body of the function return the callback with the two parameters that you created
 */
function consume(par1, par2, cb) {
  return cb(par1, par2);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
const add = (a, b) => a + b;
console.log(consume(5, 8, add));

const multiply = (a, b) => a * b;
console.log(consume(9, 5, multiply));

const greeting = (first, last) => `Hello ${first} ${last}, nice to meet you!`;
console.log(consume('Donald', 'Trump', greeting));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
console.log("#############################################################\n");

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
    console.log(`after the internal print out "${external}"`);
  };
  nestedFunction(); // without call nestedFunction only myFunction run
  console.log(`nestedFunciton called inside the myFunction!!!!`);
}
myFunction();
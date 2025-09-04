# JavaScript Basics

## 1. Variables
**Explanation**  
Variables store data values.  

- `var` → function scoped, can be redeclared.  
- `let` → block scoped, cannot be redeclared in same scope.  
- `const` → block scoped, cannot be reassigned.  

**Example**

let name = "Kashim";
const pi = 3.14;
var age = 25;

How I did
"I created variables using var, let, and const and printed them in basics.js."


## 2. Strings
Strings are immutable. Some useful methods:

**Methods**
- `.toUpperCase()` → returns string in uppercase

- `.toLowerCase()` → returns string in lowercase

- `.trim()` → removes spaces

- `.slice(start, end)` → extracts part of a string

- `.replace(old, new)` → replaces part of a string

 Other methods: `.startsWith()`, `.endsWith()`, `.split()`, `.substring()`, etc

**Example**
let str = " thinkbridge ";
console.log(str.toUpperCase());  // THINKBRIDGE
console.log(str.trim());         // "thinkbridge"
console.log(str.slice(0, 5));    // think

How I did
"In basics.js, I practiced all these methods with "thinkbridge" and showed outputs."

## 3. Arrays
Arrays hold multiple values.

**Methods**
- `.push() / .pop()` → add/remove from end

- `.unshift() / .shift()` → add/remove from start

- `.slice()` → copy a portion

- `.splice()` → insert/remove at index

- `.includes()` → check if element exists

- `.sort() / .reverse()` → order elements

    Other methods: .`join()`, `.toString()`, `.indexOf()`, `.concat()`, etc

**Example**
    let cars = ["Ferrari", "Benz"];
    cars.push("Rolls-Royce");
    console.log(cars); // ["Ferrari", "Benz", "Rolls-Royce"]

console.log(cars.includes("Benz")); // true

**Higher-Order Methods**
`.map()` → transforms array items

`.filter()` → filters items by condition

**Example**
    let salary = [10000, 20000, 30000];
    console.log(salary.map(s => s + 1000)); // [11000, 21000, 31000]
    console.log(salary.filter(s => s > 15000)); // [20000, 30000]

How I did
"I tested push/pop, splice, map, filter, and more on car and salary arrays in basics.js."

## 4. Loops
Loops are used to repeat a block of code multiple times until a condition is met.

**Types**

- `while` → runs until condition false

- `do...while` → runs at least once

- `for` → classic counter loop

- `for...of` → iterate over values

- `for...in` → iterate over keys

**Example**
    for (let i = 1; i <= 3; i++) {
        console.log("hello " + i);
    }

    for (let fruit of ["Apple", "Banana"]) {
        console.log(fruit); // values
    }

How I did
    "I implemented all loop types (while, do...while, for, for...of, for...in) in basics.js."

## 5. Conditional Statements
Conditional statements allow the program to make decisions and execute code based on whether a condition is true or false.

**Types**

- `if` → run only if condition true

- `if-else` → choose between two paths

- `if-else if ladder` → multiple conditions

- `switch` → cleaner multiple condition check

**Example**
    let score = 74

    if(score >= 90)
    {
        console.log("Distinction")
    }
    else if(score >= 75 && score <= 90)
    {
        console.log("First class")
    }
    else if(score >= 65 && score <= 75)
    {
        console.log("Second class")
    }
    else if(score >= 55 && score <= 65)
    {
        console.log("Third class")
    }
    else
    {
        console.log("Fail") 
    }

    let day = 5;
    switch(day) 
    {
        case 5: console.log("Friday");
                break;
        default: console.log("Other day");
    }

How I did
    "I wrote conditions for age, voting eligibility, score grading, and switch-case for days in basics.js."
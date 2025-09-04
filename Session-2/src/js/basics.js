// Variables
let name = "Kashim";
const pi = 3.14159;
var age = 25;
console.log("Name:",name + ", " + "Age:",age + ", " + "PI:", pi)
// output : Name: Kashim, Age: 25, PI: 3.14159


// Strings 
// Strings can be created in 2 ways
// 1. Without new keyword
var str = "Kashim"
// 2. With new keyword 
var str = new String("Kashim")
console.log("Name: " + str)

// methods practice
var str = "thinkbridge";
// 1. toUpperCase
console.log(str.toUpperCase());     // THINKBRIDGE

// 2. toLowerCase
console.log(str.toLowerCase())      // thinkbridge

// 3. length
console.log(str.length)     // 11

// 4. trim
var str1 = "    think-tank  "
console.log(str1.trim())    // think-tank

// 5. slice
console.log(str.slice(2, 11))       // inkbridge
console.log(str.slice(5))   // bridge
console.log(str.slice(-8, -2))      // nkbrid

// 6. replace
console.log(str.replace("t", "k"))     // khinkbridge
console.log(str.replace("think", "tank"))      // tankbridge

//  7. startsWith
console.log(str.startsWith("t"))       // true
console.log(str.startsWith("T"))       // false
console.log(str.startsWith("K"))       // false
console.log(str.startsWith("think"))   // true
console.log(str.startsWith("tank"))    // false

//  8. endsWith
console.log(str.endsWith("e"))       // true
console.log(str.endsWith("d"))       // false
console.log(str.endsWith("G"))       // false
console.log(str.endsWith("bridge"))   // true
console.log(str.endsWith("bank"))    // false

//  9. split
console.log(str.split(""))      // ['t', 'h', 'i', 'n', 'k', 'b', 'r', 'i', 'd', 'g', 'e']
var str1 = "Welcome to Thinkbridge"
console.log(str1.split(" "))    // ['Welcome', 'to', 'Thinkbridge']

// 10. substring
console.log(str.substring(3, 9));   // nkbrid


// Arrays
// Arrays can be created in 2 ways

// with new keyword
let cars = new Array("Ferrari", "Benz", "Defender")
console.log(cars)       // ['Ferrari', 'Benz', 'Defender']

// without new keyword
let car = ["Ferrari", "Benz", "Defender"]
console.log(car)        // ['Ferrari', 'Benz', 'Defender']

// To fetch array element
console.log(car[0])     // Ferrari
console.log(car[2])     // Defender

// Array Methods
// 1. push method
car.push("Rolls-Royce")
console.log(car)        // ['Ferrari', 'Benz', 'Defender', 'Rolls-Royce']

// 2. pop method
car.pop();
console.log(car)        // ['Ferrari', 'Benz', 'Defender']
car.pop(1)
console.log(car)        //  ['Ferrari', 'Benz']

// 3. unshift method
car.unshift("Mustang")
console.log(car)        // ['Mustang', 'Ferrari', 'Benz']

// 4.shift method
car.shift()
console.log(car)        //  ['Ferrari', 'Benz']

car.push("Mustang")
car.unshift("Rolls-Royce")
console.log(car)        // ['Rolls-Royce', 'Ferrari', 'Benz', 'Mustang']

// 5.slice method
console.log(car.slice(1, 3))
console.log(car)

// 6.splice method
car.splice(1, 0, "Toyota")
console.log(car)        // ['Rolls-Royce', 'Toyota', 'Ferrari', 'Benz', 'Mustang']
car.splice(3, 2)
console.log(car)        // ['Rolls-Royce', 'Toyota', 'Ferrari']

// 7. includes method
var val1 = car.includes("toyota");
console.log(val1)       // false
var val2 = car.includes("Toyota");
console.log(val2)       // true
var val3 = car.includes("Fortuner");
console.log(val3)       // false

// 8. sort method
car.sort()
console.log(car)        // ['Ferrari', 'Rolls-Royce', 'Toyota']

// 9. reverse method
car.reverse()
console.log(car)         // ['Toyota', 'Rolls-Royce', 'Ferrari']

// 10. map method
let salary = [10000, 30000, 50000, 40000]

// map method with condition
function sal(salary) {
    return salary + 1000
}
var totalSal = salary.map(sal)
console.log(totalSal)       // [11000, 31000, 51000, 41000]

// map method without condition
function sal(salary) {
    return salary
}
var totalSal = salary.map(sal)
console.log(totalSal)       // [10000, 30000, 50000, 40000]

// 11. filter method
let salary1 = [10000, 30000, 50000,  , 40000]

// filter method with condition
function sal(salary1) {
    return salary1 > 10000
}
var totalSal = salary1.filter(sal)
console.log(totalSal)        //  [30000, 50000, 40000]

// filter method without condition
function sal(salary1) {
    return salary1
}
var totalSal = salary1.filter(sal)
console.log(totalSal)       // [10000, 30000, 50000, 40000]

// 12. toString method
var val1 = ["THINK"]
console.log(val1)       // ['THINK']
console.log(val1.toString())        // THINK

// 13. join method
var val1 = car.join("$")
console.log(val1)       // Toyota$Rolls-Royce$Ferrari

car.push("BMW")
car.unshift("BMW")
console.log(car)        // ['BMW', 'Toyota', 'Rolls-Royce', 'Ferrari', 'BMW']

// 14. indexOf method
console.log(car.indexOf("BMW"))     // 0

// 15. lastIndexOf method
console.log(car.lastIndexOf("BMW"))     // 4

// 16. concat method
var car1 = ["BMW", "AUDI", "Mercedes"]
var car2 = ["Rolls-Royce", "Mustang", "Defender"]
let allCar1 = car1.concat(car2)
console.log(allCar1)        // ['BMW', 'AUDI', 'Mercedes', 'Rolls-Royce', 'Mustang', 'Defender']
let allCar2 = car.concat(car1, car2)
console.log(allCar2)        // ['BMW', 'Toyota', 'Rolls-Royce', 'Ferrari', 'BMW', 'BMW', 'AUDI', 'Mercedes', 'Rolls-Royce', 'Mustang', 'Defender']



// Loops
// 1. while loop
var i = 1
while(i <= 5){
    console.log("hello " + i)
    i++
}

// output:
// hello 1
// hello 2
// hello 3
// hello 4
// hello 5

// 2. Do while loop
var i = 0;
while(i <= 5) {
    console.log("hello " + i);
    i++;
}

// output:
// hello 0
// hello 1
// hello 2
// hello 3
// hello 4
// hello 5

// 3. for loop
for(var j = 1; j <= 5; j++)
{
    console.log("hello " + j)
}

// output:
// hello 1
// hello 2
// hello 3
// hello 4
// hello 5

// 4. for...of loop
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

// Output:
// Apple
// Banana
// Mango

// 5. for...in loop
let person = { name: "Kashim", age: 25, city: "Pune" };

for (let key in person) {
  console.log(key, ":", person[key]);
}

// Output:
// name : Kashim
// age : 25
// city : Pune


// conditional statement
// 1. if statement
let age1 = 20;

if (age1 >= 18)
{
    console.log("You're Adult")
}

// 2. if-else statement

if (age1 >= 18)
{
    console.log("You can vote!")
}
else
{
    console.log("You cannot vote!")
}

// 3. if-else-if statement
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

// output: Second class

// 4. switch statement
let day = 5
let dayName

switch(day)
{
    case 1:
      dayName = "Monday"
      break;
    case 2:
      dayName = "Tuesday"
      break;
    case 3:
      dayName = "Wednesday"
      break;
    case 4:
      dayName = "Thursday"
      break;
    case 5:
      dayName = "Friday"
      break;
    case 6:
      dayName = "Saturday"
      break;
    case 7:
      dayName = "Sunday"
      break;
    default: 
        dayName = "Invalid Day"
}

console.log(dayName)

// output : Friday

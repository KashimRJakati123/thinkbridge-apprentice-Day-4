// Debug-1
function addNumbers(a, b)
{
    let result = a + b; // Bug: should be a + b
    return result;
}

let sum = addNumbers(5, 3)
console.log("Sum: " +sum);

// Debug-2
// Average array
function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {  //  Bug: should be < arr.length
    sum += arr[i];
  }
  return sum / arr.length;
}

let num = [10, 20, 30, 40, 50];
let avg = getAverage(num);
console.log("Average :", avg);

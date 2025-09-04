# Session 4 - Debugging: DevTools & VS Code

## Overview
This session focuses on learning how to debug JavaScript code using **Chrome DevTools** and **VS Code Debugger**.  
The goal is to practice using **breakpoints, watch expressions, and call stack inspection** to find and fix bugs.


## Tasks completed
- Used breakpoints in Chrome DevTools & VS Code.  
- Inspected variable values with **Watch expressions**.  
- Traced program execution with the **Call Stack**.  
- Practiced stepping **over** and **into** functions.  


## Files
- **index.html** → Entry point that loads `debug.js`.  
- **debug.js** → Contains sample buggy code for debugging practice.
- **debug-recording.mp4** → Contains debugging video.


## Debugging Examples
### Debug-1: Add Numbers
function addNumbers(a, b) {
    let result = a - b; // Bug: should be a + b
    return result;
}

let sum = addNumbers(5, 3);
console.log("Sum:", sum);

Expected: 8
Buggy Output: 2

### Debug-2: Average of Array
function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) { // Bug: should be < arr.length
    sum += arr[i];
  }
  return sum / arr.length;
}

let num = [10, 20, 30, 40, 50];
let avg = getAverage(num);
console.log("Average:", avg);

Expected: 30
Buggy Output: NaN


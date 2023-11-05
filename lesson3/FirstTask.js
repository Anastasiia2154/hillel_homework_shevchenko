// Task - 1
//   Replace the "for" loop with a "while" loop


// for (let i = 0; i < 8; i++) {
//     console.log(`число - ` + i);
// }

let i = 0;
while (i < 8) {
    console.log(`число - ` + i++);
}


/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */

let sum = 0;
let i = 0;
while (i <= 50) {
    if (i % 3 !== 0) {
        sum += i;
    }
    i++;
}
console.log("Сума: " + sum);


/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop
*/

let firstNumber = -100;
let secondNumber = 250;
let sum = 0;

for (let i = firstNumber; i <= secondNumber; i++) {
    sum += i;
}
console.log(sum);


/* Task - 4
  Make a timer that will count from 10 to 0

  For example,
  10 seconds left
  9 seconds left
  8 seconds left

*/
for (let i = 10; i >= 0; i--) {
    console.log(i + " seconds left");
}

/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */
let number = 7;
for (let i = 1; i <= 7; i++) {
    console.log(number + " * " + i + " = " + number * i);
}


/* Task - 6
  implement algorithm which calculates factorial for
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html
*/
function factorialCalculation(number) {
    let n = number;
    let factorial = 1;
    let i = 1;
    do {
        factorial *= i;
        i++;
    } while (i <= n);
    return factorial;
}

let number = 9;
let result = factorialCalculation(number);
console.log(result);

/* Task - 7
  implement algorithm filling a bathtub using buckets.
  we know how many liters the bathtub holds and the capacity of one bucket, but we don't know how many buckets we need.
  We need to fill the bathtub without overflowing it.
  Use while loop
*/

let bucket = 5; //capacity of one bucket
let initialBathState = 0; //the initial value of the amount of water in the bathroom
let bathCapacity = 60; //

function fillBath(initialBathState, bathCapacity, bucket) {
    let bucketsUsed = 0;
    while (initialBathState < bathCapacity) {
        initialBathState += bucket;
        bucketsUsed++;
        if (initialBathState > bathCapacity) {
            break;
        }
    }
    return bucketsUsed;
}

console.log(fillBath(initialBathState, bathCapacity, bucket));
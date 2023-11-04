// 'if' conditional

/* Task - 1
 Create a program that will store the value of the cat's weight.
If the cat weighs less than 5 kg, then the cat is small and still needs to be fed,
if it weighs more than 5, then the cat is very fluffy and needs to be combed :) */

var catWeight = 3;
if (catWeight < 5) {
    console.log("The cat is small and still needs to be fed");
} else {
    console.log("The cat is very fluffy and needs to be combed");
}

/* Task - 2
Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */
var age = 22;
if (age >= 18 && age <= 50) {
    console.log("We can hire you! ");
} else {
    console.log("We can not hire you!")
}

/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */

var grade = 'E';
switch (grade) {
    case 'A':
    case 'B':
        console.log("Exam passed!");
        break;
    case 'C':
    case 'D':
        console.log("Sending for a retake!");
        break;
    case 'E':
        console.log("Expulsion!");
        break;
}

/* Task - 4
 Write a small program "Guess the number", where you need to enter a number from the console and tell the user whether he entered less or more or guessed the number. */

var enteredNumber = 18;
var guessNumber = 8;

if (enteredNumber === guessNumber) {
    console.log("You guessed the number!")
} else if (enteredNumber !== guessNumber && enteredNumber < guessNumber) {
    console.log("Your number is lower!")
} else if (enteredNumber !== guessNumber && enteredNumber > guessNumber) {
    console.log("Your number is bigger!")
}

/* Task - 5
Rewrite the if statement using the conditional operator '?

if (height < 140) {
 console.log("Заборонено на атракціон");
} else {
   console.log("Проходьте, будь ласка!");
}
*/
var height = 20;
height < 140 ? console.log("Заборонено на атракціон") : console.log("Проходьте, будь ласка!");

//  Task - 6
//
// Rewrite if..else using several ternary operators '?

// if (height < 50) {
//     console.log("Forbidden to use attraction");
// } else if (height >= 50 && height < 80) {
//     console.log("Permit - attraction №1");
// } else if (height >= 80 && height < 120) {
//     console.log("Permit - attraction №1 or №2");
// } else {
//     console.log("Permit - All");
// }

var height = 10; // Replace with the actual height value

var message = height < 50
    ? "Forbidden to use attraction"
    : height >= 50 && height < 80
        ? "Permit - attraction №1"
        : height >= 80 && height < 120
            ? "Permit - attraction №1 or №2"
            : "Permit - All";

console.log(message);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'switch' conditinal

/* Task - 7
 Create a program that will print the day of the week according to the day number. */

var dayNumber = '3';
switch (dayNumber) {
    case '1':
        console.log("Monday");
        break;
    case '2':
        console.log("Tuesday");
        break;
    case '3':
        console.log("Wednesday");
        break;
    case '4':
        console.log("Thursday");
        break;
    case '5':
        console.log("Friday");
        break;
    case '6':
        console.log("Saturday");
        break;
    case '7':
        console.log("Sunday");
        break;
    default:
        console.log("Please enter correct day number");
        break;
}

/* Task - 8
 Make a program that will display the time of year a particular month number belongs to (for example, I enter "1" and it tells me that it is winter, I enter "5" - spring, etc.) */
var month = '3';
switch (month) {
    case '12':
    case '1':
    case '2':
        console.log("Winter");
        break;
    case '3':
    case '4':
    case '5':
        console.log("Spring");
        break;
    case '6':
    case '7':
    case '8':
        console.log("Summer");
        break;
    case '9':
    case '10':
    case '11':
        console.log("Autumn");
        break;
    default:
        console.log("Please enter correct month number")
}
/* Task - 9
Rewrite the "switch" into an "if"

switch (browser) {
 case 'Edge':
   console.log( "You've got the Edge!" );
   break;

 case 'Chrome':
 case 'Firefox':
 case 'Safari':
 case 'Opera':
   alert( 'Okay we support these browsers too' );
   break;

 default:
   console.log( 'We hope that this page looks ok!' );
}
*/
var browser = 'Chrome';
if (browser === 'Edge') {
    console.log("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}
/* Task - 10
Rewrite "if" into "switch"

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
 */

var age = 17;
switch (true) {
    case age < 16:
        console.log('We cant hire u!');
        break;
    case age >= 18:
        console.log('U can take full time job');
        break;
    case age === 16 || age === 17:
        console.log('U can take part time job');
        break;
    default:
        console.log("We don't have options for U");
        break;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Task - 11
Create a program  - https://take.ms/mN65i

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

Use only what've learned!

*/

var enteredOption = prompt("Enter your username");

if (enteredOption === 'Admin') {
    var password = prompt("Enter your password!");
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === null || password === "") {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (enteredOption === null || enteredOption === "") {
    alert("Canceled");
} else {
    alert("I don't know you");
}
/* Task - 1
    Створіть масив (array1) з 5 любих елементівю
    Створіть функцію, яка буде повертати другий елемент з масиву
*/

var testArray = [1, 2, 3, 4, 5];

function getSecondArrayElement(array) {
    if (array.length >= 2) {
        return array[1];
    } else {
        return "Array hasn't enough elements!";
    }
}

var secondElement = getSecondArrayElement(testArray);
console.log("Second element in array: " + secondElement);

/* Task - 2
    Створіть функцію, який додасть 1 елемент до масиву з попередньої задачи (array1) (наприклад, "new item")
*/
function addElementToArray(arr, newItem) {
    arr.push(newItem);
}

addElementToArray(testArray, "new item");
console.log(testArray)

/* Task - 3
    Створіть другий масив (array2), потім створить функцію, яка отримує 2 масиви і повертає масив, що містить елементи з масивів array1 та array2
*/
var testArray2 = ['a', 'b', 'c', 'd', 'e'];

function mergeArrays(testArray, testArray2) {
    return testArray.concat(testArray2);
}

var mergedArray = mergeArrays(testArray, testArray2);

console.log("Merged array: ", mergedArray);


/* Task - 4 (Not required)
    Створіть функцію, яка буде повертає новий масив заданої довжини, заповнений заданим значенням
    https://www.w3schools.com/jsref/jsref_fill.asp
*/

function createArray(length, value) {
    return Array(length).fill(value);
}

var newArray = createArray(5, "value");

console.log("Created array:", newArray);

/* Task - 5 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
     не використовуйте цикли
*/

function filterPeople(arrayOfObjects) {
    var filteredArray = arrayOfObjects.filter(person => person.name.includes("John") || person.age < 30);
    return filteredArray.length;
}

var peopleArray = [
    {name: "John Snow", age: 45},
    {name: "Cersei Lannister", age: 32},
    {name: "Daenerys Targaryen", age: 18},
    {name: "Jorah Mormont", age: 28}
];

var result = filterPeople(peopleArray);
console.log("People with name 'John' ore age less than 30:", result);


/* Task - 6 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
    * не використовуйте цикли
    * https://www.w3schools.com/jsref/jsref_filter.asp
*/

/* Task - 7 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає новий масив усіх людей, старших за 30 років
*/


/* Task - 8 (Not required)

    Створіть функцію, яка буде приймати масив об'єктів
    наприклад, [{ім'я: "Jane", вік: 45}, {ім'я: "Peter", вік: 18}].
    та поверне новий масив об'єктів, що містить додаткову властивість "state"
    state = "baby", якщо вік дорівнює 0 або 3,
    state = "preschooler", якщо вік від 4 до 5,
    state = "teenager", якщо вік від 13 до 18 років

 https://www.w3schools.com/jsref/jsref_map.asp
*/
function addState(peopleArray) {
    var newArray = peopleArray.map(person => {
        if (person.age === 0 || person.age === 3) {
            person.state = "baby";
        } else if (person.age >= 4 && person.age <= 5) {
            person.state = "preschooler";
        } else if (person.age >= 13 && person.age <= 18) {
            person.state = "teenager";
        } else {
            person.state = "unknown";
        }
        return person;
    });

    return newArray;
}

var peopleArray = [
    {name: "Jane", age: 45},
    {name: "Peter", age: 18},
    {name: "Tom", age: 3},
    {name: "Emily", age: 5},
    {name: "David", age: 15}
];

var resultArray = addState(peopleArray);

console.log("New array with 'state':", resultArray);

/* Task - 9 (Not required)

    Створити функцію для знаходження індексу мінімального елементу масиву;
    наприклад,  console.log(minItem([6,8,2,9,1,3])) // 4
*/

function findMinIndex(arr) {
    if (arr.length === 0) {
        return -1;
    }
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}

var array = [6, 8, 2, 9, 1, 3];
var minIndex = findMinIndex(array);

console.log("Min index: ", minIndex);


/* Task - 10 (Not required)

   Створити функцію, яка поверне кількість допустимих (НЕ not null/undefined) значень масиву
*/

function countValidValues(array) {
    var validValues = array.filter(value => value !== null && value !== undefined);
    return validValues.length;
}

var array = [1, null, 2, undefined, 3, 'a', null, 'd'];

var result = countValidValues(array);

console.log("Allowed values quantity: ", result);


/* Task - 11 (Not required)

   Створити функцію, яка відфільтрує нульові та невизначені значення
  якщо кількість невірних записів більше 3 - потрібно згенерувати помилку "Дані потрібно переглянути"
*/
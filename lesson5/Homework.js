/* Task - 1
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище).

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення".
- Напишіть метод getFullName(), який виводитиме повне ім'я.
*/
var human = {
    year: 1980,
    name: 'Tony',
    surname: 'Stark'
}

function getInfo(object) {
    for (let key in object) {
        console.log(key + ": " + object[key]);

    }
}

getInfo(human);

function getFullName(object) {
    return object.name + " " + object.surname;
}

console.log(getFullName(human));

/* Task - 2 (Not required)
   Створіть функцію createRobot, яка створить об'єкт "robot" з об'єкта "person",
   додавши додаткову властивість до об'єкта "person".
   "Robot" повинен мати властивість "batteryEnergy" (наприклад, batteryEnergy = 50)

 * ПРИМІТКА: використовуйте метод присвоєння об'єктів (Object.assign)
*/

function createRobot(object) {
    var robot = Object.assign({}, object, {batteryEnergy: 50});
    return robot;
}

var robot = createRobot(human);
console.log(robot);

console.log(Object.entries(robot));


/* Task - 3
   Створіть isARobot, який буде перевіряти, чи є об'єкт роботом
   перевіркою наявності у об'єкта властивості (batteryEnergy)
*/

function isARobot(object) {
    if (object.batteryEnergy === undefined) {
        return "It's a human!";
    } else {
        return "It's a robot!";
    }
}

console.log(isARobot(robot));
/* Task - 4 (Not required)

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

Завдання:
- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price
*/
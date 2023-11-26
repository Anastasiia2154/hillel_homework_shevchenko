/*  Task - 1
    Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)
*/

var regExp = /^[^Aa]{6,}$/;
var str = "kkkkka"
console.log(regExp.test(str))

/*  Task - 2

    var text = 'cat car can';

    Напишіть regex, котрий знайде cat та can, але не знайде car

*/
var regExp = /\b(cat|can)\b/g
var str = 'cat car can';
console.log(regExp.test(str))


/*  Task - 3

    text = 'I would like 8 cups of coffee, please.';

    Напишіть regex, котрий знайде кількість чашок кофе.

*/

var regExp = /\b\d+\s*cups?\b/
var str = 'I would like 8 cups of coffee, please';
console.log(regExp.test(str))


/*  Task - 4

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова котрі починаются на h

*/
var regExp = /\bh\w*\b/g
var str = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
console.log(regExp.test(str))
console.log(str.search(regExp))

/*  Task - 5 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова від 4 до 6 символів

*/

var regExp = /\b\w{4,6}\b/gi
var str = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
console.log(regExp.test(str))
console.log(str.search(regExp))


/*  Task - 6 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова більше ніж 5 символів

*/
var regExp = /\b\w{6,}\b/g
var str = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
console.log(regExp.test(str))
console.log(str.search(regExp))

/*  Task - 7 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова довжина котрих 6 смиволів

*/

var regExp = /\b\w{6}\b/g
var str = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
console.log(regExp.test(str))
console.log(str.search(regExp))

/*  Task - 8. Paranoya (Not required)
    В нас є масив обєктів в яких міститься email.

    var arr = [
        {
            userName:"Test",
            lastName:"Test",
            email:"test.test@gmail.com"
        },
        {
            userName:"Dmitro",
            lastName:"Porohov",
            email:"dmitro.porohov@yahoo.com"
        },
        {
            userName:"Andrii",
            lastName:"",
            email:"andrii@mail.ru" // Нам такі не підходять
        },
    ];


    У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

    За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

    - одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
*/


/*  Task - 9 (Not required)

    У нас є масив рядків, давайте знайдемо посилання.

    var strings = [
	'https://https://github.com/',
	'this is not a URL',
	'https://google.com/',
	'123461',
	'https://google.com/search?q=cats',
	'http://not a valid url',
	'abc http://invalid.url/'
];


*/


/* Task - 10  (Not required)

    Поміняйте місцями ім'я та прізвище

    var name = 'John Smith';

*/

var name = 'John Smith';

var reversedName = name.replace(/(\w+)\s+(\w+)/, '$2 $1');

console.log(reversedName);
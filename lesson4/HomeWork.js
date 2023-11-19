/* Task - 1 (Not required)
    Написати свою реалізацію функції isNaN.

    Нагадування: це глобальна функція в JavaScript, яка використовується для перевірки, чи є значення NaN (Not-a-Number).
*/
function isNaN(value) {
    if (value !== value) {
        return true;
    } else if (typeof value !== 'number' && typeof value !== 'string') {
        return true;
    }
    return false;
}

console.log(isNaN(undefined))

/* Task - 2
    Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні
    від 100 до 1000 включно. Порахувати кількість парних та непарних серед них.
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count).
    Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

    Функція виводить інформацію
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних
*/
function getRandomNumberInRange(count, min, max) {
    console.log(`Кількість згенерованих чисел: ${count}`)
    let pairedNumbers = 0;
    let unpairedNumbers = 0;
    for (let i = 0; i < count; i++) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (randomNum % 2 === 0) {
            pairedNumbers++;
            console.log(randomNum)
        } else {
            unpairedNumbers++;
            console.log(randomNum)
        }
    }
    let totalNumbers = pairedNumbers + unpairedNumbers;
    let persentPair = ((pairedNumbers / totalNumbers) * 100).toFixed(0)
    let persentUnpair = ((unpairedNumbers / totalNumbers) * 100).toFixed(0)
    console.log(`Парних чисел:: ${pairedNumbers}`)
    console.log(`Не парних чисел: ${unpairedNumbers}`)
    console.log(`Відсоток парних до не парних: парних - ${persentPair} % , непарних -  ${persentUnpair}`)
}

getRandomNumberInRange(5, 100, 1000)


/* Task - 3
    Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

    рядок, до якого буде додаватися символ.
    символ, який буде додаватися.
    Скільки додавати символів
    булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
*/
function pud(line, symbol, quantity, isEndOrStart) {
    if (line.length === quantity) {
        console.log(line);
        return;
    }
    let padding = symbol.repeat(quantity - line.length);
    if (isEndOrStart === true) {
        let newLine = padding + line
        return console.log(newLine);
    } else {
        let newLine = line + padding;
        return console.log(newLine);
    }
}

pud("Hello", "!", 8, false)

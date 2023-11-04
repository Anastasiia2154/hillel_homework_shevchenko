// //Вам необхідно вказати, яким буде результат операції та описати крок за кроком у вигляді коментарів, як відбувається перетворення в кожному прикладі:
console.log('number' + 3 + 3) // number33, тому що відбувається конкатенація
console.log(null + 3)  // 3, тому що null автоматично перетворюється на 0, і потім відбувається додавання 0 + 3, що дає результат 3
console.log(5 && "qwerty") // && повертає останній істинний операнд у виразі, а якщо доходить до кінця, то виводить останній результат; 5 прирівнюється до true,тому результат -qwerty (останній true вираз)
console.log(+'40' + +'2' + "hillel") // 42hillel, так як унарний '+' перетворює '40' та '2' в числа 40 та 2, а "hillel" - це строка, що призводить до конкатенації
console.log('10' - 5 === 6) // false, бо '10' перетворюється у число 10 і виконується віднімання 10 - 5 = 5; '===' - це строге порівняння, так як число 5 не дорівнює числу 6
console.log(true + false) // 1, тому що JavaScript намагається усе привести до чисел, а true =1 , а false = 0; 1 + 0 = 1
console.log('6' + 3 ** 0) ;// 61, так як 3 ** 0 - це зводення числа 3 до ступеня 0, що завжди дорівнює 1; '6' - це строка, що із знаком '+' дає конкатенацію
console.log(12 / '6'); // 2, тому що JavaScript намагається усе привести до чисел і строка '6' перетворюється у число 6 і виконується математична операція ділення 12 / 6 = 2
console.log('10' + (5 === 6)) //10false, так як (5 === 6) - це false, а '10' - строка, а тому знак '+' дає конкатенацію
console.log(null == '') // false, бо '==' у JavaScript це не строге порівняння,тому виконується неявне перетворення типів; у разі null і порожній рядок '' мають різні типи даних. '' - це пустий рядок; null порівнюється рівним тільки з null і undefined, інші значення при порівнянні з null вважаються нерівними. Порожній рядок '' вважається рядком та порівнюється з іншими рядками
console.log(3 ** (9 / 3)); //27, так як спочатку виконується вираз (9 / 3) = 3, а потім число 3 зіодиться до ступеня 3, що = 27
console.log(!!'false' == !!'true') // true, тому що рядок 'false' прирівнюється до true (false - це тільки null, NaN, 0, '' ,undefined, 0n), а і потім подвійне заперечення !! перетворює його назад на true; так само 'ture'  прирівнюється до true і подвійне заперечення !! перетворює його на true, а отже true==true -> true
console.log(0 || '0' && 1); // згідно з пріорітетами, спочатку виконується '0' && 1; '0' - це строка, яка означає true, і число 1 - це також true, отже частина '0' && 1 дійде до кінця та отримаємо 1; потім вже виконується 0 || 1 - 0 та 1 - це числа, які обидва true, а отже вираз  дійде до кінця та отримаємо 1
console.log((+null == false) < 1) //false ,тому що +null - > перетворюється у число 0 при використанні унарного +; 0 == false поверне true, тому що  == це не строге порівняння, і 0 і false приводяться до числа і дорівнюють один одному; результат буде false, тому що true із лівої частини виразу буде приведено до числа - true -> 1, тому вираз true < 1 (1<1) - це false
console.log(false && true || true)// true, тому що вираз false && true дасть false, так як у випадку оператора && усі вирази повинні бути true, інакше він поверне false ; а далі вираз false || true доходить до істинного значення true і виводить його
console.log(false && (false || true)) // false, тому що (false || true) вираз дасть true (доходить до істинного значення true і виводить його), далі вираз false && true - отримуємо false, так як && вимагає результат true від усіх операндів
console.log((+null == false) < 1 ** 5)//false, тому що +null - > перетворюється у число 0 при використанні унарного +; 0 == false поверне true, тому що  == це не строге порівняння, і 0 і false приводяться до числа і дорівнюють один одному; 1 ** 5 - це зведення 1 в 5 ступінь, що дає 1;  результат буде false, тому що true із лівої частини виразу буде приведено до числа - true -> 1, тому вираз true < 1 (1<1) - це false
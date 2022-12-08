/*
.В переменных a и b хранятся числа. Написать
программу, которая выводит в консоль произведение
и сумму этих чисел.
 */
export function multiplyAndSum(a, b) {
    console.log(a * b, a + b);
}

/*
В двух переменных хранятся строки символов.
Написать программу, которая выведет в консоль
суммарное количество символов в обоих строках.
 */
export function getSymbolsLength(a, b) {
    console.log(a.length + b.length);
}

/*
*Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа.
 */
export function sumThreeDigitNumber() {
    const threeDigitNumber = prompt('Enter three digit positive number');
    const notDigitsRegex = /^-?\D+/;

    if (threeDigitNumber.length !== 3 || +threeDigitNumber < 0 || notDigitsRegex.test(threeDigitNumber)) {
        throw new Error("it must be positive three digit number!!!");
    }

    const sumDigits = [...threeDigitNumber].reduce((prev, curr) => +prev + +curr);

    console.log(sumDigits);
}



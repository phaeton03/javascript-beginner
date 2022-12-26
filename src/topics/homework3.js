/*
1.Вывести в консоль сумму всех целых чисел от 50 до
100.
 */

export function sumNumbers(start = 50, end = 100) {
    const length = end - start + 1;

    return (start + end) / 2 * length;
}

/*
Вывести в консоль таблицу умножения на 7.
7 x 1 = 7
7 x 2 = 14
…
7 x 9 = 63
 */

export function showMultiplicationTableOfNumber(number = 7) {
    for (let i = 1; i < 10; i++) {
        console.log(`${number} x ${i} = ` + (i * number));
    }
}

/*
*Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N
 */

export function arithmeticMeanOddNumbers() {
    const n = prompt('Enter a number');
    const notDigitsRegex = /^-?\D+/;

    if (n === undefined || notDigitsRegex.test(n)) {
        throw new Error("Incorrect number");
    }

    let oddSum = 0;
    let oddCount = 0;

    for(let i = 1; i <= n; i = i + 2) {
        oddSum += i;
        oddCount++;
    }

    console.log(oddSum / oddCount);
}
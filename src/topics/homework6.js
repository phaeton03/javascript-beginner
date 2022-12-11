/*
1.Напишите функцию diff, которая получает в качестве
параметров 2 числа и возвращает разницу между
наибольшим и наименьшим
 */

export function diff(a, b) {
    return Math.abs(a - b);
}

/*
2.Напишите функцию isWord, которая принимает на
вход текстовую строку. Функция возвращает true, если
строка состоит из одного слова и false, если из
нескольких.
 */

export function isWord(str) {
    const pattern = /^\s*\w+\s*$/;

    return pattern.test(str);
}

/*
*Напишите функцию pow(a, x), которая вернёт
значение числа a, возведённого в степень x.
 */

export function pow(a,x) {
    return Math.pow(a, x);
}
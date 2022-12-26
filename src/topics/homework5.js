/*
Создайте массив целых чисел из 10 элементов
 */

export const arr = Array.from({length: 10}, (a, i) => Math.floor(Math.random() * 40));

/*
1.Выведите в консоль сумму всех элементов массива
 */

export function arraySum(array = arr) {
    console.log(array.reduce((prev, cur) => prev + cur));
}

/*
2.Создайте новый массив на основе исходного, в
котором каждый элемент будет вдвое больше
элемента исходного массива с таким же индексом.
(a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
массив).
 */

export function doubleArrayElements(array = arr) {
    return array.map((e) => 2 * e);
}

/*3.*Найдите и выведите в консоль наибольший и
наименьший элементы исходного массива
*/

export function printMaxAndMin(array = arr) {
    console.log(`max = ${Math.max(...arr)}`, ` min = ${Math.min(...arr)}`);
}
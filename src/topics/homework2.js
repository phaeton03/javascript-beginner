/*
В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них.
 */

export function maxOfTwoNumbers(a, b) {
    console.log(Math.max(a,b));
}

/*
Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.).
 */

export function getNumberOfMonth() {
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    const number = prompt("Enter number between 1 and 12");

    if(number < 1 || number > 12) {
        throw new Error("Number is out of range");
    }

    console.log(months[number - 1]);
}

/*
 В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат.
 */
/**
 * eps - error rate
 * **/

export function isCircleFitIntoSquare(circleArea, squareArea, eps) {
    if (circleArea < 0 || squareArea < 0) {
        throw new Error("Area could not be negative");
    }

    let squareSide = Math.sqrt(squareArea);
    let circleDiametr = 2 * Math.sqrt(circleArea / Math.PI);

    return squareSide - circleDiametr > eps || Math.abs(squareSide - circleDiametr) < eps;
}
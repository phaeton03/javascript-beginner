/*
1.Даны длины трёх сторон треугольника. Определить,
является ли треугольник прямоугольным.
 */

export function isSquareTriangle(a, b, c) {
    const pattern = /^[^0-9]+$/;
    if (pattern.test(a) || pattern.test(b) || pattern.test(c)) {
        throw Error('Incorrect params');
    }

    const longestSide = Math.max(a, b, c)
    const shortestSide = Math.min(a, b, c);
    const middleSide = a + b + c - longestSide - shortestSide;

    return Math.pow(longestSide, 2) === Math.pow(shortestSide, 2) + Math.pow(middleSide, 2);
}

/*
2.Пользователь вводит число R. Написать программу,
которая выведет в консоль длину окружности и
площадь круга с радиусом R.
 */
export function printSquareAndСircumferenceLength() {
    const radius = prompt("Enter radius");

    console.log(2 * Math.PI * radius, Math.PI * radius * radius);
}

/*
*Пользователь вводит числа a, b и c. Написать
программу, выводящую корни квадратного
уравнения с коэффициентами a, b и c.
 */
const eps = 0.005;

export function squareRoots(a, b, c) {
    const patternMatchDoubleOrInteger = /^-?\d+$|^-?\d+\.\d+$/;
    if (Math.abs(a) < eps) {
        throw new Error("It is not a square equation");
    }
    if (!patternMatchDoubleOrInteger.test(a) || !patternMatchDoubleOrInteger.test(b) || !patternMatchDoubleOrInteger.test(c)) {
        throw new Error("Incorrect params");
    }

    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < -eps) {
        return [];
    }

    if (Math.abs(discriminant) < eps) {
        const squareRoot = -b / (2 * a);
        return [squareRoot, squareRoot];
    }

    if (discriminant > eps) {
        return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
    }

    return null;
}

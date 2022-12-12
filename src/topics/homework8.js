const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
/*
1.Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате.
 */

export function getDate() {
    let dateStr = prompt('Enter date in format ДД.ММ.ГГГГ.');

    const pattern = /(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d+/;

    if(!pattern.test(dateStr)) {
        throw Error('Invalid date');
    }

    const day = new Date(dateStr).getDay();

    return days[day];
}

/*
2.Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня.
 */

export function minutesPass() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const minutesPass = hours * 60 + minutes;

    console.log(minutesPass);

    return minutesPass;
}

/*
3.*В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя.
 */


let birthDate2 = new Date("12.12.1922");
let birthDate1 = new Date("12.10.1989");


export function minimumDate(date1 = birthDate1, date2 = birthDate2) {

    return date1 > date2 ? date1 : date2;
}
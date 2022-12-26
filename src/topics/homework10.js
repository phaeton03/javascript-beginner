/*
Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
Датой. (формат ДД.ММ.ГГГГ или ДД/ММ/ГГГГ или ДД-ММ-ГГГГ
 */

export function isDate(date) {
    const patternIsDate = /(0[1-9]|[1-2][0-9]|3[0-1])[.\/-](0[1-9]|1[0-2])[.\/-]\d+/;

    return patternIsDate.test(date);
}

/*
Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
адрес электронной почты
 */

export function isEmail(email) {
    const patternIsEmail = /^[A-Z\d].*@\w+-?[\w\d]+\.\w{1,10}$/i

    return patternIsEmail.test(email);
}

/*
Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
номеро телефон
 */

export function isMobile(mobile) {
    const patternIsMobile = /^(\+\d{1,4}-?|8-?)\d{3}-?\d{3}-?\d{2}-?\d{2}/;

    return patternIsMobile.test(mobile);
}
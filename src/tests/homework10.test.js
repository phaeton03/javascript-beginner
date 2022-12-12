import {jest} from '@jest/globals';

import {isDate, isMobile, isEmail} from '../topics/homework10.js'

describe('isDate', function () {
    const date = ['20/12/1999', '20.02.1900', '10-03-2032'];

    it('should be a valid date format', () => {
        date.forEach((dateVar) => expect(isDate(dateVar)).toBeTruthy());
    });
});

describe('isMobile', function () {
    const mobile = ['+79260812959', '89035055511', "+7-926-055-55-55"];


    it('should be a valid date format', () => {
        mobile.forEach((mob) => expect(isMobile(mob)).toBeTruthy());
    });
});

describe('isEmail', function () {
    const email = ['ggg123@mail.ru', '12ggg123@mail-ru.ru'];

    it('should be a valid email format', () => {
        email.forEach((emailVar) => expect(isEmail(emailVar)).toBeTruthy());
    });
});
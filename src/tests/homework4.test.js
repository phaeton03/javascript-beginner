/**
 * @jest-environment jsdom
 */
import {user, setUserAge, setVariablesFromAdmin, createAdmin} from "../topics/homework4";
import exportFunctions from "../topics/homework4";
import {jest} from '@jest/globals';

describe('setUserAge', function () {
    const AGE = '15';

    it('is a function', () => {
        expect(setUserAge).toBeInstanceOf(Function);
    });

    it('should throw Error cause age is negative', function () {
        jest.spyOn(window, "prompt").mockImplementation(() => '-10');

        expect(() => setUserAge()).toThrow();
    });

    it('should throw Error cause age is more 150', function () {
        jest.spyOn(window, "prompt").mockImplementation(() => '200');

        expect(() => setUserAge()).toThrow();
    });

    it('should throw Error cause age is not a number', function () {
        jest.spyOn(window, "prompt").mockImplementation(() => 'klmgfklmf');

        expect(() => setUserAge()).toThrow();
    });

    it('should add age to USER ', function () {
        jest.spyOn(window, "prompt").mockReturnValue(AGE);

        setUserAge();

        expect(user.age ).toBe(AGE);
    });

});

describe('createAdmin', function () {
    const ADMIN = {
      name: 'admin',
      role: 'admin',
    };

    it('should return admin ', function () {
        const admin = createAdmin();

        expect(admin).toMatchObject(ADMIN);
    });
});

describe('setVariablesFromAdmin', function () {
    
    it('should return admin ', function () {
        const spyCreateAdmin = jest.spyOn(exportFunctions, 'createAdmin');

        exportFunctions.setVariablesFromAdmin();

        expect(spyCreateAdmin).toHaveBeenCalled();
    });
});
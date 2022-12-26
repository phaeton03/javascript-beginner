/*
Создайте объект user, содержащий поле name со
значением ‘John’.
 */
export const user = {
    name: 'John',
};

/*
1.Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user.
 */
export function setUserAge() {
    const age = prompt("Enter age");
    const notDigitsRegex = /\D+/;

    if (age < 0 || age > 150 || notDigitsRegex.test(age)) {
        throw new Error("Incorrect age");
    }

    user['age'] = age;
}

/*
2.Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
‘admin’.
 */
export function createAdmin() {
    const admin = Object.assign({}, user);
    admin.name = "admin";
    admin['role'] = "admin";

    return admin;
}

/*
*Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей.
 */

export function setVariablesFromAdmin() {
    let {name, role} = exportFunctions.createAdmin();
}

const exportFunctions = {
    setVariablesFromAdmin,
    createAdmin
};

export default exportFunctions;

/*
Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия:
 */
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector(".button");
    const input = document.querySelector(".text");

    button.hidden = input.value.length === 0;

    input.addEventListener("input", hideInput);
    button.addEventListener("click", addParagraph);
    button.addEventListener("click", deleteFirstParagraph);
});


/*
1.Кнопка скрыта, если в поле ввода нет значения.
 */
function hideInput() {
    document.querySelector(".button").hidden = document.querySelector(".text").value.length === 0;
}

/*
2.При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода.
 */
function addParagraph() {
    const divEl = document.querySelector(".div");
    const el = document.createElement("p");
    el.innerText = document.querySelector(".text").value;
    divEl.append(el);
}

/*
*Если параграфов становится больше 5, первый из
них удаляется.
 */

function deleteFirstParagraph() {
    const pElements = document.querySelectorAll("p");
    if (pElements.length > 5) {
        pElements[0].remove();
    }
}

const functions = {hideInput, addParagraph, deleteFirstParagraph};

export default functions;
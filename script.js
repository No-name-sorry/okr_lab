// Функція для порівняння двох рядків
function compareStrings(str1, str2) {
    if (str1 > str2) {
        alert("Перший рядок " + str1 + " більший за " + str2);
    } else if (str2 > str1) {
        alert("Другий рядок " + str2 + " більший за " + str1);
    } else {
        alert("Рядки рівні між собою.");
    }
}
function storeLocation(){
    location.href = "https://f1store.formula1.com/en/";
}

function showDeveloperInfo(lastName, firstName, position = "Web-розробник") {
    alert("Прізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position);
}

function userDialog() {
    var userInput = prompt("Введіть ваше ім'я:");
    if (userInput) {
        alert("Привіт, " + userInput + "!");
    } else {
        alert("Привіт, анонім!");
    }
}

// // Виклик функції showDeveloperInfo з параметрами
// showDeveloperInfo("Петрушина", "Вікторія");
// // Виклик функції порівняння рядків
// compareStrings("JavaScript", "HTML");
// // Виклик функції userDialog();
// userDialog();

// // Зміна фону сторінки
// document.body.style.backgroundColor = "white";
// // Затримка на 30 секунд
// setTimeout(function() {
//     // Повернення фону сторінки через 30 секунд
//     document.body.style.backgroundColor = "";
// }, 30000);

// Створення нового елемента
var newHeading = document.createElement('h1');
// Створення текстового вузла
var headingText = document.createTextNode('Welcome!');
console.log(headingText.nodeValue);
// Додавання текстового вузла до нового елемента
newHeading.appendChild(headingText);

// Отримання посилання на елемент, який буде замінений
var oldHeading = document.querySelector('h1');
// Заміна старого заголовка на новий
oldHeading.replaceWith(newHeading);

// Створення нового абзацу
var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('A Formula One car is an open-wheel, open-cockpit, ' +
    'single-seat racing car for the purpose of being used in Formula One competitions. ' +
    'It is equipped with two wings (front and rear) plus an engine, which is located behind the driver.\n' +
    '\n' +
    'The F1 races are conducted on specifically built racing tracks called ‘circuits’.' +
    ' Sometimes they are conducted on closed public roads as well..');
newParagraph.appendChild(paragraphText);

// Додавання нового абзацу після контейнера
var container = document.getElementById('3');
container.innerHTML = "<p>New paragraph</p>";
console.log(container.outerHTML); // Виведе HTML-код елемента
container.after(newParagraph);

// Видалення попереднього абзацу
var oldParagraph = document.getElementById('3');
oldParagraph.remove();

const p_color = document.querySelectorAll('p');
p_color[0].style.color = "red";

// Додавання нового елемента попереду контейнера
var newDiv = document.createElement('div');
newDiv.textContent = "Guide page";
// var divText = document.createTextNode('Guide page');
// newDiv.appendChild(divText);
document.body.prepend(newDiv);

///////////////////////////////////////////////////////
// 7 //


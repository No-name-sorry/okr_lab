// // Функція для порівняння двох рядків
// function compareStrings(str1, str2) {
//     if (str1 > str2) {
//         alert("Перший рядок " + str1 + " більший за " + str2);
//     } else if (str2 > str1) {
//         alert("Другий рядок " + str2 + " більший за " + str1);
//     } else {
//         alert("Рядки рівні між собою.");
//     }
// }

//
// function showDeveloperInfo(lastName, firstName, position = "Web-розробник") {
//     alert("Прізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position);
// }
//
// function userDialog() {
//     var userInput = prompt("Введіть ваше ім'я:");
//     if (userInput) {
//         alert("Привіт, " + userInput + "!");
//     } else {
//         alert("Привіт, анонім!");
//     }
// }
//
// // // Виклик функції showDeveloperInfo з параметрами
// // showDeveloperInfo("Петрушина", "Вікторія");
// // // Виклик функції порівняння рядків
// // compareStrings("JavaScript", "HTML");
// // // Виклик функції userDialog();
// // userDialog();
//
// // // Зміна фону сторінки
// // document.body.style.backgroundColor = "white";
// // // Затримка на 30 секунд
// // setTimeout(function() {
// //     // Повернення фону сторінки через 30 секунд
// //     document.body.style.backgroundColor = "";
// // }, 30000);
//
// // Створення нового елемента
// var newHeading = document.createElement('h1');
// // Створення текстового вузла
// var headingText = document.createTextNode('Welcome!');
// console.log(headingText.nodeValue);
// // Додавання текстового вузла до нового елемента
// newHeading.appendChild(headingText);
//
// // Отримання посилання на елемент, який буде замінений
// var oldHeading = document.querySelector('h1');
// // Заміна старого заголовка на новий
// oldHeading.replaceWith(newHeading);
//
// // Створення нового абзацу
// var newParagraph = document.createElement('p');
// var paragraphText = document.createTextNode('A Formula One car is an open-wheel, open-cockpit, ' +
//     'single-seat racing car for the purpose of being used in Formula One competitions. ' +
//     'It is equipped with two wings (front and rear) plus an engine, which is located behind the driver.\n' +
//     '\n' +
//     'The F1 races are conducted on specifically built racing tracks called ‘circuits’.' +
//     ' Sometimes they are conducted on closed public roads as well..');
// newParagraph.appendChild(paragraphText);
//
// // Додавання нового абзацу після контейнера
// var container = document.getElementById('3');
// container.innerHTML = "<p>New paragraph</p>";
// console.log(container.outerHTML); // Виведе HTML-код елемента
// container.after(newParagraph);
//
// // Видалення попереднього абзацу
// var oldParagraph = document.getElementById('3');
// oldParagraph.remove();
//
// const p_color = document.querySelectorAll('p');
// p_color[0].style.color = "red";
//
// // Додавання нового елемента попереду контейнера
// var newDiv = document.createElement('div');
// newDiv.textContent = "Guide page";
// // var divText = document.createTextNode('Guide page');
// // newDiv.appendChild(divText);
// document.body.prepend(newDiv);





///////////////////////////////////////////////////////
// 7 //

// Функція-обробник
function storeLocation(){
    // location.href = "https://f1store.formula1.com/en/";
    window.open("https://f1store.formula1.com/en/", "_blank")
}

var messageElement = document.getElementById('message');

// Створення об'єкту з методом handleEvent
class EventHandler {
    handleEvent(event) {
        if (event.type === 'mouseover') {
            this.handleMouseOver(event);
        } else if (event.type === 'mouseout') {
            this.handleMouseOut(event);
        }
    }
    handleMouseOver(event) {
        messageElement.textContent = 'Welcome!';
        messageElement.style.display = 'block';

        setTimeout(function() {
            messageElement.style.display = 'none';
        }, 3000);

        console.log('Mouse over on:', event.currentTarget);
    }

    handleMouseOut(event) {
        messageElement.textContent = 'Enjoy the website!';
        messageElement.style.display = 'block';

        setTimeout(function() {
            messageElement.style.display = 'none';
        }, 3000);

        console.log('Mouse out on:', event.currentTarget);
    }
}

var eventHandler = new EventHandler();
var button = document.getElementById('dialog-button');

button.addEventListener('mouseover', eventHandler);
button.addEventListener('mouseout', eventHandler);

// Видалення обробника подій через 10 секунд
setTimeout(function() {
    button.removeEventListener('mouseover', eventHandler);
    button.removeEventListener('mouseout', eventHandler);
    console.log('Event handlers removed');
}, 10000);


document.querySelector('.nav-list ul').addEventListener('click', function(event) {
    var target = event.target;
    // Перевіряємо, чи клікнули на елемент <a>
    if (target.tagName === 'a') {
        // Видаляємо клас 'active' з усіх елементів списку
        var navItems = document.querySelectorAll('.nav-list ul li');
        navItems.forEach(function(item) {
            item.classList.remove('active');
        });
        // Додаємо клас 'active' до клікнутого елемента
        target.parentElement.classList.add('active');
    }
});

// Отримуємо посилання на список
var navList = document.getElementById('navList');

// Додаємо обробник подій до списку
navList.addEventListener('click', function(event) {
    // Перевіряємо, чи клікнуто на посилання
    if (event.target.tagName === 'A') {
        // Відміняємо стандартну поведінку посилання
        // event.preventDefault();

        // Підсвічуємо клікнутий елемент
        event.target.parentNode.style.backgroundColor = 'yellow';

        // Підсвічуємо всі інші елементи списку
        var listItems = navList.getElementsByTagName('li');
        for (var i = 0; i < listItems.length; i++) {
            if (listItems[i] !== event.target.parentNode) {
                listItems[i].style.backgroundColor = 'lightblue';
            }
        }
    }
});

var menu = document.getElementById('menu');
// Додаємо обробник подій до всього меню
menu.addEventListener('click', function(event) {
    var target = event.target;
    // Перевіряємо, чи клікнули на кнопку
    if (target.classList.contains('menu-button')) {
        // Отримуємо дію з атрибута data-action
        var action = target.getAttribute('data-action');

        // Викликаємо відповідну функцію в залежності від дії
        if (action === 'shop') {
            saveAction();
        } else if (action === 'youtube') {
            deleteAction();
        } else if (action === 'F1') {
            editAction();
        }
    }
});

// Функції для кожної дії
function saveAction() {
    console.log('Shop action');
}
function deleteAction() {
    console.log('YouTube action');
}
function editAction() {
    console.log('Official F1 action');
}

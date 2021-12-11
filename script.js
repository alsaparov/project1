"use strict";
// КОЛБЭК ФУНКЦИИ
// function first() {
//     // do something
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', function () {
//     console.log('Я прошел этот урок!');
// });
// learnJS('JavaScript', done);

// ОБЪЕКТЫ И ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

// const obj = new Object();

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    }
};
// console.log(options["colors"]["border"]);
// delete options.name;
console.log(options);

for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`свойство ${key} имеет значение ${options[key]}`);
    }
}


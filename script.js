"use strict";
// КОЛБЭК ФУНКЦИИ  .............................................
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

// ОБЪЕКТЫ И ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ    ......................................

// const obj = new Object();

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     }
// };
// console.log(options["colors"]["border"]);
// console.log(options["colors"]["border"]);


// delete options.name;
// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options).length);

// const albert = {
//     lastname: 'saparov',
//     age: 31,
//     height: 175,
//     color: {
//         head: 'black',
//         ноги: 'black',
//         eays: 'green'
//     },
//     makeTest: function() {
//         console.log('test');
//     }
// };
// albert.makeTest();
// console.log(Object.keys(albert).length);
// console.log(albert);

// const {head, ноги, eays} = albert.color;
// console.log(head, ноги, eays);

// массивы и псевдомассивы  ..........................................................

const arr = [2, 12, 34, 26, 5, 80];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop();
// console.log(arr);
// arr.push(8,10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// ПЕРЕДАЧА ДАННЫХ ПО ССЫЛКЕ И ПО ЗНАЧЕНИЮ ......................................

let a = 5,
    b = a;
    b = b + 5;
    console.log(a);
    console.log(b);

    const obj = {
        a : 5,
        b : 1
    };
    const copy = obj; // передает ссылку
    copy.a = 10;
    console.log(copy);
    console.log(obj);

    // { a: 10, b: 1 }
    // { a: 10, b: 1 }

    function copy1(mainObj) {
        let objCopy = {};

        let key;
        for (key in mainObj) {
            objCopy[key] = mainObj[key];
        }

        return objCopy;
    }

const numbers = {
        a: 2,
        b: 5,
        c: 10,
        d: 11,
        e: {
            x:4,
            y:5
        }
    };

const newNumbers = copy1(numbers);
newNumbers.a = 10;
newNumbers.e.x = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    f: 17,
    j: 20
};

console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 'qwerty';
// console.log(clone);

const oldArr = ["a", "b", "d", "e"];
const newArr = oldArr.slice();
newArr[1] = "adasada";
console.log(newArr);
console.log(oldArr);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb']; // spread ..........
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num2 = [2, 5, 7];

log(...num2);// spread........

const arrays = ['a', 'b', 'c'];

const newArrays = [...arrays];
console.log(newArrays);

const q = {
    one: 1,
    two: 2
};
const newQ = {...q};
console.log(newQ);
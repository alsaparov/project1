"use strict";

// function sayHello() {
//     console.log(" sayHello");
// }
// sayHello();

// function hi() {
//     console.log("hello world");
// }
// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }


// to string.....................................
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)

const num = 5;

console.log("https//vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// to number.........................................

//1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

//3
console.log(typeof(parseInt("15px", 10)));

let answer = +prompt('Hello', '');

// to boolean ...................................

// 0, '', null, undefined, NaN;
// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

let switcher1 = 1;

if (switcher1) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

console.log(typeof(!'111111'));
//3)

"use strict";
// const answer = [];
// answer[0] = prompt("как ваше имя", "");
// answer[1] = prompt("как ваша фамилия?", "");
// answer[2] = prompt("сколько вам лет?", "");

// document.write(answer);
// console.log(typeof(answer));

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;

// console.log(number);
// const obj = {
//     a: 1,
//     b: 2
// };
// obj.a = 3;
// let w = obj.a;
// console.log(obj);

// {

    // var result = 50;
    // let result = 50;
// }
// console.log(result);

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
               let i = 0;
               while (i < 2) {
                   const a = prompt("Один из последних просмотренных фильмов?", ""),
                        b = prompt("На сколько оцените его?", "");
                  if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
                      personalMovieDB.movies[a] = b;
                      console.log("done");
                  } else {
                      console.log("error");
                      i--;
                }
                i++;
              }
       },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
            // let genres = prompt(`Введите ваши любимы жанры через запятую`).toLowerCase();

        s    // if (genres === '' || genres == null) {
            //         console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //         i--;
            //     } else {
            //         personalMovieDB.genres = genres.split(', ');
            //         personalMovieDB.genres.sort();
            //     }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`"Любимый жанр ${i + 1} - это ${item}"`);
        });
     }


};



//  console.log(personalMovieDB);
// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");
//     if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// }





// rememberMyFilms();



// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB);
//     }
// }



// showMyDB(personalMovieDB.privat);
// console.log(typeof(personalMovieDB));


// writeYouGenres();

    // const category = 'toys';
    // console.log(`https://someurl.com/${category}/5`);

    //

//     if (num < 49) {
//         console.log("error");
//     } else if (num > 100) {
//         console.log("много");
//     } else {
//         console.log("ok");
//     }
// (num === 50) ? console.log("ok") : console.log("error");

// const num = 52;

// switch (num) {
//     case 49:
//         console.log("неверно");
//         break;
//     case 100:
//         console.log("неверно");
//         break;
//     case 50:
//         console.log("в точку");
//         break;
//     default:
//         console.log("в другой раз");
//         break;
// }

// let num = 50;
// while (num <= 60) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 60);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);

// }
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage("hello world");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(5, 11));

// function ret() {
//     let num = 50;


//     return num;
// }
// const ret1 = ret();
// console.log(ret1);

// const logger = function () {
//     console.log("hello");
// };
// logger();

// const calc1 = (a, b) => a + b;
// const calc2 = (a, b) => {
//     console.log("1");
//     return a + b;
// };


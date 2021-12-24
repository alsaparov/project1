'use strict';

// touchstart;
// touchmove;
// touchend;
// touchenter;
// touchleave;
// touchcancel;
// touches показывает сколько пальце на дисплее и где они находятся
// targetTouches какие пальцы на конкретно этом блоке
// changedTouches какой палец поменялся
window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();
        console.log('start');
        console.log(event.touches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        console.log(event.targetTouches[0].pageX);
        console.log(event.targetTouches[0].pageY);
    });
    // box.addEventListener('touchend', (event) => {
    //     event.preventDefault();
    //     console.log('end');
    // });

});
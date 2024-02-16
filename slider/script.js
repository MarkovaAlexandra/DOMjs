'use strict';

let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg'];


//получаем стрелки и вешаем на них слушаетля
const backArrow = document.querySelector('.back-arrow');
backArrow.addEventListener('click', back);
const forwardArrow = document.querySelector('.forward-arrow')
forwardArrow.addEventListener('click', forward)

//картинка
const image = document.querySelector('.slider1');

//на контейнер с кнопками с номерами вешаем общую прослушку
const picNumber = document.querySelector('.btns-nav');
picNumber.addEventListener('click', showPicture);

function forward() {
    let src = image.getAttribute('src');
    let newsrc;
    for (let i = 0; i < images.length; i++) {
        if (images[i] == src) {
            if (i == (images.length - 1)) {
                newsrc = images[0];
            }
            else { newsrc = images[i + 1]; }
            image.setAttribute('src', newsrc);
        }
    }
}

function back() {
    let src = image.getAttribute('src');
    let newsrc;
    for (let i = 0; i < images.length; i++) {
        if (images[i] == src) {
            if (i == 0) {
                newsrc = images[images.length - 1];
            }
            else { newsrc = images[i - 1]; }
            image.setAttribute('src', newsrc)
        }
    }
}

function showPicture(e) {
    let newsrc;
    for (let i = 0; i < images.length; i++) {
        if (i == (e.target.textContent - 1)) {
            newsrc = images[i];
            image.setAttribute('src', newsrc);
        }
    }
}


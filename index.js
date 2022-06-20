const back = document.querySelector('#back');
const next = document.querySelector('#next');
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];

i = 0;
next.addEventListener('click', () => {
    i++;
    if (i > images.length - 1) {
        i=0;
    }
    document.querySelector('.images').src = images [i];
})
back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    document.querySelector('.images').src = images [i];
})
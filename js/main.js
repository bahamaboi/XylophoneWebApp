let cBtn = document.querySelector('#c');
let dBtn = document.querySelector('#d');
let eBtn = document.querySelector('#e');
let fBtn = document.querySelector('#f');
let gBtn = document.querySelector('#g');
let aBtn = document.querySelector('#a');
let bBtn = document.querySelector('#b');

cBtn.addEventListener('click',  ()=> {
    let cKey = new Audio('sounds/note1.wav');
    cKey.play();
})

dBtn.addEventListener('click',  ()=> {
    let dKey = new Audio('sounds/note2.wav');
    dKey.play();

})

eBtn.addEventListener('click', function () {
    let eKey = new Audio('sounds/note3.wav');
    eKey.play();
})

fBtn.addEventListener('click', function () {
    let fKey = new Audio('sounds/note4.wav');
    fKey.play();
})

gBtn.addEventListener('click', function () {
    let gKey = new Audio('sounds/note5.wav');
    gKey.play();
})

aBtn.addEventListener('click', function () {
    let aKey = new Audio('sounds/note6.wav');
    aKey.play();
})


bBtn.addEventListener('click', function () {
    let bKey = new Audio('sounds/note7.wav');
    bKey.play();
})

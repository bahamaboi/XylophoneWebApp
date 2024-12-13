let btn = document.querySelectorAll('.key');

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let button = this.innerHTML.toLowerCase();
        playSound(button);
        buttonAnimation(button);
    })
}


document.addEventListener("keydown", function (event) {
    playSound(event.key)
    buttonAnimation(event.key)
})

function playSound(key) {
    switch (key) {
        case 'c': {
            let cKey = new Audio('sounds/note1.wav');
            cKey.play();
            break;
        }
        case 'd': {
            let dKey = new Audio('sounds/note2.wav');
            dKey.play();
            break;
        }
        case 'e': {
            let eKey = new Audio('sounds/note3.wav');
            eKey.play();
            break;
        }
        case 'f': {
            let fKey = new Audio('sounds/note4.wav');
            fKey.play();
            break;
        }
        case 'g': {
            let gKey = new Audio('sounds/note5.wav');
            gKey.play();
            break;
        }
        case 'a': {
            let aKey = new Audio('sounds/note6.wav');
            aKey.play();
            break;
        }
        case 'b': {
            let bKey = new Audio('sounds/note7.wav');
            bKey.play();
            break;
        }
        default: {
            console.log(button);
            break;
        }
    }
}


function buttonAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey)
    activeButton.classList.add('active')
    console.log(currentKey);

    setTimeout(function () {
            activeButton.classList.remove('active')
        }, 100);
}


var myText = document.querySelector('h1').innerHTML;


buttonAnimation('myText')
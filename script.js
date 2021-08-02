document.querySelector('button').addEventListener('click', function() {
    chekPersonalNumber();
    tryCatchChek();
});


function chekPersonalNumber () {
    let personalNumber = document.querySelector('#personal_number').value;
    if(personalNumber.length !== 11) {
        throw "length must be 11 symbols"
    }
    return true;
}

function tryCatchChek () {
    try {
        chekPersonalNumber ()
        console.log("working")
        document.querySelector('#trueOrFalse').innerHTML = 'true'
        document.querySelector('#trueOrFalse').classList.add("true")

    } catch (e) {
        console.log ("doesnt working")
        document.querySelector('#trueOrFalse').innerHTML = 'false'
        document.querySelector('#trueOrFalse').classList.add("false")
    }
}




let stop = document.querySelector('.stop')
let getReady = document.querySelector('.get_ready')
let go = document.querySelector('.go')


document.addEventListener("DOMContentLoaded", function() {
    trafficlight ();
    setInterval(trafficlight, 12000);
  });

function trafficlight () {
    setTimeout(turnOnRed,1000);
    setTimeout(tunrOffRed,7000);
    setTimeout(turnOnYellow,6000);
    setTimeout(turnOffYellow,7000);
    setTimeout(turnOnGreen, 7000);
    setTimeout(turnOffGreen, 12000);
}

function turnOnRed() {
    stop.classList.add('red')
}
function tunrOffRed () {
    stop.classList.remove('red')
}
function turnOnYellow() {
    getReady.classList.add('yellow')
}
function turnOffYellow() {
    getReady.classList.remove('yellow')
}
function turnOnGreen() {
    go.classList.add('green')
}
function turnOffGreen() {
    go.classList.remove('green')
}

//DECLARAR VARIABLES
let nombre1 = document.getElementById('team1');
let nombre2 = document.getElementById('team2');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let btnTouchdown1 = document.getElementById('btnTouch1');
let btnTouchdown2 = document.getElementById('btnTouch2');
let btn1Xp1 = document.getElementById('btn1Xp1');
let btn1Xp2 = document.getElementById('btn1Xp2');
let btnFailed1 = document.getElementById('btnFailed1');
let btnFailed2 = document.getElementById('btnFailed2');
let btn2Xp1 = document.getElementById('btn2Xp1');
let btn2Xp2 = document.getElementById('btn2Xp2');
let btnSafety1 = document.getElementById('btnSafety1');
let btnSafety2 = document.getElementById('btnSafety2');
let btnReset = document.getElementById('btnReset');

//DECLARAR FUNCIONES
function condicionesIniciales() {
    nombre1.textContent = 'Home'
    nombre2.textContent = 'Guest'
    score1.textContent = 0;
    score2.textContent = 0;
    mostrarBotonesScore1();
    mostrarBotonesScore2();
}

function mostrarBotonesConver1() {
    btnTouchdown1.style = 'display: none'
    btnSafety1.style = 'display: none'
    document.getElementById('botonesConver1').style = 'display: flex'
}

function mostrarBotonesConver2() {
    btnTouchdown2.style = 'display: none'
    btnSafety2.style = 'display: none'
    document.getElementById('botonesConver2').style = 'display: flex'
}

function mostrarBotonesScore1() {
    btnTouchdown1.style = 'display: flex'
    btnSafety1.style = 'display: flex'
    document.getElementById('botonesConver1').style = 'display: none'
}

function mostrarBotonesScore2() {
    btnTouchdown2.style = 'display: flex'
    btnSafety2.style = 'display: flex'
    document.getElementById('botonesConver2').style = 'display: none'
}

condicionesIniciales();

//BOTONES.
btnTouchdown1.addEventListener('click', () => {
    score1.textContent = parseInt(score1.textContent) + 6;
    mostrarBotonesConver1();
})

btnTouchdown2.addEventListener('click', () => {
    score2.textContent = parseInt(score2.textContent) + 6;
    mostrarBotonesConver2();
})

btn1Xp1.addEventListener('click', () => {
    score1.textContent = parseInt(score1.textContent) + 1;
    mostrarBotonesScore1();
})

btn1Xp2.addEventListener('click', () => {
    score2.textContent = parseInt(score2.textContent) + 1;
    mostrarBotonesScore2();
})

btnFailed1.addEventListener('click', () => {
    mostrarBotonesScore1();
})

btnFailed2.addEventListener('click', () => {
    mostrarBotonesScore2();
})

btn2Xp1.addEventListener('click', () => {
    score1.textContent = parseInt(score1.textContent) + 2;
    mostrarBotonesScore1();
})

btn2Xp2.addEventListener('click', () => {
    score2.textContent = parseInt(score2.textContent) + 2;
    mostrarBotonesScore2();
})

btnSafety1.addEventListener('click', () => {
    score1.textContent = parseInt(score1.textContent) + 2;
})

btnSafety2.addEventListener('click', () => {
    score2.textContent = parseInt(score2.textContent) + 2;
})

btnReset.addEventListener('click', () => {
    condicionesIniciales();
})
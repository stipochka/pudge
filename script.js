var GAME = {
    width: 1257,
    height: 760,
}

var canvas = document.getElementById("canvas");
var canvasWidth = GAME.width;
var canvasHeight = GAME.height;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var canvasContext = canvas.getContext("2d");

var ground = new Image();
ground.src = 'img/background.jpg';
ground.onload = function () {
    canvasContext.drawImage(ground, 0, 0);
}

var pudge = new Image();
pudge.src = "img/pudgik.png";
pudge.onload = function () {
    canvasContext.drawImage(pudge, 450, 0);
}

var hook = new Image();
hook.src = "img/hook.png";
hook.onload = function () {
    canvasContext.drawImage(hook, 500, 35);
}

var creep = new Image();
creep.src = "img/pngegg.png";
creep.onload = function () {
    canvasContext.drawImage(creep, 0, 250);
}

var creep2 = new Image();
creep2.src = 'img/cr.png';
creep2.onload = function () {
    canvasContext.drawImage(creep2, 0, 450);
}

var GROUND = {
    width: 1257,
    height: 760,
    coordX: 0,
    coordY: 0,
    model: ground,
}

var CREEP = {
    width: 80,
    height: 120,
    coordX: 0,
    coordY: 250,
    dx: 5,
    dy: 0,
    starty: 250,
    model: creep,
}

var HOOK = {
    width: 80,
    height: 80,
    coordX: 500,
    coordY: 35,
    dx: 10,
    model: hook,
}

var CREEP2 = {
    width: 90,
    height: 90,
    coordX: 0,
    coordY: 450,
    dx: 8,
    dy: -1,
    starty: 450,
    model: creep2,
}

var PUDGE = {
    width: 120,
    height: 101,
    coordX: 450,
    coordY: 0,
    model: pudge,
}


function draw(obj) {
    canvasContext.drawImage(obj.model, obj.coordX, obj.coordY);
}

function suma(obj) {
    obj.coordX += obj.dx;
    obj.coordY += obj.dy
    if (obj.coordX > GAME.width || obj.coordY > GAME.height) {
        obj.coordX = 0;
        obj.coordY = obj.starty;
    }
}

function runningCreep() {
    suma(CREEP);
    suma(CREEP2);
    canvasContext.clearRect(0, 0, 1257, 760);
    draw(GROUND);
    draw(PUDGE);
    draw(HOOK);
    draw(CREEP);
    draw(CREEP2);
}



function play() {
    runningCreep();
    requestAnimationFrame(play);
}
play();
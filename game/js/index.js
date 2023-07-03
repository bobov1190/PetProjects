let cvs = document.querySelector("#canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

let prig = new Audio();
let prigm = new Audio();

let score = 0;

bird.src = "../img/flappy_bird_bird.png";
bg.src = "../img/flappy_bird_bg.png";
fg.src = "../img/flappy_bird_fg.png";
pipeUp.src = "../img/flappy_bird_pipeUp.png";
pipeBottom.src = "../img/flappy_bird_pipeBottom.png";
prig.src = "../sounds/fly.mp3";
prigm.src = "../sounds/score.mp3"

let gap = 90;

document.addEventListener("keydown", moveUp);

function moveUp() {
    prig.play();
    yPos -= 25;
}

let pipe = [];
pipe[0] = {
    x : cvs.width,
    y : 0
}

let xPos = 10;
let yPos = 150;
let grav = 1.5;

function draw() {
    ctx.drawImage(bg, 0 ,0);

    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;

        if (pipe[i].x == 125) {
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

        if (xPos + bird.width >= pipe[i].x 
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
                || yPos + bird.height >= cvs.height - fg.height) {
            location.reload();
        }


        if (pipe[i].x == 5) {
            prigm.play();
            score += 1;
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    ctx.fillStyle = "#000";
    ctx.font = "20px serif";
    ctx.fillText = ("Счет : " + score , 10, cvs.height - 20);


    yPos += grav;

    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;
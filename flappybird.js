let xPos = 25;
let pipeW = 220;
let pipeW2 = 300;
let birdY = 220;
let birdSize = 50; 
let birdVelocity = 0;
const gravity = 0.3
let score = 0;
let myArray = [];

function preload(){
    img1 = loadImage('bird.png')
}

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < 3; i++ ){
        let newUpPipe = new Pipe (xPos, 0, 50, pipeW);
        let newDownPipe = new Pipe(xPos, 290, 50, pipeW2);
        myArray.push(newUpPipe);
        myArray.push(newDownPipe);
        pipeW = random(120, 220);
        pipeW2 = random(300, 400);  
    }
}

function draw(){
    background(0, 0, 0);
    textSize(20);
    fill(255, 0, 0);
    text(`Score: ${score} `, 40, 60);
    
    birdVelocity += gravity; // Update bird's velocity with gravity
    birdY += birdVelocity;
    
    image(img1, 50, birdY, birdSize, birdSize);
    
    fill(0, 255, 0);
    rect(xPos, 0, 50, pipeW);
    fill(0, 255, 0);
    rect(xPos, 290, 50, pipeW2) 
    xPos += 3;
    if (xPos > 525){
        xPos = -25
    }
    
    if (150 + birdSize > xPos && 150 < xPos + 50 && (birdY < pipeW || birdY + birdSize > pipeW + 80) ||
    birdY < 0 ||
    birdY + birdSize > height) {
        birdY = 220; 
        score -= 1;
    } 
}

function keyPressed() {
    if (keyCode === 32) { // 32 is the keyCode for the space bar
        birdVelocity = -8; // Adjust this value to control the jump height
    }
}
if (score < -1){
    clearCanvas();

}
class Pipe {
    constructor(x, y, w, h){
        this.xValue = x;
        this.yValue = y;
        this.width = w;
        this.height = h;
    }
}
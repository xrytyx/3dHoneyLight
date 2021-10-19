let Honey;
let Beee;

let spacing = 100;

function preload() {
  // honeyComb = loadModel('HoneyC.obj', true);
  Honey = loadModel('HoneyC.obj', true);
  Beee = loadModel ('Bee3.obj',true);
}

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  ambientLight(255);
  //pointLight(0,0,255,0,-600,200);

  background(0);
  noStroke();

  for (x = 0; x <= width; x += spacing) {
    for (y = 0; y <= height; y += spacing) {



      push();
      translate(-400 + x, -400 +y)
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      rotateZ(frameCount * 0.05);
      normalMaterial();
      model(Honey);
      pop();
    }


    push();
    translate(mouseX,mouseY);
    ambientMaterial(235,169,55);
    model(Beee);
    pop();
  }
}

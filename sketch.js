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

perspective()




// //move slider to see changes!
// //sliders control the first 6 parameters of camera()
// let sliderGroup = [];
// let X;
// let Y;
// let Z;
// let centerX;
// let centerY;
// let centerZ;
// let h = 20;
//
// function setup() {
//   createCanvas(600, 600, WEBGL);
//   //create sliders
//   for (var i = 0; i < 6; i++) {
//     if (i === 2) {
//       sliderGroup[i] = createSlider(10, 400, 200);
//     } else {
//       sliderGroup[i] = createSlider(-400, 400, 0);
//     }
//     h = map(i, 0, 6, 5, 85);
//     sliderGroup[i].position(10, height + h);
//     sliderGroup[i].style('width', '80px');
//   }
// }
//
// function draw() {
//   background(60);
//   // assigning sliders' value to each parameters
//   X = sliderGroup[0].value();
//   Y = sliderGroup[1].value();
//   Z = sliderGroup[2].value();
//   centerX = sliderGroup[3].value();
//   centerY = sliderGroup[4].value();
//   centerZ = sliderGroup[5].value();
//   camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
//   stroke(255);
//   fill(255, 102, 94);
//   box(85);
// }

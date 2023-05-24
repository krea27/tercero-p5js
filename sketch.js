/*interactua con  el mouse  con la tecla derecha e izquierda,podes tocar las teclas R,G,B,A mayuscula o minuscula y luego de presionar alguna de ellas, toca de nuevo otra tecla random para seguir interactuando.*/
let x = 330;
let y = 300;
let mitadancho = 240;
let mitadalto = 240;
let posCirculoX = 240;
let posCirculoY = 240;



function setup() {
  createCanvas(550, 600);

  background(0);
  //https://www.reprodart.com/a/moholy-nagy-laszlo/kompositionqxx.html
}

function draw() {
  frameRate(10);
  // fill(15, 200);
  noFill();
  if (mouseIsPressed)
    if (mouseButton == LEFT)
      //fill(25,80,69,68);
      stroke(250, 50, 0);
    else if (mouseButton == RIGHT) stroke(255, 225, 0);
    else stroke(255, 253, 258, 0);
  strokeWeight(1);
  rect(mouseX, mouseY, pmouseX, pmouseY);
  // ellipse(mouseX, mouseY, pmouseX, pmouseY);

  push();
 
  noStroke();
  fill(255, 253, 208); //crema
  rect(195, 80, 51, 460);
  pop();

  push();
  noStroke();
  rect(60, 400, 250, 8); //rect debajo
  pop();

  push();
  noStroke();
  fill(255, 253, 208); //crema
  rect(195, 80, 51, 460);
  pop();
  
  push();noStroke();
  fill(250, 50, 0); //rojo
  ellipse(x, y, mitadancho, mitadalto); // ellipse(330, 300, 240;240);
  pop();

  push();
  noStroke();
  fill(255, 225, 0); //amarillo
  rect(60, 380, 400, 8); //rect  horizontal amarillo  arriba de circulo rojo
  rect(320, 180, 8, 240); //rect verticalamarillo
  rect(60, 400, 218, 8); //rect amarillo ultimo debajo
  pop();

  push();
  fill(8);
  rect(260, 60, 18, 420); //negro
  pop();

  push();
  fill(255, 225, 0); //amarillo
  noStroke();

  pop();

  push();
  stroke(123, 104, 50); //lineas sonre rect negro
  strokeWeight(2);
  line(269, 60, 269, 480);
  line(260, 60, 260, 480);
  line(278, 60, 278, 480);
  pop();
  if (key === "r" || key === "R") {
    background(250, 50, 0); // Fondo rojo
    stroke(0);
  } else if (key === "g" || key === "G") {
    background(220); // Fondo verde
  } else if (key === "b" || key === "B") {
    background(90); // Fondo gris
  }
  if (key === "a") {
    background(255); ellipse(posCirculoX + mouseX / 15, posCirculoY + mouseY / 15, 55);


    console.log("X: " + mouseX + " Y:" + mouseY);

    document.oncontextmenu = function () {
      return false;
    };
  }
}

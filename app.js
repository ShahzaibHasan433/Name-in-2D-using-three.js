
const scene = new THREE.Scene();

var fac = new factory(0, 0, 5, 10); //factory arguments (position_X, position_Y, position_Y, Length)

var plane = new THREE.GridHelper(100, 10);
scene.add(plane);

initialize();

animate();
//Declare or Initialize variables here..
var point, initAngle = 20, t;

//Code your logic here..
function initialize() {
  // Writing S 
  point = new THREE.Vector2(-14,2);
  initAngle = 20;
  t = new Turtle(point, initAngle);

  t.turn(0);
  t.forward(2.5, true);
  t.turn(90);
  t.forward(2.5, true);
  t.turn(90)
  t.forward(2.5, true);
  t.turn(-90);
  t.forward(2.5, true);
  t.turn(-90);
  t.forward(2.5, true);
 
  scene.add(t.drawTurtle());

  // writing H

point = new THREE.Vector2(-8,2);
initAngle = 20;
t = new Turtle(point, initAngle);

t.turn(90);
t.forward(5, true);
t.turn(-180);
t.forward(2.5, false);
t.turn(-90)
t.forward(2.5, true);
t.turn(-90);
t.forward(2.5, true);
t.turn(-180);
t.forward(5, true);
scene.add(t.drawTurtle());

// writing A

point = new THREE.Vector2(-7,2);
initAngle = 20;
t = new Turtle(point, initAngle);

t.turn(90);
t.forward(5, true);
t.turn(-90)
t.forward(2.5 , true)
t.turn(-90);
t.forward(5, true);
t.turn(-180)
t.forward(2.5, true);
t.turn(90);
t.forward(2.5, true);

scene.add(t.drawTurtle());

// writing H

point = new THREE.Vector2(-1,2);
initAngle = 20;
t = new Turtle(point, initAngle);

t.turn(90);
t.forward(5, true);
t.turn(-180);
t.forward(2.5, false);
t.turn(-90)
t.forward(2.5, true);
t.turn(-90);
t.forward(2.5, true);
t.turn(-180);
t.forward(5, true);
scene.add(t.drawTurtle());

// writing Z
point = new THREE.Vector2(-2,7);
initAngle = 20;
t = new Turtle(point, initAngle);

t.turn(0);
t.forward(2.8, true);
t.turn(-120)
t.forward(5.8 , true)
t.turn(120);
t.forward(2.8, true);
// t.turn(-180)
// t.forward(2.5, true);
// t.turn(90);
// t.forward(2.5, true);

scene.add(t.drawTurtle());

// writing A

point = new THREE.Vector2(4,2);
initAngle = 20;
t = new Turtle(point, initAngle);

t.turn(90);
t.forward(5, true);
t.turn(-90)
t.forward(2.5 , true)
t.turn(-90);
t.forward(5, true);
t.turn(-180)
t.forward(2.5, true);
t.turn(90);
t.forward(2.5, true);

scene.add(t.drawTurtle());

// writing I

point = new THREE.Vector2(8,2);
initAngle = 20;
t = new Turtle(point, initAngle);

t.turn(0);
t.forward(3, true);
t.turn(-180);
t.forward(1.5 , true);
t.turn(-90);
t.forward(5, true);
t.turn(90)
t.forward(1.5, true);
t.turn(-180);
t.forward(3, true);

scene.add(t.drawTurtle());


// writing B

point = new THREE.Vector2(12,2);
initAngle = 20;
t = new Turtle(point, initAngle);

t.turn(90);
t.forward(5, true);
t.turn(-90);
t.forward(2.5 , true);
t.turn(-45);
t.forward(0.5, true);
t.turn(-45)
t.forward(2.0)
t.turn(-45)
t.forward(0.5, true)
t.turn(-45)
t.forward(2.5, true);
t.turn(90);
t.forward(2.5, true);
t.turn(90);
t.forward(2.5,true)
t.turn(45)
t.forward(0.5, true)
t.turn(45)
t.forward(1.8, true)
t.turn(45)
t.forward(0.5, true)
t.turn(45)
t.forward(2.5, true)

scene.add(t.drawTurtle());

}

function animate() {
  requestAnimationFrame(animate);

  fac.renderScene();
}


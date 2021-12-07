const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var fondo;

function preload(){
  polygon_img=loadImage("polygon.png");
  fondo = loadImage('bg.png');
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(703.5,200,210,10);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingshot = new SlingShot(this.ball,{x:100,y:200});

  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

//Niveles 2 jiefesnjfjewjfesjfjhsehfsehfhusehfnusenufesfnuesnufnuesnufnuesfesnufnuesnufn

  //level one2
  block1a2 = new Block(615,175,30,40);
  console.log(block1);
  block2a2 = new Block(645,175,30,40);
  block3a2 = new Block(675,175,30,40);
  block4a2 = new Block(705,175,30,40);
  block5a2 = new Block(735,175,30,40);
  block6a2 = new Block(765,175,30,40);
  block7a2 = new Block(795,175,30,40);
  //level two2
  block8a2 = new Block(645,135,30,40);
  block9a2 = new Block(675,135,30,40);
  block10a2 = new Block(705,135,30,40);
  block11a2 = new Block(735,135,30,40);
  block12a2 = new Block(765,135,30,40);
  //level three2
  block13a2 = new Block(675,95,30,40);
  block14a2 = new Block(705,95,30,40);
  block15a2 = new Block(735,95,30,40);
  //top2
  block16a2 = new Block(705,55,30,40);

}
function draw() {
  background(fondo); 
 
  textSize(20);

  fill("lightyellow");
  ground.display();

  fill('purple');
  stand1.display();
  stand2.display();
  slingshot.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("green");
  block16.display();

  //Nivel 2 jdjiajfesjifjisejifjiesijfsejifjiesjfesfjiseipfiesijfjiesijf
 
  fill("blue");
  block1a2.display();
  block2a2.display();
  block3a2.display();
  block4a2.display();
  block5a2.display();
  block6a2.display();
  block7a2.display();
  fill("pink");
  block8a2.display();
  block9a2.display();
  block10a2.display();
  block11a2.display();
  block12a2.display();
  fill("turquoise");
  block13a2.display();
  block14a2.display();
  block15a2.display();
  fill("green");
  block16a2.display();

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
}

function mouseDragged() {
 Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY}); 
}

function mouseReleased() {
      slingshot.fly();
}
  
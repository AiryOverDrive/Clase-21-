const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground,left_wall,right_wall,top_wall;
var ball;
var btn1,btn2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  btn1 = createImg("right.png");
  btn1.position(250,150);
  btn1.size(55,55); 
  btn1.mouseClicked(hforce);
  
  btn2 = createImg("up.png");
  btn2.position(100,150);
  btn2.size(50,50); 
  btn2.mouseClicked(vforce);

  ground = new Ground(200,390,400,20);
  right_wall = new Ground(390,200,20,400);
  left_wall = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options={
    restitution:0.1
  }

  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw(){
  background(51);
  Engine.update(engine);

  fill("white");
  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  right_wall.show();
  left_wall.show();
  top_wall.show();
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
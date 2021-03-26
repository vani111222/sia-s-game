const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//var a=1000
var engine, world;
var ground, ball;
var box1,box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
// JSON
// MULTIPLE VALUES TO  VARIABLES

    box1=new Box(100,100,50,50);
    box2=new Box(200,200,50,50);
    ground1=new Ground(10,350,400,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    //rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,400,20);

    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 30, 30);
    box1.display();
    box2.display();
    ground1.show();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

bob1 = new BOB(20,20,2);
bob2 = new BOB(40,40,2);
bob3 = new BOB(60,60,2);
bob4 = new BOB(80,80,2);
bob5 = new BOB(100,100,2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
}




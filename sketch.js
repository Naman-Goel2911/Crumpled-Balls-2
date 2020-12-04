
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 500);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 200, 30);

	ground = new Ground(750, 490);

	dustbin1 = new Dustbin(1250, 470, 170, 20);
	dustbin2 = new Dustbin2(1325, 380, 10, 200);
	dustbin3 = new Dustbin2(1175, 380, 10, 200);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(255);

  ground.display();

  dustbin3.display();
  dustbin2.display();
  dustbin1.display();

  paper.display();


  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 240, y: -200});
	}
}

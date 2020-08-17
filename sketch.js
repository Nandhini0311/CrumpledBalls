
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground();
	dustbin=new Dustbin();
	paper= new Paper();
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  ground.display();
  dustbin.display();
  paper.display();
 
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



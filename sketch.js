
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1, block2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    Engine.update(engine)
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
     var plane_options={
		isStatic:true
	 }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




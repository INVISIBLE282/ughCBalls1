const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
    paperObject = new Paper(200,450,40);
	//Create the Bodies Here.
	var wall1=createSprite(650,640,10,80);
	wall1.shapeColor="red";
	var wall2=createSprite(565,670,180,10);
	wall2.shapeColor="red";
	var wall3=createSprite(480,640,10,80);
	wall3.shapeColor="red";
	var paper=createSprite(100,650,20,20);
	paper.shapeColor="blue";
    var ground=createSprite(10,680,7000,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  drawSprites();
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
	 Matter.Body.applyForce(paperObject.bdoy,paperObject.body.position,{x:85,y:-85});
	} 
}


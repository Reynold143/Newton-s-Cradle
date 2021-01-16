
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(295,605)
	bob2 = new Bob(334,605)
	bob3 = new Bob(375,605)
	bob4 = new Bob(414,605)
	bob5 = new Bob(453,605)

	roof = new Roof(372,320,200,20)
	rope1 = new Rope(bob1.body,285,330)
	rope2 = new Rope(bob2.body,320,330)
	rope3 = new Rope(bob3.body,367,330)
	rope4 = new Rope(bob4.body,410,330)
	rope5 = new Rope(bob5.body,455,330)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();  
  bob4.display();
  bob5.display();

  roof.display();
  rope1.show();
  rope2.show();
  rope3.show();
  rope4.show();
  rope5.show();
  

  fill("red")
  text("x:"+mouseX+", y:"+mouseY,mouseX,mouseY)


 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:75});
	}
}








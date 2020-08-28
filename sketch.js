
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine ;
var  roof1;
var bobObject1 , bobObject2 , bobObject3 ,bobObject4 , bobObject5;
var rope1 ;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	
	roof1= new Roof (400,100,420 ,20);
	

	bobObject1=  new Bob (390,600,100, PI/2);
	bobObject2=  new Bob (320,600,100, PI/2);
	bobObject3 =  new Bob (250,600,10, PI/2);
	bobObject4 = new Bob (530,600,100, PI/2); 
	bobObject5 = new Bob (460,600,100, PI/2);

rope1 = new rope(bobObject1.body,roof1.body ,40,0)

  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
   roof1.display();
  rope1.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the dsocument and understand how to make the package body fall only on
	   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:60, y:-60});

   
   
	 }
   }





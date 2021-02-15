
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(400,680,800,30)
	roof1=new Roof();

	ball1=new Ball(300,300,25);
	ball2=new Ball(350,300,25);
	ball3=new Ball(400,300,25);
	ball4=new Ball(450,300,25);
	ball5=new Ball(500,300,25);

	rope1=new Rope(ball1.body, roof1.body,-100);
    rope2=new Rope(ball2.body, roof1.body,-50);
	rope3=new Rope(ball3.body, roof1.body,0);
	rope4=new Rope(ball4.body, roof1.body,50);
	rope5=new Rope(ball5.body, roof1.body,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  roof1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 // drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-50, y:-30});
	}
}


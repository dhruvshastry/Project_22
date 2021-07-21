const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob,bob1,bob2,bob3, bob4,bob5,bob6;
var rope1, rope2, rope3, rop4, rope5,rope6,rope7;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
		isStatic: false,
		restitution: 1,
		density:0.8
	}
	bob = Bodies.circle(190,355,20,bob_options);
	World.add(world,bob)

	bob1 = Bodies.circle(230,355,20,bob_options);
	World.add(world,bob1)

	bob2 = Bodies.circle(240,340,20,bob_options);
	World.add(world,bob2)

	bob3 = Bodies.circle(300,350,20,bob_options);
	World.add(world,bob3)

	bob4 =  Bodies.circle(400,370,20,bob_options);
	World.add(world,bob4)

	bob5 =  Bodies.circle(500,375,20,bob_options);
	World.add(world,bob5)

	

	Engine.run(engine);


	rope1= new rope(bob,roof,-100,0)
	rope2= new rope(bob1,roof,-60,0)
	rope3= new rope(bob2,roof,-20,0)
	rope4= new rope(bob3,roof,20,0)
	rope5= new rope(bob4,roof,60,0)
	rope6= new rope(bob5,roof,100,0)	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");



  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.show();
  rope2.show();
  rope3.show();
  rope4.show();
  rope5.show();
  rope6.show();

  //create ellipse shape for multiple bobs here
  ellipseMode(RADIUS);
  ellipse(bob.position.x,bob.position.y,20,20)
  ellipse(bob2.position.x,bob2.position.y,20,20)
  ellipse(bob3.position.x,bob3.position.y,20,20)
  ellipse(bob1.position.x,bob1.position.y,20,20)
  ellipse(bob4.position.x,bob4.position.y,20,20)
  ellipse(bob5.position.x,bob5.position.y,20,20)


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
  if(keyCode== UP_ARROW){
	Matter.Body.applyForce(bob,bob.position,{x:-70,y:65})
}
}
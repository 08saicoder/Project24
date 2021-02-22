
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;

function preload(){
	
	this.body = Bodies.hammer(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    
    display()
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
}

function setup() {
	createCanvas(800, 700);

	var options = {
		'density':2,
		'friction':1.0,
		'restitution':0.5
	};


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(lightBlue);
  
  hammer.display();s
 
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body

var engine, world, ball, ground;
var button,ball2;
function setup() {
  createCanvas(400, 400);
  //create the engine
  engine = Engine.create();
  world = engine.world;
  //Add world to the engine
  
  button=createImg("up arrow.jpg");
  button.position(30,30);
  button.size(50,50,50);
  button.mouseClicked(vForce);

  var ball_options = {
    restitution: 1.00,
    
  }

  var ball2_options = {
    restitution: 0.2,
    
  }

  var ground_options = {
    isStatic: true
  };
 

  //create a ground
  ground = Bodies.rectangle(200, 350, 600, 20, ground_options);
  //add to world
  World.add(world, ground);
  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(200, 10, 20, ball2_options);
  World.add(world, ball2);

 console.log(ball);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);



  ellipse(ball.position.x, ball.position.y, 20);
  //write a rectangle function to display ground.
  rect(ground.position.x, ground.position.y, 600, 20);
  fill("red");
  ellipse(ball2.position.x, ball2.position.y, 20);
  
  


}

 function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
 }
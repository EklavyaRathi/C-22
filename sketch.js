const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,body,world;
var ground;

function setup() {
  createCanvas(400,400);
      engine=Engine.create();
      world=engine.world;
      var body_option={
        isStatic:false,
        restitution:2.0
      }
      body=Bodies.rectangle(200,100,50,50,body_option);
      World.add(world,body);
      var ground_option={
        isStatic:true
      }
      ground=Bodies.rectangle(200,390,200,20,ground_option);
      World.add(world,ground);
      
      //console.log(body);
      
}

function draw() {
  background(0);

  Engine.update(engine);
  rectMode(CENTER);
  ellipse(body.position.x,body.position.y,50,50);

  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
}
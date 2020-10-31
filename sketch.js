const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine, world
var rec1,rec2,rec3,rec4,rec5,rec6
var object1
function setup() {
  createCanvas(800,400);
engine = Engine.create() 
world = engine.world
var options = {
isStatic:true 
}
object1 = Bodies.rectangle(222,121,80,50,options)
World.add(world,object1)

} 

function draw() {
background(255,255,255);  
Engine.update(engine)
rectMode(CENTER)
rect(object1.position.x,object1.position.y,80,50)


drawSprites();
}






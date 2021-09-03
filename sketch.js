const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;
const World = Matter.World;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,790,width,10);
  
  for(var k = 0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}
for(var j = 40;j<=width;j = j + 50){
  plinkos.push(new Plinko(j,75));
}
for(var j = 40;j<=width;j = j + 50){
  plinkos.push(new Plinko(j,175));
}
for(var j = 40;j<=width;j = j + 50){
  plinkos.push(new Plinko(j,275));
}
for(var j = 40;j<=width;j = j + 50){
  plinkos.push(new Plinko(j,375));
}
}
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function draw() {
  background("black"); 
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var j = 0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k = 0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var m = 0;m<plinkos.length;m++){
    plinkos[m].display();
  }
  
  ground.display();
  drawSprites();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,pig1,log1;
var box1,box2,ground1;

function prealod(){

}

function setup(){
     createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;
ground=new ground(1220,500,200,30);

ball=new Poligon(200,300,40,70)

rope=new Rope(ball.body,{x:200,y:50})
  box1=new Box(1170,100,70,70); 
  box2=new Box(1170,100,70,70);
  box3=new Box(1170,100,70,70);
  box4=new Box(1170,100,70,70);
  box5=new Box(1170,100,70,70);
  box6=new Box(1170,100,70,70);

  box7=new Box(1270,100,70,70);
  box8=new Box(1270,100,70,70);
  box9=new Box(1270,100,70,70);
  box10=new Box(1270,100,70,70);
  box11=new Box(1270,100,70,70);
  box12=new Box(1270,100,70,70);

  
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display() 
 
 box1.display(); 
 box2.display(); 
 box3.display(); 
 box4.display(); 
 box5.display(); 
 box6.display(); 
 box7.display(); 
 box8.display(); 
 box9.display(); 
 box10.display(); 
 box11.display(); 
 box12.display(); 

 ball.display();
 rope.display();

}





function mouseReleased(){
   poligon.fly();
   gameState = "launched";
}
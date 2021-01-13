
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5, roof1, p1, p2, p3, p4, p5;

function preload()
{
    //backGroundImg=loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(700,400);
    //rectMode(CENTRE);

    engine = Engine.create();
    world = engine.world;

    p1 = new roof(224,40,20,20);
    p2 = new roof(287,40,20,20);
    p3 = new roof(350,40,20,20);
    p4 = new roof(413,40,20,20);
    p5 = new roof(476,40,20,20);
    roof1 = new roof(350,40,700,20)
    bob1 = new bob(224,300,30);
    bob2 = new bob(287,300,30);
    bob3 = new bob(350,300,30);
    bob4 = new bob(413,300,30);
    bob5 = new bob(476,300,30);

    rope1 = new rope(bob1.body,p1.body,-50,0);
    rope2 = new rope(bob2.body,p2.body,-50,0);
    rope3 = new rope(bob3.body,p3.body,-50,0);
    rope4 = new rope(bob4.body,p4.body,-50,0);
    rope5 = new rope(bob5.body,p5.body,-50,0);
   


    
}

function draw(){
    background("yellow");
    //Engine.update(engine);
    
    roof1.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:180,y:-180});
              
     }
   }






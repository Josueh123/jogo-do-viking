const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Collision = Matter.Collision;

var edges;
var bgImg;
var ground;
var groundImg;
var viking;
var mago;
var morsego;

var engine, world;
var magge;
var bat, batGroup;
var ataque, ataqueImg;

function preload() {
    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                                "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                                "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                                "bat/bat10.png","bat/bat11.png","bat/bat12.png");

    bgImg = loadImage("./cenario/cemiterio.gif");
    groundImg = loadImage("./cenario/ground.png");
   
    magoImg = loadImage("./imagensDosPersonagens/magoDoMal.png");
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options={
        isStatic: true
    }
    ground = Bodies.rectangle(600, 350,1200,5,ground_options);
    World.add(world, ground);
    //ground=createSprite(600, 350,1200,20);
    
    edges = createEdgeSprites();

    viking = new Viking(201,50,80,80,90);
    magge = new Maguinho(600,50,150,150);
    batGroup = createGroup();

    if (keyDown(88)) {
        
        viking.changAnimation('viking0.2');

    }
    
}

function draw(){
    background(bgImg);
    Engine.update(engine);
   
    imageMode(CENTER);
    image(groundImg,ground.position.x,ground.position.y,1200,100);
    viking.display();
    magge.display();


   
    
    morseguinho();
    drawSprites();
    
    
}

function morseguinho(){

    if(frameCount % 100 === 0){
        bat= createSprite(Math.round(random(0,1200)),Math.round(random(0,700)),20,20);
        bat.addAnimation("moving_bat",batAnimation);
        bat.visible = false;
        bat.visible = true;
        bat.velocityX = Math.round(random(-5,5));
        bat.velocityY = Math.round(random(-5,5));
        bat.scale=0.4;    
         
        //bat.debug = true;    
        bat.setCollider("rectangle",0,0,40,40);
        bat.lifetime=300;
    
        bat.depth = viking.depth;
        viking.depth = viking.depth+1;
    
        batGroup.add(bat);  
      }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        viking.shoot();
    }
}



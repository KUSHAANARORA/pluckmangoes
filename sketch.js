
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6;
function preload()
{
	boy = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
    world = engine.world;
    stone = new Stone(235,420,30)
    mango1 = new Mango(1100,100,30)
    mango2 = new Mango(1100,70,30)
    mango3 = new Mango(900,200,30)
    mango4 = new Mango(1100,200,30)
    mango5 = new Mango(900,160,30)
    mango6 = new Mango(900,230,30)
    tree = new Tree(1050,580)
    ground = new Ground(650,600,1300,20)
    ss = new SlingShot(stone.body,{x:235,y:420})
    // mango1 = new Mango()
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy,200,340,200,300)
  tree.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  ground.display()
  ss.display()
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  drawSprites();
 
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    ss.fly();
    // gameState = "launched";
}
function keyPressed() {
    if(keyCode === 32) {
        Matter.Body.setPosition(stone.body,{x:235,y:420})
       ss.attach(stone.body)
    }
}
function detectCollision (lstone,lmango) {
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position
    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance <= lmango.r+lstone.r) {
        Matter.Body.setStatic(lmango.body,false)
    }
}



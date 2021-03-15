
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,stone1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1111,100,30);
    mango2=new mango(970,190,30);
	mango3=new mango(1000,100,30);
    mango4=new mango(911,190,30);
	mango5=new mango(1190,180,30);
    mango6=new mango(1110,190,30);
	mango7=new mango(1050,170,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1=new stones(200,450);

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);



  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone1.display();
  groundObject.display();
}





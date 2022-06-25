var Doreamon;
var Nobita;
var Ground;




function preload(){

NobitaImg1 = loadImage("Nobita3.png")
NobitaImg2 = loadImage("Nobita.jpg")
DoreamonImg1 = loadImage("Doreamon1.png")
GroundImg1 = loadImage("Ground.jpg")


}

function setup(){
createCanvas(1000,600);

Ground = createSprite(500,300,50,50);
Ground.addImage("Ground",GroundImg1);
Ground.scale = 1.7;
Ground.velocityX = -2;



Doreamon = createSprite(500,300,50,50);
Doreamon.addImage("Doreamon",DoreamonImg1);
Doreamon.scale = 0.2;

Nobita = createSprite(400,200,50,50);
Nobita.scale = 0.5;
Nobita.addImage("Nobita",NobitaImg1);




}

function draw(){
background(2);

//reset the ground
if(Ground.x<250){
  Ground.x = 500;
}

drawSprites();

}
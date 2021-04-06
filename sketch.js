var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    plank1=createSprite(100,580,190,20)
    plank1.shapeColor="blue"
    plank2=createSprite(300,580,190,20) 
    plank2.shapeColor="red"
    plank3=createSprite(500,580,190,20)
    plank3.shapeColor="green"
    plank4=createSprite(700,580,190,20)
    plank4.shapeColor="yellow"
    box=createSprite(300,0,20,20)
    box.shapeColor="white"
    box.x=Math.round(random(0,600))
box.velocityY=15
box.velocityX=15
Edges=createEdgeSprites()


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    box.bounceOff(Edges) 
    
    if(plank1.isTouching(box)){
        box.shapeColor="blue"
    }
    if(box.isTouching(plank2)){
        box.shapeColor="red"
    }
    if(box.isTouching(plank3)){
        box.shapeColor="green"
    }
    if(box.isTouching(plank4)){
        box.shapeColor="yellow"
    }
    box.bounceOff(plank1)
    box.bounceOff(plank2)
    box.bounceOff(plank3)
    box.bounceOff(plank4)
    //create edgeSprite
    drawSprites()



    //add condition to check if box touching surface and make it box
}

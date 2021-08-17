var cat, mouse, bg
var cat1,cat2,cat3, mouse1,mouse2,mouse3
function preload() {
    //load the images here
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png")

    mouse1 = loadAnimation("images/mouse1.png")
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3 = loadAnimation("images/mouse4.png")

    bg = loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870, 600);
    cat.addAnimation("sleeping", cat1);
    cat.scale = 0.2

    mouse = createSprite(200, 600);
    mouse.addAnimation("sleeping", mouse1);
    mouse.scale = 0.15

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("still", cat3)
        cat.X =400
        cat.scale = 0.2
        cat.changeAnimation("still")

       
        mouse.addAnimation("still", mouse3)
        
        mouse.scale = 0.15
        mouse.changeAnimation("still")

        
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== LEFT_ARROW){
      cat.velocityX = -5
      cat.addAnimation("moving", cat2);
      cat.changeAnimation("moving")
      cat.scale = 0.2

      mouse.addAnimation("moving", mouse2)
      mouse.changeAnimation("moving")
      mouse.scale = 0.15
  }


}

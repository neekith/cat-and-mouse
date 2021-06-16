    var tom,tomIMG,tomIMG2
    var jerry,jerryIMG,jerryIMG2 
    var garden,gardenIMG
 function preload()
     {
        //load the images here
        gardenIMG=loadImage("garden.png")
        tomIMG=loadAnimation( "cat1.png", "cat4.png" )
        jerryIMG=loadAnimation("mouse1.png","mouse4.png")
        tomIMG2=loadAnimation("cat2.png","cat3.png")
        jerryIMG2=loadAnimation("mouse2.png","mouse3.png")
     }
 function setup()
    {
        createCanvas(800,500);
        //create tom and jerry sprites here
        garden=createSprite(400,250)
        garden.addImage(gardenIMG);
        garden.scale=0.9
        
        tom=createSprite(650,400)
        tom.addAnimation("action",tomIMG);
        tom.scale=0.2

        mouse=createSprite(100,400)
        mouse.addAnimation("action",jerryIMG);
        mouse.scale=0.2



    }

 function draw() 
    {

        background("yellow");
        //Write condition here to evalute if tom and jerry collide
         if(tom.isTouching(jerry))
        {
              //jerry.addAnimation("run",jerryIMG2)
             //jerry.changeAnimation("run")
        }


        drawSprites();
    }


 function keyPressed()
        {

        //For moving and changing animation write code here

            if(keyCode === LEFT_ARROW)
        {
            tom.addAnimation("teasing",jerryIMG2)
            tom.changeAnimation("teasing")
            tom.frameDelay=25
        }


        }

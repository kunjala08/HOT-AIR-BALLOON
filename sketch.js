var balloon;
var database;
var position;
var balloonImage2
function preload(){
  balloonImage2=loadImage("pro-C35+images/pro-C35 images/Hot Air Ballon-02.png")
  balloonImage1=loadImage("pro-C35+images/pro-C35 images/Hot Air Ballon-01.png")

}
function setup() {
  database = firebase.database();
  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);
  var Balloonposition = database.ref('balloon/height')
  Balloonposition.on("value",readHeight,showError)
}

function draw() {
  background(balloonImage1);
   if(keyDown(UP_ARROW)){
     updateHeight(0,-10);
     balloon.addImage(balloonImage2)
     balloon.scale=balloon.scale-0.01;
   }
  drawSprites();
}
function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}
function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x' : height.x + x,
    'y' : height.y + y
  })
}


function showError(){
  console.log("Error in writing to the databse")
}
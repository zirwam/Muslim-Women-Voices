var x;
var imageFilea;
var imageFile;
var imageFile2;
var quotes;
var accom;
var bio;
var currentQuote;
var boxShowing = null;

var w = 400,
    h = 620;
var showfeed = false
var maph=620,
    mapw=400;

function preload (){
  //imageFilea = loadImage('assets/scrool.jpg')
  imageFile = loadImage('assets/background.jpg')
  imageFile2 = loadImage('assets/arrow.png')
  quotes = loadStrings('quotes.txt');
  bio = loadStrings('bio.txt')
  accom = loadStrings('accom.txt')
}
function setup() { 
  createCanvas(400, 620);
	getNewWords();
surface.setResizable(true);
}
//function keyPressed() {
  //saveFrames("out", "png", 1, 25);
//}
function getNewWords() {
	currentQuote= quotes[floor(random(quotes.length))];
  currentAccom= accom[floor(random(accom.length))];
  } 
function draw() { 
  background(220);
  image(imageFile, 0, 0, mapw, maph);
  fill(255,202,193, 240)
  noStroke()
  rect((50/400)*mapw, (75/620)*maph, 300, 150)
	fill(255)
  textAlign(CENTER,CENTER)
  textSize(40);
  text("muslim women", 200, 140);
	textSize(69);
    text("VOICES", 200, 180);
  textFont("TimesNewRoman");
	fill(255,202,193, 240)
  noStroke()
  rect((100/400)*width, (330/620)*height, 200, 50)
  rect((100/400)*width, (410/620)*height, 200, 50)
  rect((100/400)*width, (490/620)*height, 200, 50)
  fill(255)
  textAlign(CENTER)
  textSize(34);
  text("quotes", 200, 352);
  text("about us", 200, 512);
  textSize(34);
  text("women", 200, 432);
 
  if(boxShowing === "quotes"){
  rect((50/400)*w, (70/620)*h, width*(3/4), 480);
    fill(255,202,193)
    ellipse( width*(3.75/4), height /2, 30 ,30);
    image(imageFile2, width*(3.65/4), height /2.074, 20, 20)
  //rectMode(CENTER);
  textSize(20)
  textAlign(CENTER,CENTER)
  text(currentQuote,100,100, width/2, height/1.5);
}
   if(boxShowing === "accom"){
  //textAlign(CENTER)
    // rectMode(CORNER);
     rect((50/400)*w, (70/620)*h, width*(3/4), 480);
  //   text("hi", 0,h/2, width, height);
   
   
      fill(255,202,193)
      ellipse( width*(3.75/4), height /2, 30, 30);
    image(imageFile2, width*(3.65/4), height /2.074, 20, 20)
     textSize(20)
  textAlign(CENTER,CENTER)
     text(currentAccom,100,100, width/2, height/1.5);

  }
     if(boxShowing === "about"){
  rect((50/400)*w, (70/620)*h, width*(3/4), 480);
       fill(255,202,193)
       //ellipse( width*(3.75/4), height /2, 25, 25);
       textAlign(CENTER)
       textSize(18)
  fill(255,202,193)
       text("contact us at:", 0, 155, width, height);
       text("muslimwomenvoices@gmail.com", 0, 175, width, height);
       textAlign(CENTER,CENTER)
       text(bio, 100, -40, width/2, height);
  }

}
function mousePressed() {
  if(mouseX>(100/400)*w&&
     mouseX<(300/400)*w&&
     mouseY>(410/620)*h&&
     mouseY<(460/620)*h){
  			boxShowing= "accom"
}
  else if(mouseX>(100/400)*w&&
     mouseX<300/400*w&&
     mouseY>330/620*h&&
     mouseY<380/620*h){
  			boxShowing= "quotes"
}
  else if(mouseX>(100/400)*w&&
     mouseX<300/400*w&&
     mouseY>490/620*h&&
     mouseY<540/620*h){
  			boxShowing= "about"
     }
  else if(mouseX>(width*(3.75/4))-12.5&&
     mouseX<(width*(3.75/4))+12.5&&
     mouseY>height /2 -12.5&&
     mouseY<height /2+12.5){
  			getNewWords();
  }
  else {
   	boxShowing = null
}
}

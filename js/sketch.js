
let canvas;

let googlesearchArray;
let googlesearchButton;
let randomgooglesearchresultNumber;
let googlesearchP;


function preload(){
  googlesearchArray = loadStrings("txtFiles/googlesearchentries.txt");
}

function setup() {
  // put setup code here to run once
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

  googlesearchP = createP("");
  googlesearchP.position(230, 50);

  googlesearchButton = createButton("Search");
  googlesearchButton.mousePressed(randgooglesearchresult);

}

function randgooglesearchresult(){
  randgooglesearchresultNumber = int(random(googlesearchArray.length));
  googlesearchP.html(googlesearchArray[randgooglesearchresultNumber]);
}

function draw() {
  // put drawing code here to run in a loop
noStroke();
fill(207,207,207);
  rect(0,0, windowWidth, windowHeight);

fill(255,255,255);
  rect(0,0, windowWidth/2, windowHeight);

strokeWeight(1.5);
stroke(215);
fill(255,255,255);
  rect(windowWidth/9,windowHeight/2,400, 50, 50);

  strokeWeight(3);
  stroke(207);
  fill(255,255,255);
  ellipse(windowWidth/7.8,windowHeight/1.88,20);

noStroke();
fill(0,0,0);
textSize(30);
text('Personality Categorizer', windowWidth/7, windowHeight/2.4);

textSize(20);
text('Categorizing the personality of', windowWidth/1.5, windowHeight/7);

textSize(30);
text('Alanna Tran', windowWidth/1.43, windowHeight/5);
}

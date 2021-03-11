
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
  googlesearchP.position(30, 50);

  googlesearchButton = createButton("Random Google Search Entry");
  googlesearchButton.mousePressed(randgooglesearchresult);

}

function randgooglesearchresult(){
  randgooglesearchresultNumber = int(random(googlesearchArray.length));
  googlesearchP.html(googlesearchArray[randgooglesearchresultNumber]);
}

function draw() {
  background(255);
  // put drawing code here to run in a loop
}

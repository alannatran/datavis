
let canvas;
let table;

let search;

let img;

//category variables
let cat1;
let cat2;
let cat3;
let cat4;

//category arrays
let cat1Array = [];
let cat2Array = [];
let cat3Array = [];
let cat4Array = [];

//category paragraph variables
let cat1P;
let cat2P;
let cat3P;
let cat4P;

let googlesearchArray =[];
let googlesearchButton;
let randomgooglesearchresultNumber;
//let googlesearchP;
let textInput;

function preload(){
  //googlesearchArray = loadStrings("txtFiles/googlesearchentries.txt");
  productSansRegular = loadFont('fonts/ProductSans-Regular.ttf');
  table = loadTable('csvFiles/search&categories.csv', 'csv', 'header');

  img = loadImage('images/popup.png');
}



function setup() {
  // put setup code here to run once
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");


  //create out paragraphs and populate them when we press the button
  cat1P = createP('');
  cat1P.position(windowWidth/1.5, windowHeight/3);
  cat2P= createP('');
  cat2P.position(windowWidth/1.5, windowHeight/3+40);
  cat3P= createP('');
  cat3P.position(windowWidth/1.5, windowHeight/3+60);
  cat4P= createP('');
  cat4P.position(windowWidth/1.5, windowHeight/3+80);

  googlesearchButton = createButton("Search");
  googlesearchButton.position(windowWidth/4.6,windowHeight/1.6);
  googlesearchButton.mousePressed(randgooglesearchresult);

  textInput = createInput();
  textInput.position(windowWidth/9,windowHeight/2);

  frameRate(2);

  print(table);

  //run through the data and populate the arrays
  for(let i = 0; i < table.getRowCount(); i++){
    search = table.getString(i, 'search');
    googlesearchArray.push(search);
    cat1 = table.getString(i, 'cat1');
    cat1Array.push(cat1);
    cat2 = table.getString(i, 'cat2');
    cat2Array.push(cat2);
    cat3 = table.getString(i, 'cat3');
    cat3Array.push(cat3);
    cat4 = table.getString(i, 'cat4');
    cat4Array.push(cat4);

  }

}

//randomized search generator
function randgooglesearchresult(){

  randgooglesearchresultNumber = int(random(googlesearchArray.length));
  textInput.value(googlesearchArray[randgooglesearchresultNumber]);

  //switch out the paragraph text with the current category text
  cat1P.html(cat1Array[randgooglesearchresultNumber]);
  cat2P.html(cat2Array[randgooglesearchresultNumber]);
  cat3P.html(cat3Array[randgooglesearchresultNumber]);
  cat4P.html(cat4Array[randgooglesearchresultNumber]);
}

//var y = 100;

var x = 0;
var y = 0;
var z = 0;

function draw() {
  textFont(productSansRegular);
  // put drawing code here to run in a loop
  //grey right side
  noStroke();
  fill(207,207,207);
  rect(0,0, windowWidth, windowHeight);

  //white left side
  fill(255,255,255);
  rect(0,0, windowWidth/2, windowHeight);

  //white search bar on left
  // strokeWeight(1.5);
  // stroke(215);
  // fill(255,255,255);
  //   rect(windowWidth/9,windowHeight/2,400, 50, 50);

  //circle in magnifying glass
  //strokeWeight(3);
  //stroke(207);
  //fill(255,255,255);
  //ellipse(windowWidth/7.8,windowHeight/1.88,20);

  //line in magnifying glass
  //strokeWeight(3);
  //stroke(207);
  //line(windowWidth/7.51,windowHeight/1.83,windowWidth/7.3,windowHeight/1.8);


  //first dot
  x = x + 1;
  y = y + 1;
  z = z + 1;

if (x < 2)
{ fill(41,41,41);
}
else {
  fill(207,207,207);
}
  noStroke();
  ellipse(windowWidth/1.39,windowHeight/3.8,8);

  if (x > 2) {
    x = 0;
  }


  //second dot
if (y < 2.5)
{ fill (105,105,105);
}
else {
  fill(207,207,207);
}
  noStroke();
  ellipse(windowWidth/1.315, windowHeight/3.8, 8);

  if (y > 2.5){
    y = 0;
  }

  //third dot
  if (z < 3)
  {fill (135,135,135);
  }
  else {
    fill (207,207,207);
  }
  noStroke();
  ellipse(windowWidth/1.25, windowHeight/3.8, 8);

  if (z > 3){
    z = 0;
    }


  noStroke();
  fill(0,0,0);
  textSize(30);
  text('Personality Categorizer', windowWidth/7, windowHeight/2.4);

  textSize(20);
  text('Categorizing the personality of', windowWidth/1.5, windowHeight/7);

  textSize(30);
  text('Alanna Tran', windowWidth/1.42, windowHeight/5);

  //image(img,windowWidth/11,windowHeight/9,windowWidth/1.2, windowHeight/1.3);
}



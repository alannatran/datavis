
let canvas;
let table;

let search;
let cat1;
let cat2;
let cat3;
let cat4;


  //let googlesearchArray;
let googlesearchButton;
  //let randomgooglesearchresultNumber;
  //let googlesearchP;
  let textInput;

function preload(){
    //googlesearchArray = loadStrings("txtFiles/googlesearchentries.txt");
  productSansRegular = loadFont('fonts/ProductSans-Regular.ttf');
  table = loadTable('csvFiles/search&categories.csv', 'csv', 'header');
}

function setup() {
  // put setup code here to run once
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

//randomized search generator with txt file
    //googlesearchP = createP("");
    //googlesearchP.position(235, 345);

googlesearchButton = createButton("Search");
googlesearchButton.position(windowWidth/4.6,windowHeight/1.6);
//googlesearchButton.mousePressed(randgooglesearchresult);

    textInput = createInput();
    textInput.position(windowWidth/9,windowHeight/2);

  frameRate(2);

  print(table);

  for(let i = 0; i < table.getRowCount(); i++){
    search = table.getString(i, 'search');

  }

}

//randomized search generator with txt file
  //function randgooglesearchresult(){
    //randgooglesearchresultNumber = int(random(googlesearchArray.length));
    //googlesearchP.html(googlesearchArray[randgooglesearchresultNumber]);
    //textInput.value(googlesearchArray[randgooglesearchresultNumber]);
    //}

var y = 100;
var x = 100;

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
stroke(41,41,41);
fill(41,41,41);
ellipse(windowWidth/1.4,windowHeight/3.8,8);
if(y == 100){
  stroke(207,207,207);
  fill(207,207,207);
  ellipse(windowWidth/1.4, windowHeight/3.8, 8);
  y = y - 100;
}
  else if (y == 0){
    y = y + 100;
  }


//second dot
  stroke(105,105,105);
  fill(105,105,105);
  ellipse(windowWidth/1.33, windowHeight/3.8, 8);
  if(x == 100){
    stroke(207,207,207);
    fill(207,207,207);
    ellipse(windowWidth/1.4, windowHeight/3.8, 8);
    x = x - 100;
  }
    else if (x == 0){
      x = x + 100;
    }

//third dot
  stroke(135,135,135);
  fill(135,135,135);
  ellipse(windowWidth/1.26, windowHeight/3.8, 8);


noStroke();
fill(0,0,0);
textSize(30);
text('Personality Categorizer', windowWidth/7, windowHeight/2.4);

textSize(20);
text('Categorizing the personality of', windowWidth/1.5, windowHeight/7);

textSize(30);
text('Alanna Tran', windowWidth/1.43, windowHeight/5);
}

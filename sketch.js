

var second,minute,hour,number1,number2,number3,number4,number5,number6,number7,number8,number9,number10,number11,number12;

/*second.strokeWeight(4);
minute.strokeWeight(4);
hour.strokeWeight(4);


hr = hour();
mn = minute();
sc = second();
*/



function setup() {
  createCanvas(800,400);
  hour(50, 55, 50, 50, 0, HALF_PI);
noFill();
hour(50, 55, 60, 60, HALF_PI, PI);
hour(50, 55, 70, 70, PI, PI + QUARTER_PI);
hour(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

let h = hour();
text('Current hour:\n' + h, 5, 50);

let m = minute();
text('Current minute: \n' + m, 5, 50);

let s = second();
text('Current second: \n' + s, 5, 50);

//scAngle = map(sc,0,60,0,360);

number12 = createSprite(400,100,10,10);
number1 = createSprite(420,100,10,10);
number2 = createSprite(430,100,10,10);
number3 = createSprite(440,160,10,10);
number4 = createSprite(440,170,10,10);
number5 = createSprite(440,280,10,10);


}

function draw() {
  background(255,255,255);  
  drawSprites();
}

async function clock(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);

  
}
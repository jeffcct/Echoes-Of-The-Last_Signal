let circleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleColor = color(0, 150, 255); // initial blue
}

function draw() {
  background(20); // dark background
  fill(circleColor);
  noStroke();
  ellipse(mouseX, mouseY, 80, 80); // circle follows mouse
}

function mousePressed() {
  // randomize color on click
  circleColor = color(random(255), random(255), random(255));
}
let player;
let room;
let oxygenSystem;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create a room
  room = new Room(100, 100, 600, 400);
  
  // Create a player at the center of the room
  player = new Player(room.x + room.w / 2, room.y + room.h / 2, 40, 3);
  oxygenSystem = new OxygenSystem(100); // max oxygen = 100
}

function draw() {
  background(20);

  // Draw room
  room.display();

  // Update + draw player
  player.update(room);
  player.display();

  // deplete oxygen slowly
  oxygenSystem.deplete(0.05);
  oxygenSystem.display();

  // check for game over
  console.log()
  if (oxygenSystem.isDepleted()) {
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Out of Oxygen!", width / 2, height / 2);
    noLoop(); // stop the game
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
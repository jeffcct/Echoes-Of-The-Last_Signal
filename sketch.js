let player;
let room;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create a room
  room = new Room(100, 100, 600, 400);
  
  // Create a player at the center of the room
  player = new Player(room.x + room.w / 2, room.y + room.h / 2, 40, 3);
}

function draw() {
  background(20);

  // Draw room
  room.display();

  // Update + draw player
  player.update(room);
  player.display();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
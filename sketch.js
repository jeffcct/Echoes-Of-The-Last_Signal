let player;
let room;
let oxygenSystem;
let tankManager;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create a room
  room = new Room(50, 50, 500, 300);
  
  // Create a player at the center of the room
  player = new Player(room.x + room.w / 2, room.y + room.h / 2, 40, 3);
  oxygenSystem = new OxygenSystem(100, 0.05); // max oxygen = 100
  tankManager = new OxygenTankManager();

  let margin = 20; // this is also an error, why is margin = 30 a fixed number? what if the oxygen tank changes size, then wouldn't the margin change? will it be the same for every room?
  for (let i = 0; i < 5; i++) {
    let x = random(room.x + margin, room.x + room.w - margin);
    let y = random(room.y + margin, room.y + room.h - margin);
    tankManager.addTank((new OxygenTank(x, y)));
  }
}


function draw() {
    background(30);

    oxygenSystem.update();
    player.update(room);

    room.draw();
    player.draw();
    oxygenSystem.draw();
    tankManager.draw();


    // Check player vs oxygen tanks
    tankManager.checkCollisions(player, oxygenSystem);

    if (oxygenSystem.isDepleted()) {
        fill(255, 0, 0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text("Out of Oxygen!", width / 2, height / 2);
        noLoop(); // stop the game
    }

    // // Check player vs room bounds (circle vs rect)
    // if (!CollisionSystem.circleRect(player.getCollisionShape(), room.getCollisionShape())) {
    //     console.log("Player out of bounds!");
    // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


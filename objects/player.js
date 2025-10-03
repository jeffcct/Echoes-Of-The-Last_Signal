class Player {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = size / 2; // [* - not chatGPT] This was a hidden mistake, they are only making this duplicate because of collision that wasn't working because they used player.r instead of size. The fix should have modified the code in oxygenTank, not the player class. Or it should have renamed size as r instead.
    // it claims this is backwards compatible and present focused. This is not a good idea because it's duplicating data (and making one different to the other which can be confusing in the future.)
    
    this.speed = speed;
    this.color = color(0, 150, 255);
  }

  update(room) {
    // Movement
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { // A
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { // D
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) { // W
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { // S
      this.y += this.speed;
    }

    // Keep inside room boundaries
    if (room) {
      this.x = constrain(this.x, room.x + this.r, room.x + room.w - this.r);
      this.y = constrain(this.y, room.y + this.r, room.y + room.h - this.r);
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  getRadius() {
    return this.r;
  }
}
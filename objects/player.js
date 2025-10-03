class Player {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
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
    this.x = constrain(this.x, room.x + this.size/2, room.x + room.w - this.size/2);
    this.y = constrain(this.y, room.y + this.size/2, room.y + room.h - this.size/2);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}
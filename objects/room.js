class Room {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    noFill();
    stroke(200);
    strokeWeight(3);
    rect(this.x, this.y, this.w, this.h);
  }
}
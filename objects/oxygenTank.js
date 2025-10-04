class OxygenTank {
  constructor(x, y, amount = 30) {
    this.x = x;
    this.y = y;
    this.r = 20; // radius for collision + drawing
    this.amount = amount; // how much oxygen it restores
    this.collected = false;
  }

  draw() {
    if (this.collected) return; // this is going to cause lag in the future because of eternal particles. It's practically a memory leak.

    push();
    noStroke();
    fill(0, 150, 255);
    ellipse(this.x, this.y, this.r * 2);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(12);
    text("+O2", this.x, this.y);
    pop();
  }

  getCollisionShape() {
        return {
            type: "circle",
            x: this.x,
            y: this.y,
            radius: this.r
        };
    }

  checkCollision(player, oxygenSystem) {
        if (this.collected) return;

        if (CollisionSystem.circleCircle(this.getCollisionShape(), player.getCollisionShape())) {
            oxygenSystem.replenish(this.amount);
            this.collected = true;
        }
    }
}

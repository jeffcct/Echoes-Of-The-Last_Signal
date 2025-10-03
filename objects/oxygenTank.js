class OxygenTank {
  constructor(x, y, amount = 30) {
    this.x = x;
    this.y = y;
    this.r = 20; // radius for collision + drawing
    this.amount = amount; // how much oxygen it restores
    this.collected = false;
  }

  display() {
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

  // Check collision with player
  checkCollision(player, oxygenSystem) {
    if (this.collected) return;

    let playerRadius = (typeof player.getRadius === 'function')
                        ? player.getRadius()
                        : (player.r !== undefined ? player.r : (player.size ? player.size / 2 : 20)); // this is a horrible fix. This is exactly what I was thinking was wrong with the approach in the player class.

    let d = dist(this.x, this.y, player.x, player.y);
    if (d < this.r + playerRadius) {
      oxygenSystem.replenish(this.amount);
      this.collected = true;
      // optional: play sound or spawn effect
    }
  }
}

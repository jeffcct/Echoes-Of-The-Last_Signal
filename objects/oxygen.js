class OxygenSystem {
  constructor(maxOxygen) {
    this.maxOxygen = maxOxygen;
    this.currentOxygen = maxOxygen;
  }

  // reduce oxygen over time
  deplete(rate) {
    this.currentOxygen -= rate;
    this.currentOxygen = max(this.currentOxygen, 0); // clamp at 0
  }

  // add oxygen (e.g., pickups, safe zones)
  replenish(amount) {
    this.currentOxygen += amount;
    this.currentOxygen = min(this.currentOxygen, this.maxOxygen); // clamp at max
  }

  // check if player is out of oxygen
  isDepleted() {
    return this.currentOxygen <= 0;
  }

  // draw the HUD bar at top of screen
  display() {
    let barWidth = width * 0.6;   // bar takes 60% of screen width
    let barHeight = 20;
    let x = width * 0.2;          // centered
    let y = 20;

    // background (empty bar)
    noStroke();
    fill(100, 0, 0);
    rect(x, y, barWidth, barHeight, 5);

    // filled portion (oxygen left)
    let filled = map(this.currentOxygen, 0, this.maxOxygen, 0, barWidth);
    fill(0, 150, 255);
    rect(x, y, filled, barHeight, 5);

    // text label
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    text("Oxygen", width / 2, y + barHeight / 2);
  }
}
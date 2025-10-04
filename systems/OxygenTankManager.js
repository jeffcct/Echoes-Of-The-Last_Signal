class OxygenTankManager {
    constructor() {
        this.tanks = [];
    }

    addTank(tank) {
        this.tanks.push(tank);
    }

    draw() {
        this.tanks.forEach(tank => tank.draw());
    }

    checkCollisions(player, oxygenSystem) {
        this.tanks.forEach(tank => tank.checkCollision(player, oxygenSystem));
    }
}
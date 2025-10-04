class CollisionSystem {
    static circleCircle(a, b) {
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        return distance < a.radius + b.radius;
    }

    static circleRect(circle, rect) {
        // Clamp circle center to rect bounds
        let closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.w));
        let closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.h));

        let dx = circle.x - closestX;
        let dy = circle.y - closestY;

        return (dx * dx + dy * dy) < (circle.radius * circle.radius);
    }
}
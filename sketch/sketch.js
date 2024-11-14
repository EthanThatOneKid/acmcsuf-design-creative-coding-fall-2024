const circles = [];
const amount = 100;

function setup() {
  createCanvas(400, 400);
  noStroke();
  for (let i = 0; i < amount; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(10, 50),
      speedX: random(-1, 1),
      speedY: random(-1, 1),
      colorOffset: random(100),
    });
  }
}

function draw() {
  background(0, 20);

  circles.forEach((circle) => {
    const r = map(sin(circle.colorOffset + frameCount * 0.01), -1, 1, 100, 255);
    const g = map(cos(circle.colorOffset + frameCount * 0.02), -1, 1, 100, 255);
    const b = map(sin(circle.colorOffset + frameCount * 0.03), -1, 1, 100, 255);
    fill(r, g, b, 150);
    ellipse(circle.x, circle.y, circle.size);

    // Update position.
    circle.x += circle.speedX;
    circle.y += circle.speedY;

    // Wrap around edges using radius for better accuracy.
    const radius = circle.size / 2;
    if (circle.x < 0 - radius) {
      circle.x = width + radius;
    }

    if (circle.x > width + radius) {
      circle.x = -radius;
    }

    if (circle.y < 0 - radius) {
      circle.y = height + radius;
    }

    if (circle.y > height + radius) {
      circle.y = -radius;
    }
  });
}

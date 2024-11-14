const hearts = [];
const amount = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < amount; i++) {
    hearts.push({
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

  hearts.forEach((heart) => {
    const r = map(sin(heart.colorOffset + frameCount * 0.01), -1, 1, 100, 255);
    const g = map(cos(heart.colorOffset + frameCount * 0.02), -1, 1, 100, 255);
    const b = map(sin(heart.colorOffset + frameCount * 0.03), -1, 1, 100, 255);
    fill(r, g, b, 150);
    drawHeart(heart.x, heart.y, heart.size);

    // Update position.
    heart.x += heart.speedX;
    heart.y += heart.speedY;

    // Wrap around edges using radius for better accuracy.
    const radius = heart.size / 2;
    if (heart.x < 0 - radius) {
      heart.x = width + radius;
    }

    if (heart.x > width + radius) {
      heart.x = -radius;
    }

    if (heart.y < 0 - radius) {
      heart.y = height + radius;
    }

    if (heart.y > height + radius) {
      heart.y = -radius;
    }
  });
}

function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

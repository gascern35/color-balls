class Ball {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.col = color(100, 200);
    this.vel = p5.Vector.random2D().mult(2);
    this.mag = this.vel.mag();
    this.dir = this.vel.heading();
  }
  changeColor() {
    this.col = color(random(0, 255), random(0,255), random(0,255))
  }
  hitWall() {
    if (this.pos.x < 0 + this.r || this.pos.x > width - this.r) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 + this.r || this.pos.y > height - this.r) {
      this.vel.y *= -1;
    }
  }
  show() {
    stroke(30);
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
  update() {
    this.pos.add(this.vel);
  }
  intersects(other) {
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  reverse(other) {
    other.vel = p5.Vector.fromAngle(this.dir, this.mag);
    this.vel = p5.Vector.fromAngle(other.dir, other.mag);
  }
}

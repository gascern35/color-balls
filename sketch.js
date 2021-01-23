var birds = [];
//var r = random(5, 15j);
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    birds[i] = new Ball(random(100, 300), random(100, 300), random(10, 15));
  }
}
function draw() {
  background(130);
  for (b of birds) {
    b.show();
    b.update();
    b.hitWall();
    for (other of birds) {
      if (b !== other && b.intersects(other)) {
        //b.reverse(other);
        b.changeColor();
      }
    }
  }
}

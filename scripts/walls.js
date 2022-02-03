class Walls {
  constructor(ctx) {
    this.ctx = ctx;
    this.allWalls = [];
    this.width = 50;
    this.height = 50;
  }

  addRandomWalls() {
    for (let i = 0; i < 10; i++) {
      this.allWalls.push({
        x: Math.floor(Math.random() * this.ctx.canvas.width) - this.width,
        y: Math.floor(Math.random() * this.ctx.canvas.height) - this.height,
        width: this.width,
        height: this.height,
      });
    }
  }

  draw() {
    this.allWalls.forEach((item) => {
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(item.x, item.y, item.width, item.height);
    });
  }
}

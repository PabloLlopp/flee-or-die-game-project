class Flashlight {
  constructor(ctx) {
    this.ctx = ctx;
    this.light = [];
    this.width = 10;
    this.height = 10;
    this.rotation = 0;
    this.moveX = 10;
    this.moveY = 10;
    this.lightOn = new Image();
    this.lightOn.src = "images/flashlight-on.png";
    this.lightOff = new Image();
    this.lightOff.src = "images/flashlight-off.png";
    this.player = player;
  }

  turnOnLight() {
    if (this.light.length < 1) {
      this.light.push({
        x: this.player.x,
        y: this.player.y,
        width: this.width,
        height: this.height,
      });
    }
    return true;
  }

  draw() {
    if (this.turnOnLight) {
      this.ctx.save();
      this.ctx.translate(this.light[0].x, this.light[0].y);
      this.ctx.rotate(this.rotation);
      this.ctx.drawImage(
        this.lightOn,
        -this.lightOn.width / 2,
        -this.lightOn.height + 20
      );
      this.ctx.restore();
    } 
  }

  

  move() {
    if (moveUp) if (this.light[0].y > 10) this.light[0].y -= this.moveY;
    if (moveDown)
      if (this.light[0].y + this.height < canvas.height)
        this.light[0].y += this.moveY;

    if (moveLeft) if (this.light[0].x > 10) this.light[0].x -= this.moveX;

    if (moveRight)
      if (this.light[0].x + this.width < canvas.width)
        this.light[0].x = this.light[0].x + this.moveX;

    this.lightRotation();
  }

  lightRotation() {
    this.rotation = Math.atan2(
      -(this.player.x - mouse.x),
      this.player.y - mouse.y
    );
  }

  left() {
    return this.light[0].x;
  }

  right() {
    return this.light[0].x + this.width + 43 * this.rotation;
  }

  top() {
    return this.light[0].y;
  }

  bottom() {
    return this.light[0].y + this.height + 43 * this.rotation;
  }
}

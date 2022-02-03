class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 249 - this.width;
    this.y = 249 - this.height;    
    this.oldX = 0;
    this.oldY = 0;
    this.height = 20;
    this.width = 20;
    this.moveX = 10;
    this.moveY = 10;
    this.playerSprite = new Image();
    this.playerSprite.src = "";
    this.rotation = 0;
    this.image = new Image();
    this.image.src = "images/player.png";
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.rotation);
    this.ctx.drawImage(
      this.image,
      -this.image.width / 2,
      -this.image.height / 2
    );
    this.ctx.restore();
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  controlMotion() {
    if (game.frameNumber % 180 === 0) {
      if (this.oldX === this.x && this.oldY === this.y) {
        game.stop();
        this.ctx.save();
        this.ctx.fillStyle = "red";
        this.ctx.font = " bold 20px Supermercado One";
        this.ctx.fillText(`You need to keep moving`, 130, 250);
      } else {
        this.oldX = this.x;
        this.oldY = this.y;
      }
    }
  }

  move() {
    if (moveUp) 
      if (this.y > 10) this.y -= this.moveY;
    if (moveDown)
      if (this.y + this.height < canvas.height) this.y += this.moveY;

    if (moveLeft) 
      if (this.x > 10) this.x -= this.moveX;

    if (moveRight)
      if (this.x + this.width < canvas.width) this.x = this.x + this.moveX;

    this.playerRotation();
  }

  playerRotation() {
    this.rotation = Math.atan2(-(this.x - mouse.x), -(mouse.y - this.y));
  }
}

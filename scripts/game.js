class Game {
  constructor(ctx, player, flashlight, enemies, walls) {
    this.ctx = ctx;
    this.player = player;
    this.flashlight = flashlight;
    this.enemies = enemies;
    this.walls = walls;
    this.frameNumber = null;
    this.score = 0;
    this.sum = 0;
    this.playerMotion = [];
  }

  start() {
    this.init();
    this.play();
    audio.play();
    audio.currentTime = 1.5;
  }

  init() {
    this.frameNumber = 0;
    this.enemies.enemyArmy = [];
    this.flashlight.light = [];
    this.player.x = 249 - this.player.width;
    this.player.y = 249 - this.player.height;
    this.score = 0;
    this.flashlight.x = this.player.x;
    this.flashlight.y = this.player.y;
    this.flashlight.rotation = 0;

    // this.walls.addRandomWalls();
  }

  play() {
    if (this.frameNumber !== null) {
      requestAnimationFrame(this.play.bind(this));
      this.frameNumber += 1;
      this.score += this.frameNumber;
      this.checkCollision();
      this.checkLightCollision();
      this.player.controlMotion();
      this.move();
      this.draw();
      this.drawScore();  
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // this.walls.draw()
    this.player.draw();
    if (this.flashlight.turnOnLight()) {
        this.flashlight.draw();
      }
    this.enemies.generateEnemyPeriodically(this.frameNumber);
  }

  drawScore() {
    this.score = Math.floor(this.score / 5);
    this.ctx.save();
    this.ctx.fillStyle = "white";
    this.ctx.font = " bold 18px Supermercado One";
    this.ctx.fillText(`Score: ${this.score} pts`, 20, 20);
  }

  move() {
    this.player.move(this.key);
    this.flashlight.move(this.key);
  }

  checkCollision() {
    this.enemies.enemyArmy.forEach((enemy) => {
      let crash = !(
        this.player.bottom() < enemy.top() ||
        this.player.top() > enemy.bottom() ||
        this.player.right() < enemy.left() ||
        this.player.left() > enemy.right()
      );
      if (crash) this.stop();
    });
  }

  checkLightCollision() {
    this.enemies.enemyArmy.forEach((enemy) => {
      let enlighted = !(
        this.flashlight.bottom() < enemy.top() ||
        this.flashlight.top() > enemy.bottom() ||
        this.flashlight.right() < enemy.left() ||
        this.flashlight.left() > enemy.right()
      );
      if (enlighted) this.freeze();
      else {
        enemy.move();
      }
    });
  }

  freeze() {
    this.enemies.moveX = 0;
    this.enemies.moveY = 0;
  }

  stop() {
    this.frameNumber = null;
    cancelAnimationFrame(this.frameNumber);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    canvas.classList.remove("playing");
    canvas.classList.add("gameOver");
    restartBtn.classList.add("tryAgain");
    restartBtn.classList.remove("hidden");
    audio.pause();
    lose.play();
    return true;
  }
  
}

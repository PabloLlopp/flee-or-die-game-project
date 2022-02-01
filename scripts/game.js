class Game {
    constructor(ctx, player, flashlight, enemies, walls){
        this.ctx = ctx;
        this.player = player;
        this.flashlight = flashlight;
        this.enemies = enemies;
        this.walls = walls;
        this.frameNumber = null;
        this.enemyArmy = [];
        this.key = null;
        this.score = 0;
    }

    start(){
        this.init();
        this.play();
        audio.play();
        audio.currentTime = 1.5
    }

    init(){
        this.frameNumber = 0;
        this.enemyArmy = [];
        this.allWalls = [];
        player.x = 249 - player.width;
        player.y = 249 - player.height;
        this.score = 0;
        walls.allWalls = [];
        this.walls.addRandomWalls();
        
    }

    play(){
        if (this.frameNumber !== null){
            this.frameNumber += 1;
            this.checkCollision();
            this.draw();
            this.drawScore();
            requestAnimationFrame(this.play.bind(this));
            this.move();
        }
    }

    draw(){
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        walls.draw()
        player.draw();
        enemies.randomEnemy(this.frameNumber);
    }

    checkCollision(){
        this.enemyArmy.forEach(enemy =>{
            let crash = !(player.bottom() < enemy.top() || player.top() > enemy.bottom() || player.right() < enemy.left() || player.left() > enemy.right())
            if (crash) this.stop();
            } 
        ) 
    }

    drawScore() {
        this.score = Math.floor(this.frameNumber / 5)
        this.ctx.save();
        this.ctx.fillStyle = "white";
        this.ctx.font = " bold 18px sans-serif";
        this.ctx.fillText(`Score: ${this.score} pts`, 20, 20);
      }

    stop(){
        this.frameNumber = null;
        cancelAnimationFrame(this.frameNumber);
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        canvas.classList.remove("playing");
        canvas.classList.add("gameOver");
        restartBtn.classList.add("tryAgain");
        restartBtn.classList.remove("hidden");
        audio.pause()
        lose.play()
        return true;
    }

    onKey(event){
        if (event) this.key = event.key
        else this.key = null
    }

    move(){
        this.player.move(this.key);
    }
  
}
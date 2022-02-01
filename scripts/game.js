class Game {
    constructor(ctx, player, flashlight, enemies, walls){
        this.ctx = ctx;
        this.player = player;
        this.flashlight = flashlight;
        this.enemies = enemies;
        this.walls = walls;
        this.frameNumber = null;
        this.enemyArmy = [];
    }

    start(){
        this.init();
        this.play();
    }

    init(){
        this.frameNumber = 0;
        this.enemyArmy = [];
        player.x = 249 - player.width;
        player.y = 249 - player.height;
    }

    play(){
        if (this.frameNumber !== null){
            this.frameNumber += 1;
            this.checkCollision();
            this.draw();
            requestAnimationFrame(this.play.bind(this));
        }
    }

    draw(){
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        player.draw();
        enemies.randomEnemy(this.frameNumber);
        this.walls.draw();
    }

    checkCollision(){
        this.enemyArmy.forEach(enemy =>{
            let crash = !(player.bottom() < enemy.top() || player.top() > enemy.bottom() || player.right() < enemy.left() || player.left() > enemy.right())
            if (crash) this.stop();
            } 
        ) 
    }

    stop(){
        this.frameNumber = null;
        cancelAnimationFrame(this.frameNumber);
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        canvas.classList.remove("playing");
        canvas.classList.add("gameOver");
        restartBtn.classList.add("tryAgain");
        restartBtn.classList.remove("hidden")
        return true;
    }
  
}
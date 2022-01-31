class Game {
    constructor(ctx, player, flashlight, enemies, walls){
        this.ctx = ctx;
        this.player = player;
        this.flashlight = flashlight;
        this.enemies = enemies;
        this.walls = walls;
        this.frameNumber = null;
    }

    start(){
        this.init();
        this.play();
    }

    init(){
        this.frameNumber = 0;
    }

    play(){
        this.frameNumber += 1;
        this.movePlayer();
        this.moveEnemies();
        this.checkCollision();
        this.draw();
        requestAnimationFrame(this.play.bind(this));
    }

    movePlayer(){
            
    }

    moveEnemies(){
        this.enemies.move(this.frameNumber);
    }

    draw(){
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.player.draw();
        this.enemies.draw();
        this.walls.draw();
    }

    stop(){
        cancelAnimationFrame(this.frameNumber);
        this.frameNumber = null;
    }

    gameOver(){
        this.stop();
    }

    checkCollision(){
        if (player.x === enemies.x){
            this.gameOver();

        }
    }

}
class Game {
    constructor(ctx, player, flashlight, enemies, walls){
        this.ctx = ctx;
        this.player = player;
        this.flashlight = flashlight;
        this.enemies = enemies;
        this.walls = walls;
        this.frameNumber = null;
        this.key = null;
        this.mouse = 
        this.score = 0;
        this.sum = 0
        this.playerMotion = [];
    }

    start(){
        this.init();
        this.play();
        audio.play();
        audio.currentTime = 1.5;
    }

    init(){
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

    play(){
        if (this.frameNumber !== null){
            this.frameNumber += 1;
            this.score += this.frameNumber;
            this.checkCollision();
            this.draw();
            this.drawScore();
            requestAnimationFrame(this.play.bind(this));
            this.checkLightCollision();
            this.player.controlMotion();
            if (this.frameNumber % 180 === 0) this.checkIfPlayerMoves();
            this.move();
        }
    }

    draw(){
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
       // this.walls.draw()
        this.player.draw();
        this.enemies.randomEnemy(this.frameNumber);
        if (this.flashlight.turnOnLight()){
            this.flashlight.draw()
        }
    }

    checkIfPlayerMoves(){/*
        if (this.playerMotion[0].x === this.playerMotion[1].x && this.playerMotion[0].y === this.playerMotion[1].y){
            this.stop()
        } else this.playerMotion[0].shift()*/
    }

    checkCollision(){
        this.enemies.enemyArmy.forEach(enemy =>{
            let crash = !(this.player.bottom() < enemy.top() || this.player.top() > enemy.bottom() || this.player.right() < enemy.left() || this.player.left() > enemy.right())
            if (crash) this.stop();
            } 
        ) 
    }
    
    checkLightCollision(){
        this.enemies.enemyArmy.forEach(enemy =>{
            let enlighted = !(this.flashlight.bottom() < enemy.top() || this.flashlight.top() > enemy.bottom() || this.flashlight.right() < enemy.left() || this.flashlight.left() > enemy.right())
            if (enlighted) {this.freeze() 
               // console.log("NO MOVE")
            }
            else {enemy.move()}
        }
             
        )
    }

    freeze(){
        
        setInterval(() => {
            this.enemies.moveX = 0
            this.enemies.moveY = 0
           // console.log("FREEZE", this.enemies.x, this.enemies.y)
        }, 10 * 1000);
    }

    drawScore() {
        this.score = Math.floor(this.score / 5)
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
        this.flashlight.move(this.key);
    }
  
}
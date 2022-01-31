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
    }

    play(){
        if (this.checkCollision()){
            canvas.classList.remove("playing");
            canvas.classList.add("gameOver");
            btn.classList.add("tryAgain");
            btn.classList.remove("hidden")
            return};
        this.frameNumber += 1;
        this.moveEnemies();
        this.draw();
        this.randomEnemy(this.frameNumber);
        requestAnimationFrame(this.play.bind(this));
        console.log(this.frameNumber)
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
        
        return;
    }

    checkCollision(){
        let crash = !(player.bottom() < enemies.top() || player.top() > enemies.bottom() || player.right() < enemies.left() || player.left() > enemies.right())
        return crash;
    } 

    randomEnemy(frameNumber){
        if (frameNumber % 120 === 0){
            this.enemyArmy.push(new Enemies(ctx))
        };
        for (let i = 0; i < this.enemyArmy.length; i++){
            this.enemyArmy[i].draw()
            this.enemyArmy[i].move()
            this.enemyArmy[i].top()
            this.enemyArmy[i].left()
            this.enemyArmy[i].bottom()
            this.enemyArmy[i].right()
        
        console.log(this.enemyArmy)
        }
    }
}
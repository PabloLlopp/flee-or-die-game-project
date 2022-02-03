class Enemies {
    constructor(ctx){
        this.ctx = ctx;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.enemyArmy = [];
        this.height = 30;
        this.width = 30;
        this.moveX = Math.random() * 4;
        this.moveY = Math.random() * 4;
        this.image = new Image ();
        this.image.src = 'images/enemies.png'
    }

   randomEnemy(frameNumber){
       if (frameNumber === 1) this.enemyArmy.push(new Enemies(ctx))
        if (frameNumber % 180 === 0){
            this.enemyArmy.push(new Enemies(ctx))
        };
        for (let i = 0; i < this.enemyArmy.length; i++){
            this.enemyArmy[i].createEnemies();
        }
    }

    createEnemies(){
       // this.move();
        this.draw();
        this.left();
        this.right();
        this.top();
        this.bottom();
        console.log("SPEED:",this.moveX, "MOVE: ", this.x)
    }

    move(){  
        if (this.x > player.x){
            this.x -= this.moveX }
            
        if (this.x < player.x){
            this.x += this.moveX }

        if (this.y < player.y){
            this.y += this.moveY}

        if (this.y > player.y){    
            this.y -= this.moveY }
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
    

    draw(){
        this.ctx.fillStyle = 'red'
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    
}
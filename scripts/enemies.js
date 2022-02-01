class Enemies {
    constructor(ctx){
        this.ctx = ctx;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.height = 15;
        this.width = 15;
        this.moveX = 1;
        this.moveY = 1;
    }

   randomEnemy(frameNumber){
       if (frameNumber === 1) game.enemyArmy.push(new Enemies(ctx))
        if (frameNumber % 180 === 0){
            game.enemyArmy.push(new Enemies(ctx))
        };
        for (let i = 0; i < game.enemyArmy.length; i++){
            game.enemyArmy[i].createEnemies();
        }
    }

    createEnemies(){
        this.move();
        this.draw();
        this.left();
        this.right();
        this.top();
        this.bottom();
    }

    move(){  
        if (this.x > player.x){
            this.x -= 1 }
            
        if (this.x < player.x){
            this.x += 1 }

        if (this.y < player.y){
            this.y += 1}

        if (this.y > player.y){    
            this.y -= 1 }
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
        this.ctx.fillRect(this.x, this.y, this.width, this.height);  
    }

    
}
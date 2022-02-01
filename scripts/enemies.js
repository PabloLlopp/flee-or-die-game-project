class Enemies {
    constructor(ctx){
        this.ctx = ctx;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.enemyArmy = [];
        this.height = 15;
        this.width = 15;
        this.moveX = 1;
        this.moveY = 1;
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
        this.move();
        this.draw();
        this.left();
        this.right();
        this.top();
        this.bottom();
    }

    move(){  
        if (this.x > player.x){
            this.x -= 4 }
            
        if (this.x < player.x){
            this.x += 4 }

        if (this.y < player.y){
            this.y += 4}

        if (this.y > player.y){    
            this.y -= 4 }
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
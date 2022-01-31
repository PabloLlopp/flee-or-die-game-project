class Enemies {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 400;
        this.y = 400;
        this.height = 30;
        this.width = 30;
        this.moveX = 1;
        this.moveY = 1;
    }

    create(){
        this.move();
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
class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
        this.height = 20;
        this.width = 20;
        this.moveX = 10;
        this.moveY = 10;
        
    }

    draw(){
        this.ctx.fillStyle = 'yellow'
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        
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

    move(key){
        switch (key) {
            case 'w':
                if (this.y > 0)
                    this.y -= this.moveY
                break;
            case 's':
                if (this.y + this.height < canvas.height - 10) 
                    this.y += this.moveY
                break;
            case 'a':
                if (this.x > 0)
                    this.x -= this.moveX
                break;
             case 'd':
                if (this.x + this.width < canvas.width - 10)
                    this.x = this.x + this.moveX
                break;
        }
    }

}
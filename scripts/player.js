class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 249 - this.width;
        this.y = 249 - this.height;
        this.height = 20;
        this.width = 20;
        this.moveX = 10;
        this.moveY = 10;
        this.playerSprite = new Image();
        this.playerSprite.src = '';
        this.rotation = 0;
        this.image = new Image ();
        this.image.src = 'images/player.png'
        this.oldX = 0;
        this.oldY = 0;
    }

    draw(){ 
        this.ctx.save();
        this.ctx.translate(
            this.x, this.y
        )
        this.ctx.rotate(this.rotation)
        this.ctx.drawImage(this.image, -this.image.width / 2, -this.image.height / 2)
       // this.ctx.fillStyle = 'yellow'
        //this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.restore()

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

    controlMotion(){
        if (game.frameNumber % 180 === 0){
            if (this.oldX === this.x && this.oldY === this.y){
                game.stop();
                this.ctx.save();
            this.ctx.fillStyle = "red";
            this.ctx.font = " bold 20px Supermercado One";
            this.ctx.fillText(`You need to keep moving`, 110, 250);
            }
            else {
                this.oldX = this.x; 
                this.oldY = this.y;
            }            
        }
    }

    move(key){
        this.playerRotation();

        switch (key) {
            case 'w':
                if (this.y > 10)
                    this.y -= this.moveY
                break;
            case 's':
                if (this.y + this.height < canvas.height) 
                    this.y += this.moveY
                break;
            case 'a':
                if (this.x > 10)
                    this.x -= this.moveX
                break;
             case 'd':
                if (this.x + this.width < canvas.width)
                    this.x = this.x + this.moveX
                break;
        }
    }

    playerRotation(){
        this.rotation = Math.atan2(-(this.x - mouse.x), -(mouse.y - this.y))
    }
    
}
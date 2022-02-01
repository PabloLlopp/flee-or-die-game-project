class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 249 - this.width;
        this.y = 249 - this.height;
        this.height = 20;
        this.width = 20;
        this.moveX = 10;
        this.moveY = 10;
        this.rotNum = 1;
        this.playerSprite = new Image();
        this.playerSprite.src = "../images/player.png";
        this.rotation = 0;
        this.image = new Image ();
        this.image.src = '../images/favicon.png'
    }

    playerRotation(){
        this.rotation = Math.atan2(-(this.x - mouse.x), -(mouse.y - this.y))
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

    

}
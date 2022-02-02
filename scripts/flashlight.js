class Flashlight {
    constructor(ctx){
        this.ctx = ctx;
        this.light = [];
        this.width = 10;
        this.height = 30;
        this.player = player;
        this.rotation = 0;
        this.moveX = 10;
        this.moveY = 10;
        this.lightOn = new Image();
        this.lightOn.src = '../images/flashlight-on.png'
        this.lightOff = new Image();
        this.lightOff.src = '../images/flashlight-off.png'
    }

    turnOnLight(){
        if (this.light.length < 1){
        this.light.push(
            {
            x: this.player.x ,
            y: this.player.y ,
            width: this.width,
            height: this.height
            }
        )}
        return true
    }

    draw(){
        
        if (this.turnOnLight){
            this.ctx.save();
            this.ctx.translate(
                this.light[0].x, this.light[0].y
            )
            this.ctx.rotate(this.rotation)
            this.ctx.drawImage(this.lightOn, -this.lightOn.width / 2 , -this.lightOn.height + 20 )
            this.ctx.restore();
        } else {
            this.ctx.save();
            this.ctx.translate(
                this.light[0].x, this.light[0].y
            )
            this.ctx.rotate(this.rotation)
            this.ctx.drawImage(this.lightOff, -this.lightOff.width / 2 , -this.lightOff.height + 20 )
            this.ctx.restore();
        }
    }

    lightRotation(){
        this.rotation = Math.atan2(-(this.player.x - mouse.x), ( this.player.y - mouse.y))
        console.log(this.rotation)
    }

    move(key){
        this.lightRotation();
        switch (key) {
            case 'w':
                if (this.light[0].y > 10)
                    this.light[0].y -= this.moveY
                break;
            case 's':
                if (this.light[0].y + this.height < canvas.height) 
                    this.light[0].y += this.moveY
                break;
            case 'a':
                if (this.light[0].x > 10)
                    this.light[0].x -= this.moveX
                break;
             case 'd':
                if (this.light[0].x + this.width < canvas.width)
                    this.light[0].x = this.light[0].x + this.moveX
                break;
        }
    }

    left() {
        return this.light[0].x ;
    }

    right() {
        return this.light[0].x + this.width + 50 * this.rotation;
    }

    top() {
        return this.light[0].y;
    }

    bottom() {
        return this.light[0].y + this.height + 50*this.rotation;
    }

}
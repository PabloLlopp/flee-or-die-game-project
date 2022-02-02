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
        this.image = new Image();
        this.image.src = '../images/flashlight4.png'
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
        console.log("X: ",this.light[0].x)
        console.log("Y: ",this.light[0].y)
        return true
    /*
        this.draw();
        console.log(this.light)
        console.log("PX: ", player.x)*/
    }

    draw(){
        this.ctx.save();
        this.ctx.translate(
            this.light[0].x, this.light[0].y
        )
        this.ctx.rotate(this.rotation)
        this.ctx.drawImage(this.image, -this.image.width / 2 , -this.image.height + 20 )
        /*
        for (let i = 0; i < this.light.length; i++){
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(this.light[i].x, this.light[i].y, this.light[i].width, this.light[i].height)
        }*/
        this.ctx.restore();
    }

    lightRotation(){
        this.rotation = Math.atan2(-(this.player.x - mouse.x), ( this.player.y - mouse.y))
    }

    move(key){
        this.lightRotation();
        switch (key) {
            case 'w':
                if (this.light[0].y > 10)
                    this.light[0].y -= this.moveY
                    console.log(this.light[0].y)
                break;
            case 's':
                if (this.light[0].y + this.height < canvas.height) 
                    this.light[0].y += this.moveY
                break;
            case 'a':
                if (this.light[0].x > 10)
                    this.light[0].x -= this.moveX
                    console.log(this.light[0].x)
                break;
             case 'd':
                if (this.light[0].x + this.width < canvas.width)
                    this.light[0].x = this.light[0].x + this.moveX
                break;
        }
        
    }

}
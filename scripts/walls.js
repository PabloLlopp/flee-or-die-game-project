class Walls {
    constructor(ctx){
        this.ctx = ctx;
        this.allWalls =[];
        this.width = 50
        this.height = 50
    
    }

    addRandomWalls(){
        //console.log("create wall", Math.random() * this.ctx.canvas.width,
       // Math.random() * this.ctx.canvas.height)
        for (let i = 0; i < 10; i++){
            this.allWalls.push(
                {
                x: Math.floor(Math.random() * this.ctx.canvas.width) - this.width,
                y: Math.floor(Math.random() * this.ctx.canvas.height) - this.height,
                width: this.width,
                height: this.height
                }
            )
        } 
        console.log(this.allWalls[1].x)
        console.log(this.allWalls[2].x)
        console.log(this.allWalls[3].x)
        console.log(this.allWalls[4].x)
        console.log(this.allWalls[5].x)
        console.log(this.allWalls[6].x)
        console.log(this.allWalls[7].x)
        console.log(this.allWalls[8].x)
        console.log(this.allWalls[9].x)
        console.log(this.allWalls[0].x)
            
     }

    draw(){
        this.allWalls.forEach(item=>{
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(item.x, item.y, item.width, item.height)
        })       
    }

}
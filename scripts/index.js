console.log('JS loaded')

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
const btn = document.querySelector("button");

canvas.height = 500
canvas.width = 500

//---------- AUDIO ----------
/*
const audio = new Audio('../music/tune.mp3')
audio.play()
*/

// ---------- CLASSES ----------

const player = new Player(ctx);
const enemies = new Enemies(ctx);
const flashlight = new Flashlight(ctx)
const walls = new Walls(ctx)
const game = new Game(ctx, player, flashlight, enemies, walls);

// ---------- START GAME ----------

const startBtn = document.getElementById("start-btn")
const insBtn = document.getElementById("ins-btn")
startBtn.onclick = ()=> {
    canvas.classList.remove("start");
    canvas.classList.add("playing");
    startBtn.remove();
    insBtn.remove();
    game.start();
}

btn.onclick = ()=> {
    canvas.classList.remove("gameOver");
    canvas.classList.add("playing");
    btn.remove();
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.start();
}

 
const move = document.addEventListener(
    'keydown',
    (event)=>{
        switch (event.key) {
            case 'w':
                if (player.y > 0)
                    player.y -= player.moveY
                break;
            case 's':
                if (player.y + player.height < canvas.height) 
                    player.y += player.moveY
                break;
            case 'a':
                if (player.x > 0)
                    player.x -= player.moveX
                break;
             case 'd':
                if (player.x + player.width < canvas.width)
                    player.x = player.x + player.moveX
                break;
        }
    })



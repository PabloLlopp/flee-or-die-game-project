console.log('JS loaded')

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
const restartBtn = document.querySelector("button");

canvas.height = 500
canvas.width = 500

//---------- MUSIC ----------

const audio = new Audio('../music/tune.mp3')
audio.play()

const lose = new Audio('../music/lose.flac')


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

restartBtn.onclick = ()=> {
    canvas.classList.remove("gameOver");
    canvas.classList.add("playing");
    //restartBtn.remove();
    restartBtn.classList.add("hidden");
    restartBtn.classList.remove("tryAgain")
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
   // location.reload()
    game.start();
}

// ---------- PLAYER MOVEMENT ----------

let mouse = {
    x: 0,
    y: 0
}

let test1 = canvas.getBoundingClientRect().left // review this in MOZILLA
let test2 = canvas.getBoundingClientRect().top


document.addEventListener('keydown', (e)=>{game.onKey(e)})
document.addEventListener('keyup', ()=>{game.onKey(null)})
canvas.addEventListener('mousemove', (e)=>{
    mouse.x = e.clientX - test1;
    mouse.y = e.clientY - test2;
})
const click = document.addEventListener('click', ()=>{flashlight.turnOnLight()})




/*
const move = document.addEventListener(
    'keydown',
    (event)=>{
        
    })

*/

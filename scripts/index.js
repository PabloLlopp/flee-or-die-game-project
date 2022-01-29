window.onload = () =>{
    
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

canvas.height = 500
canvas.width = 500

const audio = new Audio('../music/tune.mp3')
    audio.src = '../music/tune.mp3'
    audio.type = 'audio/wav'
    audio.play()
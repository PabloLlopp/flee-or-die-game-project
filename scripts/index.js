window.onload = () =>{
    const audio = new Audio()
    audio.src = '../music/tune.mp3'
    audio.type = 'audio/wav'
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(function () {
            console.log('Playing....');
        }).catch(function (error) {
            console.log('Failed to play....' + error);
        });
    }
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

canvas.height = 500
canvas.width = 500


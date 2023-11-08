const keySongs = [
    {
        key: 1,
        song: '11',
        down: false
    },
    {
        key: 2,
        song: '22',
        down: false
    },
    {
        key: 3,
        song: '33',
        down: false
    },
    {
        key: 4,
        song: '44',
        down: false
    },
    {
        key: 5,
        song: '55',
        down: false
    },
    {
        key: 6,
        song: '66',
        down: false
    },
    {
        key: 7,
        song: '77',
        down: false
    },
    {
        key: 8,
        song: '88',
        down: false
    },
    {
        key: 9,
        song: '99',
        down: false
    }
]

function tocaSom(audioElement) {
    audioElement.currentTime = 0
    audioElement.play()
}

keySongs.forEach(song => {
    let keyElement = document.querySelector(`.tecla_${song.song}`)

    song.keyElement = keyElement
    song.audioElement = document.getElementById(`som_tecla_${song.song}`)

    keyElement.addEventListener('click', () => {
        tocaSom(song.audioElement)
    })   

})

document.onkeydown = (event) => {
    const key = event.key
    const keySong =  keySongs.find(keySong => keySong.key == key)
    
    if(keySong) {

        keySong.keyElement.classList.add('ativa')

        if(!keySong.down) {
            tocaSom(keySong.audioElement)
        }
    
        keySong.down = true

    }

}

document.onkeyup = (event) => {
    const key = event.key
    const keySong =  keySongs.find(keySong => keySong.key == key)
    
    if(keySong) {
    
        keySong.keyElement.classList.remove('ativa')
        keySong.down = false

    }

}

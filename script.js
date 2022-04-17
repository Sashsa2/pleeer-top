const data = [
];
const text = document.querySelector("h1")
const audio  = new Audio()
const player = document.querySelector('#player')
let status = false
const playStop = document.querySelector('#stop-play')


playStop.onclick  = function() {
    status = !status
    if (status) {
        playStop.innerHTML = "stop"
        audio.play()
    }
    else {
        playStop.innerHTML = "start"
        audio.pause()
    }
}
const search = document.querySelector("#btnSearch")
const inpSearch = document.querySelector("#search")
inpSearch.addEventListener('keydown', srch)
function srch() {
    var searchValue = inpSearch.value
    let out = []   
    for (i = 0; i < data.length; i++) {
        if (data[i].song.toLowerCase().includes(searchValue.toLowerCase()) || 
        data[i].song.toLowerCase().includes(searchValue.toLowerCase())) {
            out.push(data[i])
        }
    }
    render(out)
}
const content = document.querySelector("section")
const blocked = document.querySelector("#blocked")
const open = document.querySelector("#open").onclick = function() {
    blocked.style.display = "flex"
}
const close = document.querySelector("#close").onclick = function() {
    blocked.style.display = "none"
}
const art = document.getElementById("art")
const song = document.getElementById("song")
const file = document.getElementById("file")
const btn = document.getElementById("btn").onclick = function() {
    var img = prompt("URL картинки")
    var inpArt = art.value
    var inpSong = song.value
    var inpFile = file.files[0].name
    var randId = Math.random() * 10000;
    var mus = new Music(img,inpArt,inpSong,inpFile, randId)
    data.push(mus)
    render(data)
}
class Music {
    constructor(img, artist, song, src, id) {
        this.img = img,
        this.artist = artist,
        this.song = song,
        this.src = src,
        this.id = id
    }
}
var m = new Music(
    // "https://i.scdn.co/image/ab6761610000e5eb2a7d76bd32fbf2cebf0bc2ec",
    // "ssshhhiiittt!",
    // "Домой",
    // "./music/название.mp3",
    // 1
    "https://avatars.mds.yandex.net/i?id=ab0d7b80391e34924bd611974b80cce5-5232046-images-thumbs&n=13", 
    "Газманов",
    "Вперед Россия",
    "www.mp3",
    Math.random() * 100
    )
data.push(m)
var m1 = new Music(
    "https://avatars.mds.yandex.net/i?id=ac5b9e10e6ed899ad569c22540248466-5499599-images-thumbs&n=13",
    "Евреи",
    "хава нагила",
    "111.mp3",
       Math.random() * 100
)
data.push(m1)
var m2 = new Music(
    "https://i.warosu.org/data/fa/img/0129/27/1511302576655.jpg",
    "Тоже евреи",
    "Диалоги тет-а-тет",
    "000.mp3",
       Math.random() * 100
)
data.push(m2)
function play(id) {
    for (i = 0; i < data.length; i++) {
        if (id == data[i].id) {
            audio.src = data[i].src
            text.innerHTML = `${data[i]. artist} - ${data[i].song}`
            player.style.background = `url(${data[i].img}) no-repeat center `
            player.style.backgroundSize = 'cover'
        }
    }    
}
function render(arr) {
        content.innerHTML = ``
        for (i = 0; i < arr.length; i++) {
            content.innerHTML += `
        <div class="elem" onclick=play(${arr[i].id})>
            <img width = "50px" height= "50px" src=${arr[i].img} alt="">
            <div class = "text">
            <h3>${arr[i].artist}</h3>
            <h4>${arr[i].song}</h4>
            </div>
        </div>
            `
        }
}
render(data)
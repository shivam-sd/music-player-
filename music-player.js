var songArr = [
    { songname: "Aam jahe mundf", Image: "./images/aamkahe.webp", url: "./songs/aamjahe.mp3" },

    { songname: "jale 2", Image: "./images/jale2.jpeg", url: "./songs/jale2.mp3" },

    { songname: "pehle bhi mai tumse mila", Image: "./images/pehlebhi.jpg", url: "./songs/pehlebhi.mp3" },

    { songname: "vasste", Image: "./images/vaaste.jpg", url: "./songs/vaaste.mp3" },

    { songname: "Baras Baras", Image: "./images1/barasbaras.jpg", url: "./songs1/Baras Baras.mp3" },

    { songname: "Bekhayali- mai bhi tera", Image: "./images1/bekhayali.jpg", url: "./songs1/Bekhayali.mp3" },

    { songname: "Baras Baras", Image: "./images1/barasbaras.jpg", url: "./songs1/Baras Baras.mp3" },

    { songname: "Bimar Dil", Image: "./images1/bimardil.jpg", url: "./songs1/Bimar Dil.mp3" },


    { songname: "Garmi Song ", Image: "./images1/garmi.jpeg", url: "./songs1/Garmi.mp3" },

    { songname: "Goli Mar de", Image: "./images1/golimarse.jpg", url: "./songs1/Goli Maar De.mp3" },

    { songname: "Ik Mulaquat", Image: "./images1/ikmulakat.jpg", url: "./songs1/Ik Mulaqaat.mp3" },

    { songname: "Kamal hai", Image: "./images1/kamal.jpeg", url: "./songs1/Kamaal.mp3" },

    { songname: "Laare", Image: "./images1/laare.jpeg", url: "./songs1/Laare.mp3" },

    { songname: "Lambo", Image: "./images1/lambo.jpg", url: "./songs1/Lambo.mp3" },

    { songname: "Lara Lara Lori", Image: "./images1/laralaralori.jpeg", url: "./songs1/Lala Lala Lori.mp3" },

    { songname: "Leja re", Image: "./images1/lejare.jpg", url: "./songs1/Leja Re.mp3" },

    { songname: "Ludo", Image: "./images1/ludo.jpeg", url: "./songs1/Ludo.mp3" },

    { songname: "Maana Dil", Image: "./images1/maanadil.jpg", url: "./songs1/Maana Dil.mp3" },

    { songname: "Mainu Rang lagya", Image: "./images1/mainuranglagya.jpeg", url: "./songs1/Mainu Rang Lageya.mp3" },

    { songname: "Nachle na", Image: "./images1/nachlena.jpeg", url: "./songs1/Nachle Na.mp3" },

    { songname: "Ye Tune Kya kiya", Image: "./images1/yetunekyakiya.jpeg", url: "./songs1/ye tune kya kiya.mp3" },

];

let audio = new Audio();
let selectedsong = 0;


function MainFunction() {
    var clutter = "";
    songArr.forEach((ele, idnx) => {
        clutter = clutter + ` 
    <div class="song-card" id=${idnx}>
        <div class="part1">
            <img src="${ele.Image}" width="100px" alt="">
            <h3>${ele.songname}</h3>
        </div>
        <h4>3:56</h4>
    </div>`;
    });

    document.querySelector(".all-songs").innerHTML = clutter;
    audio.src = songArr[selectedsong].url;
    document.querySelector(".left").style.background = `url(${songArr[selectedsong].Image})`;
};


function playSong() {
    document.querySelector(".all-songs").addEventListener("click", (evant) => {
        selectedsong = evant.target.id;
        MainFunction();
        document.querySelector(".play-control").innerHTML = `<i class="ri-pause-line"></i>`;
        flag = 1
        audio.play();
    })
}

MainFunction();
playSong();

let flag = 0;
function play(){
    document.querySelector(".play-control").addEventListener("click",() => {
        if(flag == 0){
            document.querySelector(".play-control").innerHTML = `<i class="ri-pause-line"></i>`;
            MainFunction();
            audio.play();
            flag = 1;
        }
        else{
            document.querySelector(".play-control").innerHTML = `<i class="ri-play-line"></i>`;
            MainFunction();
            audio.pause();
        flag = 0;
        }
    });
};

play();

function forword(){
    document.querySelector(".forword-control").addEventListener("click",() => {
        if(selectedsong < songArr.length -1 ){
            selectedsong++;
            MainFunction();
            audio.play();
        }
        else{
            document.querySelector(".forword-control").style.opacity = 0.3;
        }
    });
};

forword();

function backword(){
    document.querySelector(".backword-control").addEventListener("click",() => {
        if(selectedsong > 0 ){
            selectedsong--;
            MainFunction();
            audio.play();
        }
        else{
            document.querySelector(".backword-control").style.opacity = 0.3;
        }
    });
};

backword();
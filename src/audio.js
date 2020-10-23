var audio = document.getElementsByTagName('audio')[0];
var img = document.getElementsByClassName('imageSom');
var site = localStorage.getItem("site");
var estavanogame = 0;

if(site.indexOf("#inicio")>-1)
    site = site.replace("#inicio", "")

if(site.indexOf("#index.html")>-1)
    site = site.replace("#index.html", "")

audio.volume = 0.1;


audio.onerror =  function() {
    for(let i = 0; i < img.length; i++){
            img[i].src="img/btn-not-som.png"
    }
    audio.pause();
    audio.muted = true;
}

function playPause(src){
    
    if(audio.readyState > 0){ 
        if(src == site+"img/btn-not-som.png"){
            for(let i = 0; i < img.length; i++){
                img[i].src="img/btn-som.png"
            }
            
            audio.play();            
            audio.muted = false;
        }
        else{
            for(let i = 0; i < img.length; i++){
                img[i].src="img/btn-not-som.png"
            }
            audio.pause();
            audio.muted = true;
        }
    }
    else {
        for(let i = 0; i < img.length; i++){
            img[i].src="img/btn-not-som.png"
        }
        audio.pause();
        audio.muted = true;
    }
    
}    


window.addEventListener('hashchange', hashHandler, false);
function hashHandler(){
    if(location.hash=="#jogo-facil" || location.hash=="#jogo-medio" || location.hash=="#jogo-dificil"){
        audio.src="../audio/bensound-jazzyfrenchy.mp3"

        audio.addEventListener('canplay', function() {
        audio.muted = false
        audio.play()
    });  
        estavanogame = 1
    }
    else if(estavanogame == 1){
        estavanogame = 0;
        audio.src="../audio/bensound-ukulele.mp3"
        audio.addEventListener('canplay', function() {
            audio.muted = false
            audio.play()
        });  
    }	
}

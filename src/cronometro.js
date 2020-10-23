var intervalo;
var s = 1;
var m = 0;

window.addEventListener('hashchange', hashHandler, false);
function hashHandler(){
    if(location.hash=="#jogo-facil" || location.hash=="#jogo-medio" || location.hash=="#jogo-dificil" || location.hash=="" || location.hash=="#inicio"){

		parar();
		s=1;m=0;
		tempo();
	}	
}

function tempo() {
	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		
		for(let i = 0; i < 9; i++){
			if (s < 10) document.getElementsByClassName("segundo")[i].innerHTML = "0" + s; else document.getElementsByClassName("segundo")[i].innerHTML = s;
			if (m < 10) document.getElementsByClassName("minuto")[i].innerHTML = "0" + m; else document.getElementsByClassName("minuto")[i].innerHTML = m;
		}
		s++;
	},1000);
}
function parar() {
	window.clearInterval(intervalo);
	window.clearInterval(s);
	window.clearInterval(m);
	localStorage.setItem("segundo", s);
	localStorage.setItem("minuto", m);

}


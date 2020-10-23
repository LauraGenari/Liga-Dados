window.onload = function () {
  localStorage.setItem("site", location.href);

  document.getElementsByClassName("btn-whats")[0].href =
    "https://api.whatsapp.com/send?text=Acabei de aprender muito sobre doenças negligenciadas e como me prevenir! Venha aprender também!" +
    encodeURIComponent(document.title + " " + location.href);
  document.getElementsByClassName("btn-whats")[1].href =
    "https://api.whatsapp.com/send?text=Acabei de aprender muito sobre doenças negligenciadas e como me prevenir! Venha aprender também!" +
    encodeURIComponent(document.title + " " + location.href);

  document.getElementsByClassName("btn-face")[0].href =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent(location.href);
  document.getElementsByClassName("btn-face")[1].href =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent(location.href);

  document.getElementsByClassName("btn-telegram")[0].href =
    "https://telegram.me/share/url?url=" +
    encodeURIComponent(location.href) +
    "&text=Acabei de aprender muito sobre doenças negligenciadas e como me prevenir! Venha aprender também!" +
    encodeURIComponent(document.title);
  document.getElementsByClassName("btn-telegram")[1].href =
    "https://telegram.me/share/url?url=" +
    encodeURIComponent(location.href) +
    "&text=Acabei de aprender muito sobre doenças negligenciadas e como me prevenir! Venha aprender também! " +
    encodeURIComponent(document.title);

    if(window.performance.navigation.type == 1 && (location.hash == "#jogo-facil" || location.hash == "#jogo-medio" || location.hash == "#jogo-dificil")){
      game(localStorage.getItem("jogo"))
      setup(localStorage.getItem("nivel"));
      parar()
      tempo()
      document.getElementsByTagName('audio')[0].play()
    }
};

window.addEventListener("hashchange", hashHandler, false);
var navbar = document.getElementById("navbar");
function hashHandler() {
  if (location.hash == "" || location.hash == "#inicio") {
    
    navbar.removeAttribute(
      "class",
      "d-flex justify-content-between align-items-center"
    );
    navbar.setAttribute("class", "d-none");
  } else {
    navbar.removeAttribute("class", "d-none");
    navbar.setAttribute(
      "class",
      "d-flex justify-content-between align-items-center"
    );
    if(location.hash == "#escolha-jogo")
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName("content")[i].innerHTML = "";
      correcao = new Array("-1", "-1", "-1", "-1", "-1");
    }
  }
}

window.onreadystatechange = hashHandler();

function menuHide() {
  document.getElementById("menu-desktop").setAttribute("class", "d-none");
  document.getElementById("menu-tablet").setAttribute("class", "d-none");
  document.getElementById("menu-mobile").setAttribute("class", "d-none");
  document.getElementById("sombra").setAttribute("class", "d-none");
}

function menuShow() {
  document.getElementById("menu-desktop").setAttribute("class", "d-block");
  document
    .getElementById("menu-desktop")
    .setAttribute("class", "d-none d-sm-none d-md-none d-lg-block");

  document.getElementById("menu-tablet").setAttribute("class", "d-block");
  document
    .getElementById("menu-tablet")
    .setAttribute("class", "d-none d-sm-block d-md-block d-lg-none");

  document.getElementById("menu-mobile").setAttribute("class", "d-block");
  document
    .getElementById("menu-mobile")
    .setAttribute("class", "d-block d-sm-none");

  document.getElementById("sombra").setAttribute("class", "d-block row");
}


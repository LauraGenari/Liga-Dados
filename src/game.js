function game(jogo) {
  localStorage.setItem("jogo", jogo);
  comparação(jogo);
  var reload = document.getElementsByClassName("reload");
  for (let i = 0; i < 9; i++) {
    localStorage.setItem("reload" + i, reload[i].innerHTML);
  }
}

function comparação(jogo) {
  var title = document.getElementsByClassName("titulo");
  if (jogo == "esqui") {
    tema = esqui;
    for (let i = 0; i < title.length; i++) {
      title[i].innerHTML = "Esquissotomose";
    }
  } else if (jogo == "malaria") {
    tema = malaria;
    for (let i = 0; i < title.length; i++) {
      title[i].innerHTML = "Malária";
    }
  } else if (jogo == "leishteg") {
    tema = leishteg;
    for (let i = 0; i < title.length; i++) {
      title[i].innerHTML = "Leishmaniose Tegumentar";
    }
  } else if (jogo == "leishvis") {
    tema = leishvis;
    for (let i = 0; i < title.length; i++) {
      title[i].innerHTML = "Leishmaniose Visceral";
    }
  } else if (jogo == "chagas") {
    tema = chagas;
    for (let i = 0; i < title.length; i++) {
      title[i].innerHTML = "Doença de Chagas";
    }
  } else if (jogo == "lepto") {
    tema = lepto;
    for (let i = 0; i < title.length; i++) {
      title[i].innerHTML = "Leptospirose";
    }
  }
}

function setup(nivel) {
  var jogo = localStorage.getItem("jogo");
  var site = localStorage.getItem("site");
  /*Monta o caminho das imagens de acordo com o jogo*/
  var path = "img/" + jogo;
  var space = path + "/space.png";

  var img = [
    "/causador.png",
    "/prevencao.png",
    "/sintoma.png",
    "/transmissao.png",
    "/vetor.png",
  ];
  var txt = ["Causador", "Prevenção", "Sintoma", "Transmissão", "Vetor"];

  var imgpath = [
    path + img[0],
    path + img[1],
    path + img[2],
    path + img[3],
    path + img[4],
  ];

  var malaria = {
    causador: "Plasmodio",
    prevencao: "Repelente",
    sintoma: "Febre alta",
    transmissao: "Picada do mosquito",
    vetor: "Mosquito Anopheles",
  };

  var leishvis = {
    causador: "Leishmania",
    prevencao: "Repelente",
    sintoma: "Inchaço do abdômen",
    transmissao: "Mosquito palha",
    vetor: "Animais",
  };

  var chagas = {
    causador: "Protozoário",
    prevencao: "Evitar casa de pau a pique",
    sintoma: "Insuficiência cardíaca",
    transmissao: "Fezes do barbeiro",
    vetor: "Barbeiro",
  };

  var lepto = {
    causador: "Leptospira",
    prevencao: "Luvas e botas impermeáveis",
    sintoma: "Febre",
    transmissao: "Enchentes",
    vetor: "Rato",
  };

  var leishteg = {
    causador: "Leishmania",
    prevencao: "Repelente",
    sintoma: "Feridas na pele",
    transmissao: "Mosquito palha",
    vetor: "Animais",
  };

  var esqui = {
    causador: "Schistosoma mansoni",
    prevencao: "Não nadar em água doce",
    sintoma: "Barriga d'água",
    transmissao: "Águas contaminadas",
    vetor: "Caramujos",
  };

  /*Muda o titulo de acordo com o jogo*/
  var tema = {};
  if (jogo == "esqui") {
    txt[4] = "Hospedeiro<br>intermediário";
    tema = esqui;
  } else if (jogo == "malaria") {
    tema = malaria;
  } else if (jogo == "leishteg") {
    tema = leishteg;
  } else if (jogo == "leishvis") {
    tema = leishvis;
  } else if (jogo == "chagas") {
    tema = chagas;
  } else if (jogo == "lepto") {
    tema = lepto;
  }
  /*Sorteia as imagens e as posições delas e seus respectivos textos*/

  var imageCollection = document.getElementsByClassName("image");
  var textCollection = document.getElementsByClassName("imageRelated");
  var spaceCollection = document.getElementsByClassName("space");
  var mosquitoCollection = document.getElementsByClassName("mosquito");
  var match = new Array();

  var j = 0,
    i;

  while (j < 5) {
    i = Math.floor(Math.random() * (5 - j));

    let image = img.splice(i, 1);
    let text = txt.splice(i, 1);
    match.push(text);

    let categ;

    if (text == "Causador") {
      categ = tema.causador;
    } else if (text == "Prevenção") {
      categ = tema.prevencao;
    } else if (text == "Sintoma") {
      categ = tema.sintoma;
    } else if (text == "Transmissão") {
      categ = tema.transmissao;
    } else if (text == "Vetor" || text == "Hospedeiro<br>intermediário") {
      categ = tema.vetor;
    }
   
    let ctrl = 0,
      vezes = 0;
    if (j <= 2) {
      for (let h = 3; h < 6; h++) {
        for (let k = 0 + ctrl; vezes < 3; k + h) {
         
          imageCollection[ctrl + j].id = text;
          imageCollection[ctrl + j].src = path + image;
          spaceCollection[ctrl + j].src = space;
          mosquitoCollection[ctrl + j].innerHTML = categ;
          vezes++;
          ctrl += h;
        }
        vezes = 0;
      }
    } else if (j == 3) {
      ctrl = 12;
      for (let h = 4; h < 6; h++) {
        for (let k = 0 + ctrl; vezes < 3; k + h) {
         
          imageCollection[ctrl].id = text;
          imageCollection[ctrl].src = path + image;
          spaceCollection[ctrl].src = space;
          mosquitoCollection[ctrl].innerHTML = categ;
          vezes++;
          ctrl += h;
        }
        vezes = 0;
      }
    } else if (j == 4) {
      for (let k = 25; k < 40; k += 5) {
        
        imageCollection[k].id = text;
        imageCollection[k].src = path + image;
        spaceCollection[k].src = space;
        mosquitoCollection[k].innerHTML = categ;
      }
    }

    j++;
  }

  var limit;
  if (nivel == "facil") {
    limit = 3;
    match.splice(3, 2);
  } else if (nivel == "medio") {
    limit = 4;
    match.splice(4, 1);
  } else {
    limit = 5;
  }

  j = 0;
  while (j < limit) {
    let i = Math.floor(Math.random() * (limit - j));
    let text = match.splice(i, 1);
    let ctrl = 0,
      vezes = 0;

    if (j <= 2) {
      for (let h = 3; h < 6; h++) {
        for (let k = 0 + ctrl; vezes < 3; k + h) {
          textCollection[j + ctrl].innerHTML = text;
          spaceCollection[j + ctrl].id = text;
          vezes++;
          ctrl += h;
        }
        vezes = 0;
      }
    } else if (j == 3) {
      ctrl = 12;
      for (let h = 4; h < 6; h++) {
        for (let k = 0 + ctrl; vezes < 3; k + h) {
          textCollection[ctrl].innerHTML = text;
          spaceCollection[ctrl].id = text;
          vezes++;
          ctrl += h;
        }
        vezes = 0;
      }
    } else if (j == 4) {
      for (let k = 25; k < 40; k += 5) {
        textCollection[k].innerHTML = text;
        spaceCollection[k].id = text;
      }
    }
    j++;
  }

  var descr = [
    tema.causador,
    tema.prevencao,
    tema.sintoma,
    tema.transmissao,
    tema.vetor,
  ];

  localStorage.setItem("imgpath", imgpath);
  localStorage.setItem("descr", descr);
  localStorage.setItem("nivel", nivel);
}

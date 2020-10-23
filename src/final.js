window.addEventListener('hashchange', hashHandler, false);
function hashHandler(){
    if(location.hash=="#final"){

        var imgpath = localStorage.getItem("imgpath");
        var descr = localStorage.getItem("descr");
        var correcao = localStorage.getItem("correcao");
        var nivel = localStorage.getItem("nivel");
        var jogo = localStorage.getItem("jogo");

        var min = localStorage.getItem("minuto");
        var seg = localStorage.getItem("segundo");

        var titulo = document.getElementsByClassName("result");

        if(jogo == "esqui"){
            for(let i = 0; i < titulo.length; i++){
                titulo[i].innerHTML="RESULTADO: Esquissotomose";
            }
        }else if(jogo == "malaria"){
            for(let i = 0; i < titulo.length; i++){
                titulo[i].innerHTML="RESULTADO: Malária";
            }
        }else if(jogo == "leishteg"){
            for(let i = 0; i < titulo.length; i++){
                titulo[i].innerHTML="RESULTADO: Leishmaniose Tegumentar";
            }
        }else if(jogo == "leishvis"){
            for(let i = 0; i < titulo.length; i++){
                titulo[i].innerHTML="RESULTADO: Leishmaniose Visceral";
            }
        }else if(jogo == "chagas"){
            for(let i = 0; i < titulo.length; i++){
                titulo[i].innerHTML="RESULTADO: Doença de Chagas";
            }
        }else if(jogo == "lepto"){
            for(let i = 0; i < titulo.length; i++){
                titulo[i].innerHTML="RESULTADO: Leptospirose";
            }
        }

        var elemento_pai = document.getElementsByClassName("content");

        for(let i = 9; i < 12; i++){
            if (seg < 10) document.getElementsByClassName("segundo")[i].innerHTML = "0" + seg; else document.getElementsByClassName("segundo")[i].innerHTML = seg;
            if (min < 10) document.getElementsByClassName("minuto")[i].innerHTML = "0" + min; else document.getElementsByClassName("minuto")[i].innerHTML = min;

        }


        function mobile(path, correc, categ, descr, tela){

            var category = document.createElement('span');    
            var description =document.createElement('span');
            var equal = document.createElement('span');
            var br = document.createElement('br');
            var img = document.createElement('img');
            var correction = document.createElement('img');

            category.innerHTML = categ;    

            equal.innerHTML =" = "    

            description.innerHTML = descr;
        
            img.src=path;   

            if(correc == "0"){
                correction.src="img/true.png";
            }else{
                correction.src="img/false.png"
            }

            if(nivel == "dificil"){
                category.style.marginBottom="10px"
                equal.style.marginBottom="10px"
                img.style.marginBottom="10px"
                correction.style.marginBottom="10px"
                description.style.marginBottom="10px"
            }else if(nivel == "medio"){
                category.style.marginBottom="24px"
                equal.style.marginBottom="24px"
                img.style.marginBottom="24px"
                correction.style.marginBottom="24px"
                description.style.marginBottom="24px"
            }else if(nivel == "facil"){
                category.style.marginBottom="20px"
                equal.style.marginBottom="20px"
                img.style.marginBottom="20px"
                correction.style.marginBottom="20px"
                description.style.marginBottom="20px"

                category.style.marginTop="20px"
                equal.style.marginTop="20px"
                img.style.marginTop="20px"
                correction.style.marginTop="20px"
                description.style.marginTop="20px"
            }

            if(tela == 0){
                category.setAttribute("class","d-inline-block d-sm-inline-block d-md-none");
                category.style.width="100px"

                equal.setAttribute("class","d-inline-block d-sm-inline-block d-md-none");

                img.setAttribute("class","d-inline-block d-sm-inline-block d-md-none");
                img.style.width = "70px";
                img.style.height = "70px";

                correction.style.width = "30px";
                correction.style.height = "30px";
                correction.setAttribute("class","d-inline-block d-sm-inline-block d-md-none");

                description.setAttribute("class","d-inline-block d-sm-inline-block d-md-none");
                description.style.width="100px"
            }if(tela == 1){
                category.setAttribute("class","d-none d-sm-none d-md-block d-lg-none");
                equal.setAttribute("class","d-none d-sm-none d-md-block d-lg-none");
                img.setAttribute("class","d-none d-sm-none d-md-block d-lg-none");
                correction.setAttribute("class","d-none d-sm-none d-md-block d-lg-none");
                description.setAttribute("class","d-none d-sm-none d-md-block d-lg-none");

                category.setAttribute("class","d-inline-block");
                equal.setAttribute("class","d-inline-block");
                img.setAttribute("class","d-inline-block");
                correction.setAttribute("class","d-inline-block");
                description.setAttribute("class","d-inline-block");
                
                category.style.height="100px"
                category.style.width="150px"
                
                img.style.width = "90px";
                img.style.height = "90px";

                correction.style.width = "30px";
                correction.style.height = "30px";
                
                description.style.width="200px"
                description.style.height="100px"
            
            }
            elemento_pai[tela].appendChild(img);
            elemento_pai[tela].appendChild(description);
            elemento_pai[tela].appendChild(equal);
            elemento_pai[tela].appendChild(category);
            elemento_pai[tela].appendChild(correction);
            elemento_pai[tela].appendChild(br);
        }

        function desktop(path, correc, categ, descr){

            var category = document.createElement('div');    
            var description =document.createElement('div');
            var equal = document.createElement('div');
            var img = document.createElement('img');
            var correction = document.createElement('img');
            var div = document.createElement('div')
            var divimg = document.createElement('div')
            var divicone = document.createElement('div')
            var divdescription =document.createElement('div');

            category.innerHTML = categ;    

            equal.innerHTML="="    

            description.innerHTML = descr;
        
            img.src=path;   

            if(correc == "0"){
                correction.src="img/true.png";
            }else{
                correction.src="img/false.png"
            }

            category.setAttribute("class","d-none d-sm-none d-md-none d-lg-block");
            equal.setAttribute("class","d-none d-sm-none d-md-none d-lg-block");
            img.setAttribute("class","d-none d-sm-none d-md-none d-lg-block");
            correction.setAttribute("class","d-none d-sm-none d-md-none d-lg-block");
            description.setAttribute("class","d-none d-sm-none d-md-none d-lg-block");

            divdescription.setAttribute("class","d-flex align-items-center");
            divimg.setAttribute("class", "d-none d-sm-none d-md-none d-lg-block");
            divimg.setAttribute("class", "d-flex justify-content-center");
            divicone.setAttribute("class", "d-none d-sm-none d-md-none d-lg-block");
            divicone.setAttribute("class", "d-flex justify-content-center");

            div.setAttribute("class", "d-inline-block");

            category.style.width="180px"
            category.style.height="25px"
            category.style.fontSize="0.8em"

            img.style.width = "100px";
            img.style.height = "100px";

            divimg.style.height="110px"

            correction.style.width = "25px";
            
            equal.style.fontSize="0.8em"

            description.style.width="180px"
            description.style.fontSize="0.8em"

            divdescription.appendChild(description)
            divimg.appendChild(img);
            divicone.appendChild(correction); 
            
            div.appendChild(divimg);
            div.appendChild(description);
            div.appendChild(equal);
            div.appendChild(category);
            div.appendChild(divicone);

            elemento_pai[2].appendChild(div);
        }

        correcao = correcao.split(",")
        descr = descr.split(",")
        imgpath = imgpath.split(",")

        if (correcao[0] != "-1"){
            window.addEventListener("load",mobile(imgpath[0], correcao[0],"Causador", descr[0],0));
            window.addEventListener("load",mobile(imgpath[0], correcao[0],"Causador", descr[0],1));
            window.addEventListener("load",desktop(imgpath[0], correcao[0],"Causador", descr[0]));
        }
        if (correcao[1] != "-1"){
            window.addEventListener("load",mobile(imgpath[1], correcao[1],"Prevenção", descr[1],0));
            window.addEventListener("load",mobile(imgpath[1], correcao[1],"Prevenção", descr[1],1));
            window.addEventListener("load",desktop(imgpath[1], correcao[1],"Prevenção", descr[1]));
        }
        if (correcao[2] != "-1"){
            window.addEventListener("load",mobile(imgpath[2], correcao[2],"Sintoma", descr[2],0));
            window.addEventListener("load",mobile(imgpath[2], correcao[2],"Sintoma", descr[2],1));
            window.addEventListener("load",desktop(imgpath[2], correcao[2],"Sintoma", descr[2]));
        }
        if (correcao[3] != "-1"){
            window.addEventListener("load",mobile(imgpath[3], correcao[3],"Transmissão", descr[3],0));
            window.addEventListener("load",mobile(imgpath[3], correcao[3],"Transmissão", descr[3],1));
            window.addEventListener("load",desktop(imgpath[3], correcao[3],"Transmissão", descr[3]));
        }
        if (correcao[4] != "-1"){
            window.addEventListener("load",mobile(imgpath[4], correcao[4],"Vetor", descr[4],0));
            window.addEventListener("load",mobile(imgpath[4], correcao[4],"Vetor", descr[4],1));
            window.addEventListener("load",desktop(imgpath[4], correcao[4],"Vetor", descr[4]));
        }

        var div = document.getElementsByClassName("reload")
        for(let i = 0; i < 9; i ++){
            div[i].innerHTML = localStorage.getItem("reload"+i)
        }
    }
}
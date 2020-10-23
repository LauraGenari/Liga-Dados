var limit;
var off = document.getElementsByClassName("off");
var doc = document.getElementsByClassName("aviso")

// enable draggables to be dropped into this

interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '.image',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');

    if (location.hash == "#jogo-facil") {
      limit = 3;
    } else if (location.hash == "#jogo-medio") {
      limit = 4;
    } else if (location.hash == "#jogo-dificil")  {
      limit = 5;
    }
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    draggableElement.textContent = 'Dragged in';
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    event.relatedTarget.textContent = 'Dragged out';
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped';
    correction(event);
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});
  
// target elements with the "draggable" class
interact('.draggable').draggable({

  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  restrict: {
    restriction: "parent",
    endOnly: true,
    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  },
  // disable autoScroll
  autoScroll: false,

  // call this function on every dragmove event
  onmove: dragMoveListener,
  // call this function on every dragend event
  onend: function (event) {
    var textEl = event.target.querySelector('p');

    textEl && (textEl.textContent =
      'moved a distance of '
      + (Math.sqrt(event.dx * event.dx +
                    event.dy * event.dy)|0) + 'px');
  }
});

  
function dragMoveListener (event) {
  var target = event.target,
  // keep the dragged position in the data-x/data-y attributes
  x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
  y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
  target.style.transform =
  'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

var correcao = new Array("-1","-1","-1","-1","-1");
var visited = 0
function correction(event){
  if(event.target.id == event.relatedTarget.id){
    if(event.target.id == "Causador"){
      correcao[0] = "0";
      visited += 1;
    }
    else if(event.target.id == "Prevenção"){
      correcao[1] = "0";
      visited += 1;
    }
    else if(event.target.id == "Sintoma"){
      correcao[2] = "0";
      visited += 1;
    }
    else if(event.target.id == "Transmissão"){
      correcao[3] = "0";
      visited += 1;
    }
    else if(event.target.id == "Vetor" || event.target.id == "Hospedeiro<br>intermediário"){
      correcao[4] = "0";
      visited += 1;
    }
  }
  else{
    
    if(event.target.id == "Causador"){
      correcao[0] = "1";
      visited += 1;
    }
    else if(event.target.id == "Prevenção"){
      correcao[1] = "1";
      visited += 1;
    }
    else if(event.target.id == "Sintoma"){
      correcao[2] = "1";
      visited += 1;
    }
    else if(event.target.id == "Transmissão"){
      correcao[3] = "1";
      visited += 1;
    }
    else if(event.target.id == "Vetor" || event.target.id == "Hospedeiro<br>intermediário"){
      correcao[4] = "1";
      visited += 1;
    }
  }

  var np = 0;

  if(visited < limit) np = 1;
  if(np == 0){
    visited = 0;
    for (let i = 0; i < off.length; i++) {
      off[i].style.display="none"
      
    }
    localStorage.setItem("correcao",correcao);
  }
}

function aviso(){
  for (let i = 0; i < doc.length; i++) {
    doc[i].setAttribute("class", "d-block aviso")
  }
}

function saiaviso(){
  for (let i = 0; i < doc.length; i++) {
    doc[i].setAttribute("class", "d-none aviso")
  }
}

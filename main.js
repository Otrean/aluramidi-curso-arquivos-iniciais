const listaDeTeclas = document.querySelectorAll('.tecla');

function tocarSons(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);

    if (elemento != null && elemento.localName === 'audio'){ 
        elemento.play();
    }

    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

for (let i = 0; i < listaDeTeclas.length; i += 1){
    const tecla = listaDeTeclas[i];
    const instrumento = listaDeTeclas[i].classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function(){
        tocarSons(idAudio);
    }

    tecla.onkeydown = function(evento){
                
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}


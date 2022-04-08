
var palavra = ''
var acertos = 0
var erros = 0

function jogada(e){
    palpite = this.firstChild.textContent
    let el = document.getElementById(palpite)
    el.removeEventListener('click', jogada)
    el.style.backgroundColor = 'orange'
    verificando_jogada(palavra, palpite)
    
}

function sorteio_palavra(){
    let lista_palavras_javascript = ['let','hoisting','closures', 'callback','dom','events','scope']
    let n
    n = Math.floor(Math.random() * lista_palavras_javascript.length)
    palavra = lista_palavras_javascript[n]
    for (let i = 0; i < palavra.length; i++){
        let sec_palavra = document.querySelector('.palavra')
        let letra = document.createElement('div')
        letra.setAttribute('class', 'cada_letra')
        sec_palavra.appendChild(letra)
    }
    let t = document.querySelectorAll('.tecla')
    for (let c = 0; c < t.length; c++){
        t[c].addEventListener('click',  jogada)
    }
    console.log(palavra)
}

function verificando_jogada(palavra, palpite){
    let pontos = 0
    let audio_acertou = document.getElementById('bell')
    let audio_errou = document.getElementById('miss')
    for (let c = 0; c < palavra.length; c++){
        if(palpite == palavra[c]){
            audio_acertou.play()
            let letras = document.querySelectorAll('.cada_letra')
            let l = document.createTextNode(palpite)
            letras[c].appendChild(l)
            pontos += 1

        }
    }
    if(pontos > 0){
        acertos += pontos
        console.log(acertos) 
        if(acertos == palavra.length){
            console.log('Parabéns você ganhou')
            setTimeout(()=>{window.location.reload(true)}, 4000)
        }
    }else{
        audio_errou.play()
        let img = document.querySelector('.anime')
        erros += 1
        console.log(erros)
        if(erros == 1){
            img.setAttribute('src', './imagens/forca2.png')
        }else if(erros == 2){
            img.setAttribute('src', './imagens/forca3.png')
        }else if(erros == 3){
            img.setAttribute('src', './imagens/forca4.png')
        }else if(erros == 4){
            img.setAttribute('src', './imagens/forca5.png')
        }else if(erros == 5){
            img.setAttribute('src', './imagens/forca6.png')
            setTimeout(()=>{window.location.reload(true)}, 4000)

        }
    }
}

window.addEventListener('load', sorteio_palavra, false)


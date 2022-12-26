function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>valor invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Voce acertou</h2>
        <h3>O numero secreto era${numeroSecreto} !</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-light fa-arrow-down"></i></div>
        
        `
    } else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-light fa-arrow-up"></i></div>
        
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
    
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('clicl', e=>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
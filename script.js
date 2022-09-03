// carne 400 gramas por adulto 
// bebidas alcolica 1200 ml por pessoa 
// Refrigerante/suco 1000 ml por pessoa
// crianças metade dos adultos
// para festa até 04:00
// para festa + de 06:00
//carne = 650 / bebida alcolica = 2000 ml / refirgerante e suco = 1500 ml


let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){

    let adultos =inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value
    
     let qtdCarne =  carnePP(duracao) * adultos + ( carnePP(duracao) / 2 * criancas)
     let qtdCerveja =  cervejaPP(duracao) * adultos ;
     let qtdBebidas =  bebidasPP(duracao) * adultos + ( bebidasPP(duracao) / 2 * criancas)

     resultado.innerHTML = `<p>${qtdCarne / 1000} Kg de Carne </p>`
     resultado.innerHTML += `<p>${Math.ceil(qtdCerveja /355)} latas de Cerveja <small> ( * calculado em cima de 355ml)</small> </p>`
     resultado.innerHTML += `<p>${Math.ceil(qtdBebidas/2000)} Pet's 2L de Bebidas <small>( * bebida a sua escolha)</small> </p>`
}

function carnePP(duracao){

    if(duracao >=6){
        return 650;
    }
    else{
        return 400;
    }
}

function cervejaPP(duracao){

    if(duracao >=6){
        return 2000;
    }
    else{
        return 1000;
    }
}

function bebidasPP(duracao){

    if(duracao >=6){
        return 1500;
    }
    else{
        return 1000;
    }
}




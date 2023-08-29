// FUNÇÕES

// Definição da função
function saudacao() {
    console.log('Olá seja bem vindo ao nosso site!!!')
}

saudacao()

console.clear()

// Como enviar parâmetros para as funções?

function saudacao(nome, empresa='Rômali') {
        console.log(`Olá, ${nome} seja bem vindo ao nosso site da ${empresa}!`)
}

saudacao('João')

// Retorno da função

function soma(numero1, numero2) {
    return numero1 + numero2
    console.log('Qualquer coisa')
}
const Resultado = soma(10, 20)

console.log(Resultado / 2)

console.clear()

function maiorQue50(numero) {
    if (numero > 50) {
        return true
    }
    
    return false
}
// > ESTRUTURAS CONDICIONAIS

const idade = 12

if (idade >= 18) {
    console.log('Você é maior de idade!')
} else {
console.log('Você é menor de idade!')
}

// Se média  >=, aprovado
// Se média < 7 e média  >= 5, Recuperação
// Se média < 5, Reprovado

console.clear() // limpando as saídas anteriores

let media = 8

if (media >= 7) {
    console.log('Aprovado(a)')
} else if (media >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado(a)')
}

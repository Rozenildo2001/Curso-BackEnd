// > ARRAYS

// - Como criar um array?

let arr = ['Walisson', 26, 1.77, true]

console.log(arr)

// - Como acessar os elementos do array

console.log('Primeiro elemento', arr [0])
console.log('Segundo elemento', arr [1])
console.log('Terceiro elemento', arr [2])
console.log('Quarto elemento', arr [3])

// - Como obter o tamanho do array?

console.log('Tamnho do arrays:', arr.length)

// - Percorrendo arrays

console.clear()

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.clear()

for (let elemento of    arr) {
    console.log(elemento)
}

console.clear()

for (let indice in arr) {
    console.log(indice, arr[indice])
}
 
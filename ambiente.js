let num = [5, 4, 8]
num.push(1)
num.sort()
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor da primeira posição é ${num[0]}`)

let res = Number(prompt('Qual o número que você gostaria de saber a posição?'))
let pos = num.indexOf(res)
if (pos == -1) {
    console.log(`O número (${res})não foi encontrado`)
}
else {
    console.log(`O valor ${res} está na posição ${pos}`)
}
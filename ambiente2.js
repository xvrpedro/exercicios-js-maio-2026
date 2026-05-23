let num = [2, 3, 4, 5, 9, 7]
console.log(num)
for(let pos in num) {
    num.sort()
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
console.log('Organizado de forma crescente.')
/* for (let pos = 0; pos < num.length; pos++) {
    num.sort()
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}
console.log('Organizado de forma crescente.')
*/
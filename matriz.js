const prompt = require(`prompt-sync`)();

let matriz = []
for(let i=0;i<4;i++){
    matriz[i] = [] // cria um vetor de vetores
    console.log(`Informe os elementos da linha ${i}`)
    for(let j=0;j<4;j++){
        matriz[i][j] = prompt(`Informe uma letra na coluna ${j}`)
    }
}
console.log('Exibindo todos os elementos da matriz')
console.log(matriz)
console.log('Exibindo os elementos da diagonal principal')
for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        if (i == j){
            console.log(matriz[i][j])
        }
    }
}
console.log('De outra forma')
for(let i=0;i<4;i++){
    console.log(matriz[i][i])
}
console.log('Exibindo os elementos da diagonal secundária')
for(let i=0;i<4;i++){
    console.log(matriz[i][3-i])
}
console.log('Elementos da linha 1')
for(let j=0;j<4;j++){
    console.log(matriz[1][j])
}
console.log('Elementos da coluna 2')
for(let i=0;i<4;i++){
    console.log(matriz[i][2])
}
//usando função "map"
matriz.map ((linha, i) => {
     console.log(`elementos da linha`)
     linha.map((elemento, j) => console.log (`Coluna ${j} - ${elemento}`))
})
//mostra linha inteira
matriz.map( linha => console.log(linha))

let novaMatriz = matriz.map( linha => {
    linha.map (elemento => elemento * 2)
})

novaMatriz.map(linha => console.log(linha))

//fim
for(let i=0; i<4; i++)
    console.log(`elementos da linha ${j}`)
    for(let j=0;j<4;i++){
        console.log(`elementos da coluna $`)
    } 
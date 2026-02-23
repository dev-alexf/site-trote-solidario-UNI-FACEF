let exe1 = [3,4,5,6]
let quadrado = exe1.map(numero => numero * numero)
console.log(quadrado)

let exe2 = ["maça", "uva", "laranja", "caju"]
let maiusculo = exe2.map(palavra => palavra.toUpperCase())
console.log(maiusculo)

let exe3 = [1, 2, 3]
let soma10 = exe3.map (numero => numero + 10)
console.log(soma10)

let exe4 = ["globo", "record", "bandeirantes", "Cazé TV"]
let concatena = exe4.map (canal => canal.concat(" - Processada"))
console.log(concatena)
//crie uma função anonima que recebe três números como parâmetros e retorna a média desses números
let media = (a, b, c) => {
    return (a + b + c) / 3    
}
console.log(media(4, 6, 8))

//usando o map
let numeros = [10, 20, 30, 40]
//map retorna um outro vetor
let dobrado = numeros.map( numero => numero * 2)
console.log(dobrado)

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

let filtro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let pares = filtro.filter (numero => numero % 2 == 0)
console.log(pares)
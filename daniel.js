
let somarPares

const somarPares = () => {
    let soma = 0;
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            soma += i;
        }
    }
    return soma;
};

const resultado = somarPares();

console.log(somarPares);


let somarPares = () => {
    let soma = 0
    for(let i = 1, i<=20; i++){
    if (i % 2 == 0 ){
        soma += i //soma = soma + i
        }
    }
        return soma
}
console.log(somarPares());

//com console.log
let pedaco = (nome, inicio, fim) {
    return nome.slice(inicio, fim)
}

console.log(pedaco("Carlos Eduardo", 5, 12))
console.log(pedaco("Marcos da Silva", 3, 7))
console.log(pedaco("Leonardo da Silva", 7, 9))

//sem console.log
let pedaco2 = (nome, inicio, fim) => {
    console.log(nome.slice(inicio, fim))
}

(pedaco2("Carlos Eduardo", 5, 12))
(pedaco2("Marcos da Silva", 3, 7))
(pedaco2("Leonardo da Silva", 7, 9))

let aux = "Pegar Tudo" 

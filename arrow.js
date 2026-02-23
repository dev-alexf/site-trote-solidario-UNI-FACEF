let verificarParImpar = (numero) => {
    if(numero % 2 == 0){
        return true
    }
    else {
        return false
    }
}
console.log(verificarParImpar(19))
//com operador ternário
let verificaOT = (numero) => {
    return numero % 2 == 0 ? true : false
}
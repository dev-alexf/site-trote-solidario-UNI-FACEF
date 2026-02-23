let lines = ["10 10 3", "5 5", "10 10", "5 25", "2 3 1", "3 2"]

let vetor1 = lines[0].split(" ")
let dimensao = vetor1[0] * vetor1[1]
let qtdePedidos = Number(vetor1[2])
let pos
for(pos=1;pos<=qtdePedidos;pos++){
    let vetPedido = lines[pos].split(" ")
    let dimensaoPedido = vetPedido[0] * vetPedido[1]
    if (dimensaoPedido <= dimensao){
        console.log("Sim")
    }
    else {
        console.log("Não")
    }
}
let vetor2 = lines[pos].split(" ")
let dimensao2 = vetor2[0] * vetor2[1]
let qtdePedidos2 = Number(vetor2[2])
for(let i = 1; i <= qtdePedidos2;i++){
    let vetPedido = lines[pos+i].split(" ")
    let dimensaoPedido = vetPedido[0] * vetPedido[1]
    if (dimensaoPedido <= dimensao){
        console.log("Sim")
    }
    else {
        console.log("Não")
    }
}
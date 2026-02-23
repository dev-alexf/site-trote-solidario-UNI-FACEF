function pacienteMaiorRisco(vetPacientes) {
    console.log(`Paciente de maior risco:`);

    if (vetPacientes.length === 0) {
        console.log("Nenhum paciente cadastrado.");
        return;
    }

    // Inicializa com o primeiro paciente como sendo o de maior risco
    let pacienteMaiorRisco = vetPacientes[0];

    for (let i = 1; i < vetPacientes.length; i++) {
        const pacienteAtual = vetPacientes[i];

        // Verifica primeiro pela condição de saúde: grave > moderada > leve
        if ((pacienteAtual.condicao === "grave" && pacienteMaiorRisco.condicao !== "grave") ||
            (pacienteAtual.condicao === "moderada" && pacienteMaiorRisco.condicao === "leve")) {
            pacienteMaiorRisco = pacienteAtual;
        } 
        else if (pacienteAtual.condicao === pacienteMaiorRisco.condicao) {
            // Se tiverem a mesma condição, verifica pela idade
            if (pacienteAtual.idade > pacienteMaiorRisco.idade) {
                pacienteMaiorRisco = pacienteAtual;
            } 
            // Se tiverem a mesma condição e idade, verifica pelo peso
            else if (pacienteAtual.idade === pacienteMaiorRisco.idade && pacienteAtual.peso > pacienteMaiorRisco.peso) {
                pacienteMaiorRisco = pacienteAtual;
            }
        }
    }

    console.log(`Nome: ${pacienteMaiorRisco.nome}, Idade: ${pacienteMaiorRisco.idade}, Peso: ${pacienteMaiorRisco.peso}, Condição: ${pacienteMaiorRisco.condicao}`);
}
function pacienteMaiorRisco(vetPacientes) {
    console.log(`Paciente de maior risco:`);

    if (vetPacientes.length === 0) {
        console.log("Nenhum paciente cadastrado.");
        return;
    }

    let pacienteMaiorRisco = vetPacientes[0];

    for (let i = 1; i < vetPacientes.length; i++) {
        const pacienteAtual = vetPacientes[i];

        if ((pacienteAtual.condicao === "grave" && pacienteMaiorRisco.condicao !== "grave") ||
            (pacienteAtual.condicao === "moderada" && pacienteMaiorRisco.condicao === "leve")) {
            pacienteMaiorRisco = pacienteAtual;
        } 
        else if (pacienteAtual.condicao === pacienteMaiorRisco.condicao) {

            if (pacienteAtual.idade > pacienteMaiorRisco.idade) {
                pacienteMaiorRisco = pacienteAtual;
            } 
            else if (pacienteAtual.idade === pacienteMaiorRisco.idade && pacienteAtual.peso > pacienteMaiorRisco.peso) {
                pacienteMaiorRisco = pacienteAtual;
            }
        }
    }

    console.log(`Nome: ${pacienteMaiorRisco.nome}, Idade: ${pacienteMaiorRisco.idade}, Peso: ${pacienteMaiorRisco.peso}, Condição: ${pacienteMaiorRisco.condicao}`);
}

function cadastrarPacientes() {
    const vetPacientes = [];
    let continuar = true;

    while (continuar) {
        const nome = prompt("Digite o nome do paciente:");
        const idade = parseInt(prompt("Digite a idade do paciente:"));
        const peso = parseFloat(prompt("Digite o peso do paciente:"));
        const condicao = prompt("Digite a condição do paciente (grave, moderada, leve):").toLowerCase();

        const paciente = {
            nome: nome,
            idade: idade,
            peso: peso,
            condicao: condicao
        };

        vetPacientes.push(paciente);

        continuar = confirm("Deseja cadastrar outro paciente?");
    }

    return vetPacientes;
}

function menu() {
    const vetPacientes = cadastrarPacientes();
    pacienteMaiorRisco(vetPacientes);
}

menu();
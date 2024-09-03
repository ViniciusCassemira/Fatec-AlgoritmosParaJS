let opcaoMenu = 0
let agendamentosFeitos = 0
let horariosDisponiveis = ['8h00 - 9h00','9h00 - 10h00','10h00- 11h00','13h00 - 14h00','14h00 - 15h00','15h00 - 16h00','17h00 - 18h00','18h00 - 19h00']
let indiceHorariosMarcados = []
let agendamentos = []
do{
    opcaoMenu = parseInt(prompt("Barbearia tozi \n[1] Novo agendamento | [2] Ver horários \n[3] Ver agendamentos | [4] Sair do sistema"))
    switch(opcaoMenu){
        case 1:
            novoAgendamento();
            break;
        case 2:
            verHorarios();
            break;
        case 3:
            verAgendamentos()
            break;
        case 4:
            alert("Saindo");
            break; 
        default:
            alert("opcao nao encontrada");
            break;
    }
}while(opcaoMenu !== 4)

function novoAgendamento(){
    try {
        if(agendamentosFeitos > 7){
            throw new Error('Sem horários disponíveis');
        }
        //classe onde armazena as informações dos agendamentos
        class agendamento{
            constructor(nomeCliente, nomeBarbeiro, horario){
                this.nomeCliente = nomeCliente;
                this.nomeBarbeiro = nomeBarbeiro;
                this.horario = horario;
            }
        }
        let nomeCliente = ""
        nomeCliente = prompt("Seu nome:")
        if(nomeCliente === null){
            alert("Agendamento cancelado")
            return;
        }
        let nomeBarbeiro = ""
        nomeBarbeiro = prompt("Nome do barbeiro: ")
        if(nomeBarbeiro === null){
            alert("Agendamento cancelado")
            return;
        }
        
        //verifica se o horário escolhido está disponível
        let verificacao = false

        //força o usuário a escolher um horário disponível
        let horarioEscolhido = 0
        while (!verificacao){
            alert("Horários disponíveis: ")
            verHorarios()

            horarioEscolhido = prompt("Escolha seu horário: ")
            if(horarioEscolhido === null){
                alert("Agendamento cancelado")
                return;
            }
            if(horarioEscolhido <= 0 || horarioEscolhido > 8 || horarioEscolhido === "" || isNaN(horarioEscolhido) || horarioEscolhido === null){
                alert("Horário não encontrado ou indisponível")
                continue
            }

            horarioEscolhido = parseInt(horarioEscolhido)
            if(isNaN(horarioEscolhido)|| indiceHorariosMarcados.indexOf(horarioEscolhido) > -1){
                alert("Horário nao encontrado ou indisponível")
                continue
            }
            verificacao = true
        }
        agendamentos.push(new agendamento(nomeCliente, nomeBarbeiro, horariosDisponiveis[horarioEscolhido-1]));
        indiceHorariosMarcados.push(horarioEscolhido)
        //depois de realizar o agendamento
        alert("Agendamento feito com sucesso!")
        agendamentosFeitos ++
    } catch (error) {
        alert("Erro: " + error.message)
    }
}

function verAgendamentos(){
    if(indiceHorariosMarcados.length > 0){
        agendamentos.forEach(function(agendamentoAtual, indice){
            alert(`Agendamento nº${indice + 1}: \nCliente: ${agendamentoAtual.nomeCliente} \nBarbeiro: ${agendamentoAtual.nomeBarbeiro} \nhorário: ${agendamentoAtual.horario}`)
        })
    }else{
        alert("Nenhum agendamento marcado.")
    }
}

function verHorarios(){
    horariosDisponiveis.forEach(function(horario, index){
        if(indiceHorariosMarcados.indexOf(index+1) > -1){

        }else{
            alert(` [${index+1}] - ${horario}`)
        }

    })
}
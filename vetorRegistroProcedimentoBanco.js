let movimentacoes = []
let saldoConta = 0

class transacao{
    constructor(data, valor){
        this.data = data;
        this.valor = valor;
    }
}
function login(){
    let usuario, senha; 
    //começar do 1 para mostrar ao usuário a chance atual sem precisar dar i+1
    for(let i=1; i<4;i++){
        alert(`Chance ${i} de ${3}`)
        usuario = prompt("Digite o usuário");
        senha = prompt("Digite a senha");
        if(usuario == "usuario" && senha == "123"){
            alert("Acesso liberado")
            return true;
        }
        if(i==3){
            alert("Acesso negado")
            return false;
        }
    }
}

function deposito() {
    let varTemp = 0;
    while (varTemp <= 0 || varTemp === "" || varTemp === null || isNaN(varTemp)) {
        varTemp = prompt("Valor do depósito");
        
        if (varTemp === null) {
            alert("Depósito cancelado");
            return;
        }
        varTemp = parseFloat(varTemp);
        if (isNaN(varTemp) || varTemp <= 0) {
            alert("O valor precisa ser maior que 0");
        } else {
            let data = prompt("Data de hoje: ");
            let valor = varTemp;
            saldoConta += valor;
            movimentacoes.push(new transacao(data, valor));
            alert(`Você depositou R$${valor} com sucesso`);
        }
    }
}

function saque(){
    try {
        if(saldoConta == 0){
            throw new Error ('Você não possui dinheiro na conta.')
        }
        let saqueFeito = 0
        do{
            saqueFeito = 0
            let tentativaSaque = parseFloat(prompt("Valor que deseja sacar: "))
            if(tentativaSaque > saldoConta){
                alert('Você não possui esse valor na conta.')
            }else{
                let saque = tentativaSaque
                saqueFeito = 1
                saldoConta = saldoConta - saque
                let data = prompt("Data de hoje: ")
                movimentacoes.push(new transacao(data, saque * -1))
                alert(`Você sacou R$${saque} com sucesso`)
            }
        }while(saqueFeito != 1)
    }catch(error){
        alert("Erro: " + error.message)
    }
}

function extrato(){
    try{
        if(movimentacoes.length === 0){
            throw new Error ("Sem movimentações recentes na conta")
        }
        movimentacoes.forEach(function(transacao, indice){
            alert(`Transação nº${indice+1} | Data:${transacao.data} | Valor: R$${transacao.valor}`)
        });

    }catch(error){
        alert("Erro: "+error.message)
    }
}

function saldo(){
    alert(`Seu saldo atual: R$${saldoConta}`)
}

if(login()){
    let opcaoMenu = 0
    do{
        opcaoMenu = parseInt(prompt("caixa 24hrs \n 1. Deposito \n 2.Saque \n 3.Ver extrato \n 4.Ver saldo \n 99.Sair"))
        
        switch(opcaoMenu){
            case 1:
                deposito();
                break;
            case 2:
                saque();
                break;
            case 3:
                extrato();
                break
            case 4:
                saldo();
                break;
            case 99:
                alert("Saindo do sistema")
                break;
            default:
                alert("Opção não encontrada")
                break;
        }
        
    }while(opcaoMenu !== 99)
}
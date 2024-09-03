class candidato{
    constructor(nome, partido, numero, votoRecebido){
        this.nome = nome;
        this.partido = partido;
        this.numero = numero;
        this.votoRecebido = votoRecebido;
    }
    informacoes(){
        alert(`Candidato: ${this.nome} \nPartido: ${this.partido} \nNúmero: ${this.numero}`)
    }
    relatorio(){
        alert(`Candidato: ${this.nome} \nPartido: ${this.partido} \nNúmero: ${this.numero} \nVotos recebidos: ${this.votoRecebido}`)
    }
}
// const vinicius = new candidato('vinicius', 'grove street', 4002, 80)
// vinicius.informacoes()
let votosBrancos = 0
let votosNulos = 0
let votosTotais = 0
let votosValidos = 0
let opcaoMenu = 0

//criando candidatos
let candidatos = []
candidatos.push(new candidato('Carl Johnson','Grove Street','1',0))
candidatos.push(new candidato('Sweet','Grove Street','2',0))

function votar(){
    let votoBranco = 0

    while(votoBranco !== 1 && votoBranco !== 2){
        votoBranco = prompt("Deseja votar em branco?\n[1] Sim \n[2]Não")

        if(votoBranco === null){
            alert("Voto cancelado")
            return;
        }
        votoBranco = parseInt(votoBranco)
    }
    switch(votoBranco){
        case 1:
        alert("voto branco registrado com sucesso!")
            votosBrancos ++
            votosTotais ++
        break;

        case 2:
            candidatos.forEach(function(candidatoAtual){
                candidatoAtual.informacoes()
            })
            let votoTemp = 0
            votoTemp = parseInt(prompt("Digite o número do candidato que deseja votar: "))
            if(votoTemp >= 1 && votoTemp <= candidatos.length){
                candidatos[votoTemp-1].votoRecebido ++
                votosValidos ++
                alert("Voto válido registrado com sucesso!")
            }else{
                votosNulos ++
                alert("Voto nulo registrado com sucesso!")
            }
            votosTotais ++
        break;
    }
}

function verRelatorio(){
    alert('Relatório dos candidatos:')
    candidatos.forEach(function(candidatoAtual){
        candidatoAtual.relatorio()
    })
    alert(`Relatório geral: \nTotal de votos: ${votosTotais} \nVotos válidos${votosValidos} \nVotos nulos: ${votosNulos} \nVotos em branco: ${votosBrancos}`)
}

while(opcaoMenu !== 3){
    opcaoMenu = parseInt(prompt(`Votações GTA San Andreas \n[1] Votar \n[2] Ver Relatório \n[3] Sair do sistema`))
    switch(opcaoMenu){
        case 1:
            votar()
        break;

        case 2:
            verRelatorio()
        break;

        case 3:
            alert("Fechando sistema")
        break;

        default:
            alert("Opção Inválidaa")
        break;
    }
}
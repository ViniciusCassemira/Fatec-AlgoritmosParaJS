let tabuleiro = [[' ',' ',' '],[" "," "," "],[" "," "," "]];
const simbolo = ['X','O']

let jogador = 1
let vencedor = false
let fimJogo = false
let empatou = false
let jogadas = 0

function mostrarTabuleiro(){
    alert(` ${tabuleiro[0][0]} | ${tabuleiro[0][1]} | ${tabuleiro[0][2]}\n-----------\n ${tabuleiro[1][0]} | ${tabuleiro[1][1]} | ${tabuleiro[1][2]}\n-----------\n ${tabuleiro[2][0]} | ${tabuleiro[2][1]} | ${tabuleiro[2][2]}`)
}

function verificarVencedor(){
    //linha
    for(let i = 0; i<3; i++){
        if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro [i][2] && tabuleiro[i][0] !== ' '){
            return true
        }
    }
    //coluna
    for(let i = 0; i<3; i++){
        if (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro [2][i] && tabuleiro[0][i] !== ' '){
            return true
        }
    }
    //diagonal
    if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro [2][2] && tabuleiro[0][0] !== ' '){
            return true
        }
    if (tabuleiro[2][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro [0][0] && tabuleiro[0][0] !== ' '){
            return true
        }
    return false
}

function jogar(){
    while(!fimJogo){
        let linha, coluna
        do{
            linha = parseInt(prompt(`Jogador ${jogador}, escolha uma linha entre 1 e 3`)) -1
        }while(linha < 0 || linha > 2)
        do{
            coluna = parseInt(prompt(`Jogador ${jogador}, escolha uma coluna entre 1 e 3`)) -1
        }while(coluna < 0 || coluna > 2)
        
        if(tabuleiro[linha][coluna] === ' '){
            tabuleiro[linha][coluna] = simbolo[jogador -1]
            jogadas++
        }else{
            alert('Espaço já preenchido!')
            continue
        }   
        mostrarTabuleiro()
        if(verificarVencedor()){
            alert(`Jogador ${jogador} venceu o jogo!`)
            fimJogo = true
            break;
        }      
        if(jogadas == 9){
            alert("O jogo terminou empatado")
            fimJogo = true
            break;
        }
        
        
        if(jogador === 1){
            jogador = 2
        }else{
            jogador = 1
        }
    }
}

jogar()
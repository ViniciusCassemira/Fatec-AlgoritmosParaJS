let alunos = []
let medias = []
let primeiraNota = []
let segundaNota = []
let qntAluno = parseInt(prompt("Quantos alunos: "))

console.log("Média das notas de uma sala")
for(let i=0;i < qntAluno; i++){
    alunos[i] = String(prompt("Nome do aluno(a): "))
    primeiraNota[i] = parseFloat(prompt("Primeira nota: "))
    segundaNota[i] = parseFloat(prompt("Segunda nota: "))
    medias[i] = (primeiraNota[i] + segundaNota[i]) / 2
}
let mediaSala = medias.reduce(function(mediaTotal, mediaAtual){
    return mediaTotal + mediaAtual  
}, 0) / qntAluno;

for(let i = 0; i<qntAluno; i++){
    console.log("Nome do aluno: " + alunos[i])
    console.log("Média do aluno: " + medias[i].toFixed(2))
}

console.log("Média da sala: "+mediaSala.toFixed(2))

let alunoSelecionado = parseInt(prompt("Qual aluno você quer ver os resultados: "))

console.log("Aluno: " + alunos[alunoSelecionado])
console.log("Primeira nota: " + primeiraNota[alunoSelecionado])
console.log("Segunda nota: " + segundaNota[alunoSelecionado])
console.log("Média: " + medias[alunoSelecionado])

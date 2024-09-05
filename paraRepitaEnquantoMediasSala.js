console.log("Média dos alunos")

for(let i = 1; i<11; i++){
    let nota1 = prompt("Primeira nota: ")
    nota1 = parseFloat(nota1)
    while(nota1 === null || nota1 < 0 || isNaN(nota1)){
        nota1 = prompt("Primeira nota: ")
    }
    let nota2 = prompt("Segunda nota: ")
    nota2 = parseFloat(nota2)
    while(nota2 === null || nota2 < 0 || isNaN(nota2)){
        nota2 = prompt("Segunda nota: ")
    }

    media = (nota1 + nota2) / 2
    alert(`Média do aluno ${i}: ${media}`)
    console.log(`Média do aluno ${i}: ${media}`)
}
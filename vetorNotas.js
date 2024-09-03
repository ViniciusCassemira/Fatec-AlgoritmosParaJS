console.log("Nota dos alunos")

let notas = []

for (i=0; i < 7; i++){
    notas[i] = parseFloat(prompt("Nota do aluno da posição " + i +":"))    
}

console.log("Mostrando as notas digitadas")
for(i=0; i < notas.length; i++){
    console.log((i+1)+ "º nota: " + notas[i])
}
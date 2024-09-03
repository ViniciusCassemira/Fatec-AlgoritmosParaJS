let itensChurrasco = []
let valorTotalChurrasco = 0

for (let i=0; i<5; i++){
    itensChurrasco.push({
        nome: prompt("Nome do item:"),
        quantidade: parseInt(prompt("Quantidade do item: ")),
        valor: parseFloat(prompt("Quantidade de cada item: "))
    })
    valorTotalChurrasco += itensChurrasco[i].quantidade * itensChurrasco[i].valor
}

itensChurrasco.forEach(item =>{
    console.log(item)
    console.log(item.nome)
    console.log(item.quantidade)
    console.log(item.valor)
})
console.log(`Valor total de churrasco: R$${valorTotalChurrasco}`)
const totalPessoas = parseInt(prompt("Quantas pessoas vão participar do churrasco?"))

let custoPessoa = valorTotalChurrasco / totalPessoas
console.log(`Valor que cada pessoa pagará pelo churrasco: R$${custoPessoa.toFixed(2)}`)
class Item{
    constructor(nome, quantidade, valorUnitario){
        this.nome = nome
        this.quantidade = quantidade
        this.valorUnitario = valorUnitario
    }

    precoItem(){
        return this.quantidade * this.valorUnitario
    }
}

let itensChurrasco = []
let valorTotalChurrasco = 0

for (let i=0; i<5; i++){
    alert(`Item nº${i+1}`)
    let nome = prompt("Nome do item:")
    let quantidade = parseInt(prompt("Quantidade do item: "))
    let valorUnitario = parseFloat(prompt("Valor de cada item: "))

    let item = new Item(nome, quantidade, valorUnitario)
    itensChurrasco.push(item)

    valorTotalChurrasco += item.precoItem()
}

itensChurrasco.forEach(function(item, indice){
    console.log("Item número "+(indice+1))
    console.log("Nome: "+item.nome)
    console.log("Quantidade: "+item.quantidade)
    console.log("Valor unitário: "+item.valorUnitario)
    console.log("Valor total do item: "+item.precoItem())
    console.log()
})
console.log(`Valor total de churrasco: R$${valorTotalChurrasco}`)
const totalPessoas = parseInt(prompt("Quantas pessoas vão participar do churrasco?"))

let custoPessoa = valorTotalChurrasco / totalPessoas
console.log(`Valor que cada pessoa pagará pelo churrasco: R$${custoPessoa.toFixed(2)}`)

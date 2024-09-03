console.log("Formas de pagamento")

let valor = parseFloat(prompt("Digite o valor do produto: "))
let formaPagamento = parseFloat(prompt("Escolha sua forma de pagamento: 1-Cartão / 2-Pix / 3-Dinheiro"))
let novoValor = 0;

console.log("Valor atual R$:" + valor)

if (formaPagamento == 1){
    novoValor = valor;
    console.log("Você não teve desconto ao pagar com cartão, valor a pagar: R$" + novoValor);
}
else if (formaPagamento == 2){
    novoValor = valor-(valor*0.06);
    console.log("Você teve 6% de desconto ao pagar com PIX, valor a pagar: R$" + novoValor);
}
else if (formaPagamento == 3){
    novoValor = valor-(valor*0.1);
    console.log("Você teve 10% de desconto ao pagar com dinheiro, valor a pagar: R$" + novoValor);
}
else{
    alert("Forma de pagamento não encontrada!");
}
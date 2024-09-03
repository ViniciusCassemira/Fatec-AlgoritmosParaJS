console.log("Calcular pedido mesa simples")
let qntPizza = parseFloat(prompt("Quantas pizzas foram pedidas: "))
let vlrPizza = qntPizza *  45.9

let qntCalzone = parseFloat(prompt("Quantos calzones foram pedidos: "))
let vlrCalzone = qntCalzone * 39.9

let qntRefrigerante = parseFloat(prompt("Quantos refrigerantes foram pedidos: "))
let vlrRefrigerante = qntRefrigerante * 4

let qntJarra = parseFloat(prompt("Quantas jarras foram pedidas: "))
let vlrJarra = qntJarra * 6

let totalMesa = vlrPizza + vlrCalzone + vlrRefrigerante + vlrJarra
let gorgeta = totalMesa * 0.1
let totalPedido = totalMesa + gorgeta

console.log ("O sub-total foi de R$:" + totalMesa)
console.log ("Valor de gorgeta para o garçom R$:" + gorgeta)
console.log ("O valor total foi R$: " + totalPedido)
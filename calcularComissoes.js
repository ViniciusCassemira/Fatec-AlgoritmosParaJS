console.log("Calcule sua comissão")

let qntMuss = parseFloat(prompt("Quantidade vendida de mussarela"));
let qntPres = parseFloat(prompt("Quantidade vendida de presunto"));
let qntMort = parseFloat(prompt("Quantidade vendida de mortadela"));
let qntPeru = parseFloat(prompt("Quantidaede vendida de peito de peru"));

let vlrMuss = qntMuss * 55;
let vlrPres = qntPres * 33;
let vlrMort = qntMort * 23;
let vlrPeru = qntPeru * 85;

let comMuss = vlrMuss * 0.07;
let comPres = vlrPres * 0.04;
let comMort = vlrMort * 0.08;
let comPeru = vlrPeru * 0.02;

let comTotal = comMuss + comPres + comMort + comPeru;
let vlrTotal = vlrMuss + vlrPres + vlrMort + vlrPeru;

console.log("Total em vendas foi R$" + vlrTotal.toFixed(2));
console.log("Comissão da mussarela R$" + comMuss.toFixed(2));
console.log("Comissão do presunto R$" + comPres.toFixed(2));
console.log("Comissão da mortadela R$" + comMort.toFixed(2));
console.log("Comissão do peito de peru R$" + comPeru.toFixed(2));
console.log("Sua comissão total foi R$" + comTotal.toFixed(2));
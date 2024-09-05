let opcaoMenu = 0
let itensAdicionados = 0
let valorPedido = 0
let pedidoFeito = 0
 
function realizarPedido(){
  let opcaoPedido = 0
  
  if(pedidoFeito == 1){
    alert("Você já realizou o pedido")
    return
  }
  while(opcaoPedido !== 99){
    opcaoPedido = parseInt(prompt(`Realize seu pedido \n[10] Visualizar cardápio \n[99] Finalizar/cancelar pedido \nItens adicionados:${itensAdicionados} \nSub-total:R$${valorPedido} \nCódigo do item desejado: `))
 
    switch(opcaoPedido){
        case 1:
          valorPedido += 18.9
          itensAdicionados ++
        break;
        
        case 2:
          valorPedido += 24.9
          itensAdicionados ++
        break;
        
        case 3:
          valorPedido += 28.9
          itensAdicionados ++
        break;
        
        case 4:
          valorPedido += 10
          itensAdicionados ++
        break;
        
        case 5:
          valorPedido += 5.5
          itensAdicionados ++
        break;

        case 10:
            mostrarCardapio()
        break;
        
        case 99:
          if(itensAdicionados < 1){
            alert("Pedido cancelado")
          }else{
            pedidoFeito = 1
            alert("Pedido finalizado com sucesso!")
          }
        break;
 
        default:
          alert("Item não cadastrado ou não encontrado")
        break;
    }
  }
}
 
function mostrarCardapio(){
  alert("Cardápio: \n[1] X-salada -> R$18,90 \n[2] X-Calabresa -> R$24,90 \n[3] X-Tudo -> R$28,90 \n[4] Coca-cola 2L -> R$10,00 \n[5] Suco 600ml -> R$5,50  ")
}

function acompanharPedido(){
    let formaPagamento = 0
    let verificar = false

    if(pedidoFeito < 1){
        alert("Nenhum pedido feito recentemente")
    }else{
        let nome = prompt("Seu nome: ")
        while(verificar == false){
            formaPagamento = parseInt(prompt("Escolha a forma de pagamento: \n[1] Cartao \n[2] Pix \n[3] Dinheiro"))
            switch (formaPagamento){
                case 1:
                    alert(`Cliente:${nome}\nForma de pagamento: Cartão \nDesconto: 0%\nObrigado por comprar conosco! Logo seu pedido ficará pronto`)
                    verificar = true
                break;
                    
                case 2:
                        alert(`Cliente:${nome}\nForma de pagamento: Pix \nDesconto: 10% Novo valor do pedido:R$${valorPedido*0.9}\nObrigado por comprar conosco! Logo seu pedido ficará pronto`)
                        verificar = true
                break;
                    
                case 3:
                        alert(`Cliente:${nome}\nForma de pagamento: Dinheiro \nDesconto: 15% Novo valor do pedido:R$${valorPedido*0.85}\nObrigado por comprar conosco! Logo seu pedido ficará pronto`)
                        verificar = true
                break;
            }
        }
    }
}
 
 
while(opcaoMenu !== 4){
  opcaoMenu = parseInt(prompt('lanchonete fome 0 \n[1] Realizar pedido \n[2] Ver cardápio \n[3] Acompanhar Pedido \n[4] Sair'))
  switch(opcaoMenu){
      case 1:
        realizarPedido()
      break;
 
      case 2:
        mostrarCardapio()
      break;
 
      case 3:
        acompanharPedido()
      break;
 
      case 4:
        alert("Saindo da lanchonete")
      break;
 
      default:
      break;
  }
}
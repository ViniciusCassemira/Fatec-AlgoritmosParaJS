class Produto {
    constructor(nome, quantidade, valorUnitario) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.valorUnitario = valorUnitario;
      this.valorTotal = quantidade * valorUnitario;
    }
  }
  
  let itens = Array(10).fill(null)
  let posicaoAtual = 0;
  
  function mostrarMenu() {
    let opcao;
    do {
      opcao = parseInt(prompt(`Escolha uma opção do menu: \n1 - Ver carrinho \n2 - Add itens \n3 - Atualizar Itens \n4 - Excluir Item \n0 - Sair do sistema`));
    } while (isNaN(opcao) || opcao < 0 || opcao > 4);
    return opcao;
  }
  
  function verCarrinho() {
    if(posicaoAtual == 0){
        alert("Nenhum item no carrinho")
        return
    }
    alert("Posição | Nome | Quantidade | Valor Unitário | Valor Total");
    itens.forEach((item, index) => {
      if (item !== null) {
        alert(`${index + 1} | ${item.nome} | ${item.quantidade} | ${item.valorUnitario} | ${item.valorTotal}`);
      }
    });
  }
  
  function adicionarItem() {
    let nome = prompt("Digite o nome do produto:");
    let quantidade = parseFloat(prompt("Digite a quantidade:"));
    let valorUnitario = parseFloat(prompt("Digite o valor unitário:"));
    
    if (posicaoAtual < 10) {
      itens[posicaoAtual] = new Produto(nome, quantidade, valorUnitario);
      posicaoAtual++;
      alert("Produto adicionado com sucesso!");
    } else {
      alert("O carrinho está cheio");
    }
  }
  
  function atualizarItem() {
    let posicao = parseInt(prompt("Digite a posição do item que deseja atualizar (1 a 10):")) - 1;

    if (posicao >= 0 && posicao < posicaoAtual && itens[posicao] !== null) {
      let nome = prompt(`Nome atual (${itens[posicao].nome}), digite o novo nome:`);
      let quantidade = parseFloat(prompt(`Quantidade atual (${itens[posicao].quantidade}), digite a nova quantidade:`));
      let valorUnitario = parseFloat(prompt(`Preço unitário atual (${itens[posicao].valorUnitario}), digite o novo preço:`));
      
      itens[posicao].nome = nome;
      itens[posicao].quantidade = quantidade;
      itens[posicao].valorUnitario = valorUnitario;
      itens[posicao].valorTotal = quantidade * valorUnitario;
      alert("Item atualizado com sucesso!");
    } else {
      alert("Posição inválida ou vazia");
    }
  }
  
  function excluirItem() {
    let posicao = parseInt(prompt("Digite a posição do item que deseja excluir (1 a 10):")) - 1;
    
    if (posicao >= 0 && posicao < posicaoAtual && itens[posicao] !== null) {
      itens[posicao] = null
      posicaoAtual--;
      for(let i = 1; i < posicaoAtual; i++){
        if(itens[i] === null){
            itens[i] = itens[i+1]
            itens[i+1] = null
        }
      }
      alert("O item foi excluído com sucesso!");
    } else {
      alert("Posição inválida ou sem produto.");
    }
  }
  
  function main() {
    let opcao;
    do {
      opcao = mostrarMenu();
      switch(opcao) {
        case 1:
          verCarrinho();
          break;
        case 2:
          adicionarItem();
          break;
        case 3:
          atualizarItem();
          break;
        case 4:
          excluirItem();
          break;
        case 0:
          alert("Até a próxima!");
          break;
      }
    } while (opcao !== 0);
  }
  
  main();
  
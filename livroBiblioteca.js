//variáveis globais
let opcaoMenu = 0
let livros=[]
 
//classes
class livro{
  constructor(titulo, autor, ano, isbn){
    this.titulo = titulo
    this.autor = autor
    this.ano = ano
    this.isbn = isbn
  }
  mostrarLivro(indice){
    alert(`Livro N°${indice+1} \nTítulo: ${this.titulo} \nAutor: ${this.autor} \nAno de lançamento: ${this.ano} \nIsbn: ${this.isbn}`)
  }
}
 
//funções
function cadastrarLivro(){
  let tituloTemp = prompt('Nome do livro:')
  let autorTemp = prompt('Autor do livro:')
  let anoTemp = prompt('Ano de lançamento:')
  let isbnTemp = prompt('Código do livro:')
 
  livros.push(new livro(tituloTemp,autorTemp,anoTemp,isbnTemp))
}
function exibirCatalogo(){
  if(livros.length == 0){
    alert('Nenhum livro cadastrado')
    
  }
  livros.forEach(function(livro, indice){
    livro.mostrarLivro(indice)
  })
}
 
function buscarLivro(){
  if(livros.length == 0){
    alert('Nenhum livro cadastrado')
    return;
  }
  let livroExiste = false
  let nomeLivro = prompt('Nome do livro que deseja buscar:')
  
  livros.forEach(function(livroAtual, indice){
    if(nomeLivro == livroAtual.titulo){
      alert('Livro encontrado!')
      livroAtual.mostrarLivro(indice)
      livroExiste = true
    }
  })
  if(livroExiste == false){
    alert('Livro não encontrado')
  }
}
 
while(opcaoMenu !== 4){
  opcaoMenu = parseInt(prompt('Biblioteca do Zé \n[1] Cadastrar Livro \n[2] Exibir catálogo \n[3] Buscar por livro \n[4] Sair do sistema'))
 
  switch(opcaoMenu){
      case 1:
        cadastrarLivro()
      break;
      case 2:
        exibirCatalogo()
      break;
      case 3:
        buscarLivro()
      break;
      case 4:
        alert('Saindo do sistema')
      break;
      default:
        alert('Opção inválida')
      break;
  }
}
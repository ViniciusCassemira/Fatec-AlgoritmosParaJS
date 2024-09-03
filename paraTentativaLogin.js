const usuario = "admin";
const senha = "admin123";

console.log("Realize o login corretamente")
for(let i=0; i<3; i++){
    let tentUsuario = prompt("Digite o usuário: ")
    let tentSenha = prompt("Digite a senha: ")

    if(tentUsuario == usuario && tentSenha == senha){
        console.log("Acesso feito com sucesso")
        break;
    }else if(i == 2){
        console.log("Acesso bloqueado")
    }


}
console.log("Saiu do loop")
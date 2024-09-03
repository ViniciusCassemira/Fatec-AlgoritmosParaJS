let opcMenu = 0

while(opcMenu != 3){
    opcMenu = parseInt(prompt("1 - Falar olá | 2 - falar oi | 3 - fechar menu"))
    if(opcMenu === 1){
        alert("Olá")
    }else if(opcMenu === 2){
        alert("oi")
    }else if(opcMenu === 3){
        alert("fechando menu")
    }
}
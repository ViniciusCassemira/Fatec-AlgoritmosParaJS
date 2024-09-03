function IMC(){
    console.log("Calcule o seu IMC");
    let altura = parseFloat(prompt("Digite sua altura:"))
    let peso = parseFloat(prompt("Digite seu peso:"))
    let imcStatus = "";
    

    let imc = peso / (altura * altura);
    
    if(imc < 17){
        imcStatus = "Muito abaixo do peso"
    }else if(imc >=17 && imc < 18.5){
        imcStatus = "Abaixo do peso";
    }else if(imc >=18.5 && imc < 25){
        imcStatus = "Peso normal";
    }else if(imc >=25 && imc < 29.9){
        imcStatus = "Acima do peso";
    }else if(imc >=30 && imc < 35){
        imcStatus = "Obesidade 1";
    }else if (imc >= 35 && imc <=40){
        imcStatus = "Obesidade 2";
    }else{
        imcStatus = "Obesidade 3";
    }
    console.log("Seu imc atual é " + imc.toFixed(2));
    console.log(imcStatus)
}

IMC()
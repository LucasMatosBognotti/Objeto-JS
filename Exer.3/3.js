function cadastro(){

    var objeto = new Object

    objeto.sexo = prompt("Informe o sexo (M/F):")
    objeto.altura = Number(prompt("Infome a altura:"))
    objeto.idade = Number(prompt("Informe a idade:"))
    objeto.cor = prompt("Informe a cor dos olhos (Azul) (Verde) (Castanho):")   
    vetor.push(objeto)
    alert("CADASTRO SALVO COM SUCESSO!!!")
}

function lista(){
    var saida = ""
    for(var i=0; i<vetor.length; i++){
        saida = saida + (" SEXO: " + vetor[i].sexo + "<br/>" + " ALTURA: " + vetor[i].altura + "<br/>" + "IDADE: " + vetor[i].idade + "</br>" +  " COR DOS OLHOS: " + vetor[i].cor + "<br/>" + "===========================" + "</br>")   
    } 
    document.getElementById("lista").innerHTML = saida
}

function media(){
    var soma = 0
    var media
    for(var i=0; i<vetor.length; i++){
        if((vetor[i].cor=="Castanho") && (vetor[i].altura>1.60)){
            soma = soma +  vetor[i].idade 
        }
    }
    media = soma / i
    document.getElementById("media").innerHTML = "Madia de idades das pessoas com olhos castanhos e altura superior a 1.60 sao : " +  media + " anos "
}

function maior(){
    var maior = 0 
    for(var i=0; i<vetor.length; i++){
        if(vetor[i].idade > maior){
            maior = vetor[i].idade
        }
    }
    document.getElementById("maior").innerHTML = "A maior idade entre os habitantes e : " + maior + " anos "
}

function mulheres(){
    var soma = 0
    for(var i=0; i<vetor.length; i++){
        if(((vetor[i].sexo=="F") && (vetor[i].idade>20 && vetor[i].idade<45)) || ((vetor[i].cor=="Verdes") && (vetor[i].altura<1.70))){
            soma++
        }
    }
    document.getElementById("sexo").innerHTML = "A quantidade de individuos so sexo feminino sao: " + soma
}

function homens(){
    var soma = 0
    var porc 
    for(var i=0; i<vetor.length; i++){
        if(vetor[i].sexo=="M"){
            soma++
        }
    }
    porc = ((soma*100)/i)
    document.getElementById("homens").innerHTML = "A Porcentagem de homens sao: " + porc + "%"
}



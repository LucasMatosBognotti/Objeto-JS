function cadastro(){
    
    var objeto = new Object

    objeto.idade = Number(prompt("Informe a idade:"))
    objeto.sexo = prompt("Informe o sexo (M/F) :")
    objeto.renda = Number(prompt("Informe a renda familiar:"))
    objeto.filho = Number(prompt("Informe a quantidade de filhos:"))
    vetor.push(objeto)
    alert("CADASTRO SALVO COM SUCESSO!!!")
}

function lista(){
    var saida = ""
    for(var i=0; i<vetor.length; i++){
        saida = saida + (" IDADE: " + vetor[i].idade + " ANOS " + "<br/>" + " SEXO: " + vetor[i].sexo + "<br/>" + "RENDA: " + "R$" + vetor[i].renda + "</br>" +  "QUANTIDADE DE FILHOS: " + vetor[i].filho + "<br/>" + "===========================" + "</br>")   
    } 
    document.getElementById("lista").innerHTML = saida
}

function media(){
    soma = 0
    for(var i=0; i<vetor.length; i++){
        soma = soma + vetor[i].renda
    }
    media = soma / i
    document.getElementById("media").innerHTML = "A media dos salarios dos habitantes sao: " + "R$" + media.toFixed(2)
}
function idade(){
    var maior = 0
    var menor = vetor[0].idade
    for(var i=0; i<vetor.length; i++){
        if(vetor[i].idade > maior){
            maior = vetor[i].idade
        }
        if(vetor[i].idade < menor){
            menor = vetor[i].idade
        }
    }
    document.getElementById("idademaior").innerHTML = "A maior idade do grupo e: " + maior + " anos " 
    document.getElementById("idademenor").innerHTML = "A menor idade do grupo e: " + menor + " anos "
}
function mulheres(){
    var soma = 0
    for(var i=0; i<vetor.length; i++){
        if((vetor[i].sexo=="F") && (vetor[i].filho>2) && (vetor[i].renda<600)){
            soma++
        }
    }
    document.getElementById("mulheres").innerHTML = "A quantidade de Mulheres com mais de 2 filhos e a renda familiar menores que R$600 sao de : " + soma 
}
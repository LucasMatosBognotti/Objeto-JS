function cadastro(){

    var objeto = new Object

    objeto.nome = prompt("Infome o nome do estado:")
    objeto.numveiculos = Number(prompt("Informe o numero de veiculos que circularam no ano de 2012:"))
    objeto.numacidentes = Number(prompt("Infome o numero de acidentes no ano de 2012:"))
    vetor.push(objeto)
    alert("ESTADO CADASTRADO COM  SUCESSO!!!")

}

function analise(){

    var maior = vetor[0].numacidentes
    var menor = vetor[0].numacidentes

    for(var i=0; i<vetor.length; i++){
        if(vetor[i].numacidentes > maior){
            maior = vetor[i].numacidentes
        }
        if(vetor[i].numacidentes < menor){
            menor = vetor[i].numacidentes
        }
    }
    var posmaior = vetor.indexOf(maior)
    alert(posmaior)
    document.getElementById("analise").innerHTML = "O ESTADO COM MAIOR INDICE DE ACIDENTES É: " + vetor[posmaior+1].nome
    var posmenor = vetor.indexOf(menor)
    document.getElementById("analise").innerHTML = "O ESTADO COM MENOR INDICE DE ACIDENTES É: " + vetor[posmaior+1].nome
}

function percentual(){
    var total = 0
    var porc = "" 
    for(var i=0; i<vetor.length; i++){
        total = total + vetor[i].numveiculos
    }
    for(var i=0; i<vetor.length; i++){
        porc = porc + ("PORCENTAGEM DE VEICULOS NO ESTADO DE " + vetor[i].nome + " É : " + vetor[i].numveiculos*100./total + "%" + "</br>")    
    }
    document.getElementById("percentual").innerHTML = porc
}

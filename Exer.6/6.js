function cadastro(){

    var objeto = new Object

        objeto.numcliente = Number(prompt("Informe o numero do cadastro:"))
        objeto.nome = prompt("Infome o nome do Cliente:")
        objeto.telefone = prompt("Informe o telefone:")
        objeto.endereco = prompt("Infome o endereço:")
        objeto.numconta = Number(prompt("Infome o numero da conta:"))
        objeto.saldo = Number(prompt("Infome o saldo:"))
        vetor.push(objeto)
        alert("CADASTRO SALVO COM SUCESSO!!!")   
        
}
function verificar(){
    var cont = 0 
    var num = Number(prompt("Insira o numero para verificar se o cliente foi cadastrado:"))
    for(var i=0; i<vetor.length; i++){
        if(vetor[i].numcliente == num){
            alert("CLIENTE JA CADASTRADO!!!")
        cont++
        }
    }
    if(cont==0){
        alert("CLIENTE NAO CADASTRADO!!!")
        cadastro(vetor)
    }
}

function lista(){
    var saida = ""
    for(var i=0; i<vetor.length; i++){
        saida = saida + ("NUMERO DO CLIENTE: " + vetor[i].numcliente + "</br>" + "NOME: " + vetor[i].nome + "</br>" + "TELEFONE: " + vetor[i].telefone + "</br>" + "ENDEREÇO: " + vetor[i].endereco + "</br>" + "NUMERO DA CONTA: " + vetor[i].numconta + "</br>" + "SALDO DA CONTA: " + "R$" + vetor[i].saldo.toFixed(2) + "</br>" + "================================" + "</br>") 
    }
    document.getElementById("lista").innerHTML = saida
}

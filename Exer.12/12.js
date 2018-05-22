function casdastro(){

    var objeto = new Object

    objeto.codigocli = Number(prompt("Informe o codigo do cliente:"))
    objeto.nome = prompt("Informe o nome do cliente:")
    objeto.endereco = prompt("Infome o endereço do cliente:")
    objeto.fone = prompt("Informe o telefone do cliente:")

    vetor1.push(objeto)
    alert("CADASTRO SALVO COM SUCESSO!!!")
}

function recebimento(){

    var objeto = new Object

    objeto.numdoc = Number(prompt("Informe o numero do documento:"))
    objeto.valordoc = Number(prompt("Informe o valor da conta a ser paga:"))
    objeto.dataemiss = prompt("Informe a data de emissao da conta:")
    objeto.datavenci = prompt("Infome a data de vencimento:")
    objeto.codigocli = Number(prompt("Informe o codigo do cliente:"))
    
    vetor2.push(objeto)
    alert("CADASTRO SALVO COM SUCESSO!!!")
} 

function verificar(){

    var codigo = Number(prompt("Informe o codigo para ser verificado:"))
    var cont = 0
    for (var i=0; i<vetor1.length; i++){
        if(vetor1[i].codigocli == codigo){
            alert("CADASTRO JA EXISTENTE!!!")
            cont++
        }
    }  
    if(cont==0){
        alert("O CODIGO PODE SER CADASTRADO!!!")
    }
}

function altera(){

    var codigo = Number(prompt("Informeo codigo do cliente para ser alterado:"))

    for(var i=0; i<vetor1.length; i++){
        if(vetor1[i].codigocli==codigo){
            var posicao = i
        break;
        }
    }
    if(i==vetor1.length){
        alert("CADASTRO NAO ENCONTRADO !!!")
    }else{
        var nome = prompt("Informe o nome do cliente:")
        var endereco = prompt("Infome o endereço do cliente:")
        var fone = prompt("Informe o telefone do cliente:")
        vetor1[posicao].nome = nome
        vetor1[posicao].endereco = endereco
        vetor1[posicao].fone = fone
        alert("CADASTRO ATUALIZADO COM SUCESSO!!!")
    }
}

function lista(){

    var saida = ""

    for(var i=0; i<vetor1.length; i++){
        saida = saida + ("CODIGO DO CLIENTE: " + vetor1[i].codigocli + "<br>" + "NOME DO CLIENTE: " + vetor1[i].nome + "<br>" + "ENDEREÇO DO CLIENTE: " + vetor1[i].endereco + "<br>" + "TELEFONE: " + vetor1[i].fone + "<br>" + "============================" + "<br>"
                        + "NUMERO DO DOCUMENTO: " + vetor2[i].numdoc + "<br>" + "VALOR: " + "R$" + vetor2[i].valordoc + "<br>" + "DATA DE EMISSÃO: " + vetor2[i].dataemiss + "<br>" + "DATA DE VENCIMENTO: " + vetor2[i].datavenci + "<br>" + "============================" + "<br>")
    }
    document.getElementById("lista").innerHTML = saida
}
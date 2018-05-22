function cadastro(){

    var objeto = new Object

    objeto.nome = prompt("Informe o nome do funcionario:")
    objeto.salario = Number(prompt("Informe o salario do funcionario:"))
    objeto.vendas = Number(prompt("Informe o total de vendas do funcionario:"))
    vetor1.push(objeto)
    alert("CADASTRO SALVO COM SUCESSO!!!")
}

function calcular(){

    var objeto = new Object

    for(var i=0; i<vetor1.length; i++){
        objeto.comissao = vetor1[i].vendas * 0.06 
        objeto.total =  vetor1[i].vendas * 0.06 + vetor1[i].vendas
    }
    vetor2.push(objeto)
}

function lista(){
    var saida = ""
    
    for(var i=0; i<vetor1.length; i++){
        saida = saida + ("NOME DO FUNCIONARIO:" + vetor1[i].nome + "</br>" + "SALARIO FIXO: " + "R$" + vetor1[i].salario + "</br>" + "TOTAL DE VENDAS:" + "R$" + vetor1[i].vendas + "</br>" + "COMISSÃO:" + "R$" + vetor2[i].comissao + "</br>" + "SALARIO TOTAL: " + "R$" + vetor2[i].total + "</br>" + "========================" + "</br>")
    }
    document.getElementById("lista").innerHTML = saida
}
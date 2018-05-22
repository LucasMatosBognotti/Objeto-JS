function cadastrocliente(){

    var cliente = new Object

    cliente.codigo = Number(prompt("Informe o codigo do cliente:"))
    cliente.nome = prompt("Infome o nome do cliente:")
    vetorcli.push(cliente)
    alert("CADASTRO DO CLIENTE SALVO COM SUCESSO!!!")
    verificar(vetorcli)
}   

function cadastroconta(){

    var conta = new Object

    conta.numero = Number(prompt("Infome o numero da conta:"))
    conta.valor = Number(prompt("Infome o valor da conta:"))
    conta.codigo = Number(prompt("Infome o codigo do cliente"))
    vetorcont.push(conta)
    alert("CADASTRO DA CONTA SALVO COM SUCESSO!!!")

}

function verificar(){
    var cont = 0
    var codigo = Number(prompt("Informe o codigo para verificar o cadastro do cliente:"))
    for(var i=0; i<vetorcli.length; i++){
        if(vetorcli[i].codigo == codigo){
            alert("CLIENTE JA CADASTRADO!!!")
            cont++
        }
    }
    if(cont==0){
        alert("CLIENTE NAO CADASTRADO!!!")
        cadastrocliente(vetorcli)
    }
}

function excluir(){

    var codigo = Number(prompt("Infome o cliente que deseja remover:"))
    var posicao;
	for(i=0;i<vetorcli.length;i++){
		if(vetorcli[i].codigo == codigo){
			posicao = i;
		break;
		}
    }
	if(i == vetorcli.length){
		alert("Elemento nao encontrado")
	}
    for(var i=0; i<vetorcli.length; i++){
        if(vetorcli[i].codigo == vetorcont[i].codigo){
		    alert("Elemento nao pode ser removido com sucesso!!!");
            break;
        }else{
            vetorcli.splice(posicao,1);
            alert("Element removido com sucesso!!!");
        }
    } 			    
}

function lista(){
    var saida = ""
    for(var i=0; i<vetorcli.length; i++){
        saida = saida + ("CODIGO CLIENTE: " + vetorcli[i].codigo + "</br>" + "NOME: " + vetorcli[i].nome + "</br>" +  "======================" + "</br>" )
    }
    document.getElementById("lista").innerHTML = saida
}
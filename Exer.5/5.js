function cadastro(){

    var objeto = new Object;

    objeto.codigo = Number(prompt("Informe o codigo do produto:"));
    objeto.nome = prompt("Infome o nome do produto:");
    objeto.valor = Number(prompt("Infome o valor unitario do produto:"));
    objeto.qt = Number(prompt("Informe a quantidade no estoque:"));
    vetor.push(objeto);
    ordem(vetor)
    alert("CADASTRO SALVO COM SUCESSO !!! ");
}

function ordem(vetor){
    for(var i=0; i<vetor.length-1; i++){
        for(var j=i+1; j<vetor.length; j++){
            if(vetor[i].codigo>vetor[j].codigo){
                var aux = new Object
                aux = vetor[i]
                vetor[i] = vetor[j]
                vetor[j] = aux
            }
        }
    }
} 

function lista(){
    var saida = "";
    for(var i=0; i<vetor.length; i++){
        saida = saida + (" CODIGO: " + vetor[i].codigo + "</br>" + " NOME DO PRODUTO: " + vetor[i].nome + "</br>" + " VALOR UNITARIO: " + "R$" + vetor[i].valor  +  "</br>" + " QUANTIDADE DO PRODUTO NO ESTOQUE: " + vetor[i].qt + "</br>" +  " ====================================== " + "</br>");
    }
    document.getElementById("lista").innerHTML = saida;
}

function altera(){
    var codigo = Number(prompt("Informe o codigo: ")) 
    var posicao;
 	for(i=0;i<vetor.length;i++){
 		if(vetor[i].codigo == codigo){
 			posicao = i;
 		break;
 		}
 	}
 	if(i == vetor.length){
 		alert("Elemento nao encontrado")
 	}else{
        var nome = prompt("Informe o novo nome do produto:")
        var valor = Number(prompt("Informe o novo valor unitario do produto:"))
        var qt = Number(prompt("Informe a nova quantidade no estoque:"))
        vetor[posicao].nome = nome
        vetor[posicao].valor = valor
        vetor[posicao].qt = qt
 		alert("Elemento atualizado com sucesso")
 	}
}

function excluir(){
    var codigo= Number(prompt("Informe o codigo do produto que deseja remover:"));
	var posicao;
	for(i=0;i<vetor.length;i++){
		if(vetor[i].codigo == codigo){
			posicao = i;
		break;
		}
	}
	if(i == vetor.length){
		alert("Elemento nao encontrado")
	}else{
		vetor.splice(posicao,1);
		alert("Elemento removido com sucesso");
	}	
} 			

function buscar(){
    var numero = Number(prompt("Informe o Codigo para buscar o produto;"));
    numero--;

    if(vetor[numero].codigo == numero){
        document.getElementById("buscar").innerHTML = "Produto não cadastrado";
    }else{
        document.getElementById("buscar").innerHTML = " CODIGO: " +  vetor[numero].codigo + "<br>" + "NOME DO PRODUTO: " + vetor[numero].nome + "<br>" + "VALOR UNITARIO: " + "R$" + vetor[numero].valor + "<br>" + "QUANTIDADE DO PRODUTO NO ESTOQUE: " + vetor[numero].qt;
    }
}

function estoque(){
    var saida = ""
    var cont = 0
    for(var i=0 ; i<vetor.length; i++){
        if(vetor[i].qt<5){
            saida = saida + (" CODIGO: " + vetor[i].codigo + "</br>" + " NOME DO PRODUTO: " + vetor[i].nome + "</br>" + " VALOR UNITARIO: " + "R$" + vetor[i].valor  +  "</br>" + " QUANTIDADE DO PRODUTO NO ESTOQUE: " + vetor[i].qt + "</br>" +  " ====================================== " + "</br>");    
        cont++
        }
    }
    document.getElementById("estoque").innerHTML = saida
    if(cont==0){
        document.getElementById("estoque").innerHTML = "NAO HA PRODUTOS EM ESTOQUE CRITICO"
    }
    
}



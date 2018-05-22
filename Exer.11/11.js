function cadastroMed (){

    var objeto = new Object

    objeto.codigomed = Number(prompt("Informe o codigo do medico:"))
    objeto.nomemed = prompt("Infome o nome do medico:")
    objeto.enderecomed = prompt("Infome o endereço do medico:")
    objeto.salario = Number(prompt("Infome o salario do medico"))
    
    vetor1.push(objeto)
}

function cadastroPac(){

    var objeto = new Object

    objeto.codigopac = Number(prompt("Informe o codigo do paciente:"))
    objeto.nomepac = prompt("Infome o nome do paciente:")
    objeto.idade = Number(prompt("Infome a idade do paciente"))
    objeto.enderecopac = prompt("Infome o endereço do paciente:")

    vetor2.push(objeto)
}

function consultas(){

    var objeto = new Object

    objeto.numeropront = Number(prompt("Infome o numero do prontuario"))
    objeto.data = prompt("Infome a data do consulta:")
    objeto.diagnostico = prompt("Infome o diagnostico do paciente")
    objeto.codigomed = Number(prompt("Informe o codigo do medico:"))
    objeto.codigopac = Number(prompt("Informe o codigo do paciente:"))

    vetor3.push(objeto)
}

function alterarmed(){
    var codigo = Number(prompt("Informe o codigo do medico: ")) 
    var posicao;
 	for(i=0;i<vetor1.length;i++){
 		if(vetor1[i].codigomed == codigo){
 			posicao = i;
 		break;
 		}
 	}
 	if(i == vetor1.length){
 		alert("Elemento nao encontrado")
 	}else{
        var nomemed = prompt("Informe o novo nome do medico:")
        var enderecomed = prompt("Informe o novo endereço do medico:")
        var salario = Number(prompt("Informe a novo salario do medico:"))
        vetor1[posicao].nomemed = nomemed
        vetor1[posicao].enderecomed = enderecomed
        vetor1[posicao].salario = salario
 		alert("Elemento atualizado com sucesso")
 	}
}

function excluirmed(){

    var codigo = Number(prompt("Infome o codigo do alterado para ser excluido:"))
    var posicao
    for(var i=0; i<vetor1.length; i++){
        if(vetor1[i].codigomed == codigo){
            posicao = i
        break
        }
    }
    if(i == vetor1.length){
        alert("Cadastro nao encontrado!!!")
    }
    for(var i=0; i<vetor1.length; i++){
        if(vetor1[i].codigomed == vetor3[i].codigomed){
            alert("Cadastro nao pode ser removido pois existe uma consulta pendente!!!")    
        }else{
            vetor1.splice(posicao,1)
            alert("Cadastro removido com sucesso!!!")
        }
    }
}

function alterarpac(){
    var codigo = Number(prompt("Informe o codigo do paciente: ")) 
    var posicao;
 	for(i=0;i<vetor2.length;i++){
 		if(vetor2[i].codigopac == codigo){
 			posicao = i;
 		break;
 		}
 	}
 	if(i == vetor2.length){
 		alert("Elemento nao encontrado")
 	}else{
        var nomepac = prompt("Informe o novo nome do paciente:")
        var idade = Number(prompt("Informe a nova idade do paciente:"))
        var enderecopac = prompt("Informe o novo endereço do paciente:")
        vetor2[posicao].nomepac = nomepac
        vetor2[posicao].idade = idade
        vetor2[posicao].enderecopac = enderecopac
 		alert("Elemento atualizado com sucesso")
 	}
}

function lista(){

    saida = ""

    for(var i=0; i<vetor1.length; i++){
        saida = saida + ("CODIGO DO MEDICO: " + vetor1[i].codigomed + "</br>" + "NOME DO MEDICO: " + vetor1[i].nomemed + "</br>" + "ENDEREÇO DO MEDICO: " + vetor1[i].enderecomed + "</br>" + "SALARIO DO MEDICO: " + "R$" + vetor1[i].salario + "</br>" + "===============================" + "</br>" 
                        + "CODIGO DO PACIENTE: " + vetor2[i].codigopac + "</br>" + "NOME DO PACIENTE: " + vetor2[i].nomepac + "</br>" + "IDADE DO PACIENTE: " + vetor2[i].idade + "</br>" + "ENDEREÇO DO PACIENTE: " + vetor2[i].enderecopac + "</br>" + "CODIGO DO MEDIO: " + vetor1[i].codigomed + "</br>" + "CODIGO DO PACIENTE: " + vetor2[i].codigopac + "</br>" + "===============================" + "</br>"  
                        + "NUMERO DO PRONTUARIO: " + vetor3[i].numeropront + "</br>" + "DATA DA CONSULTA: " + vetor3[i].data + "</br>" + "DIAGNOSTICO: " + vetor3[i].diagnostico + "</br>" + "CODIGO DO MEDIO: " + vetor3[i].codigomed + "</br>" + "CODIGO DO PACIENTE: " + vetor2[i].codigopac + "</br>" + "================================" + "</br>")
    }
    document.getElementById("lista").innerHTML = saida
}
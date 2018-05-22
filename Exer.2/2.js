function cadastro(){
    
    var objeto = new Object

    objeto.nome = prompt("Informe seu nome:")
    objeto.idade = Number(prompt("Informe sua idade:"))
    objeto.sexo = prompt("Informe o sexo:")
    objeto.salario = Number(prompt("Informe seu salario:"))
    objeto.qtfilho = Number(prompt("Informe a quantidade de filhos:"))
    
   
    vetor.push(objeto)
    alert("HABITANTE CADASTRADO COM SUCESSO!!!")

}
function mulheres(){
    var qtmulher = 0    
    for(var i=0; i<vetor.length; i++){
        if((vetor[i].sexo=="F") && (vetor[i].salario>=1000)){
            qtmulher = qtmulher + 1 
            var mulher = ((qtmulher*100)/i) 
        }
    }    
    document.getElementById("mulheres").innerHTML = mulher
}
function lista(){
    var saida = ""
    for(var i=0; i<vetor.length; i++){
        saida = saida + (" NOME: " + vetor[i].nome + "<br/>" + " IDADE: " + vetor[i].idade + "<br/>" + "SEXO: " + vetor[i].sexo + "</br>" +  " SALARIO: " + "R$" + vetor[i].salario + "<br/>" + " QUANTIDADE DE FILHOS: " + vetor[i].qtfilho + "</br>")
    }
    document.getElementById("lista").innerHTML = saida
}

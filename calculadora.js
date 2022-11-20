/*ex1
let primeiraVar = 10
let segundavar = 100
soma = primeiraVar + segundavar
subtracao = primeiraVar - segundavar
divisao = primeiraVar / segundavar
mult = primeiraVar * segundavar
alert(`a soma dos dois primeiros numeros é: ${soma}, a subtração dos valores é: ${subtracao}, a divisao dos valores é: ${divisao} e a multiplicação dos valores é: ${mult}`)
*/
//===============================================================================================================================================================================================
/*Ex3
function tabuada(){
    for (var count=1; count <= 10 ; count++) {
        document.write("3 x "+count+" = " + (3*count) + "<br />");
        
    }
    
}
*/
//===============================================================================================================================================================================================
/* EX4
function tabuada() {
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var tabuada = '';

    for (var count=1; count<=10 ; count++) {
        tabuada += num+" x "+count+" = "+
               num*count+"<br />";
        resposta.innerHTML = tabuada;

        
    }
}
*/

//============================================================================================================================================================================================

/* EX 5
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
*/
var contadora;
var resueltoOperacion = false;
var resultado;
var ansField;

function llenarValores(valor) {
    ansField = document.forms["calculadora"]["ans"];
    ansField.value += valor;

}

function resolver() {
    document.calculadora.ans.value=eval(document.calculadora.ans.value)
}
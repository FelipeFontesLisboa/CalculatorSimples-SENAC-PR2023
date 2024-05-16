let num1; let num2; let tela; let total;

function entrada() {
  //recupere o elemento pelo id e pegue o campo/value> valor campo
  num1 = document.getElementById("n1").value;
  num2 = document.getElementById("n2").value;

  //tratamento de erro
  if (num1 ===  "") {
    num1 = 0;
    notie.alert({ type: 'error', text: 'Insira Um Valor Numerico !' })
  }
  if (num2 === "") {
    num2 = 0;
    notie.alert({ type: 'error', text: ' Insira Um Valor Numerico !' })
  }
}

//conversao
function conversao() {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
}
//recupere / e imprima na tela
function saida() {
  tela = document.getElementById("resultado");
  tela.innerHTML = `Resultado: ${total}`;
}

function somar() {
  entrada();
  conversao();

  total = num1 + num2;
  saida();
}
function subtrair() {
  entrada();
  conversao();

  total = num1 - num2;
  saida();
}
function dividir() {
  entrada();
  conversao();

  total = num1 / num2;
  saida();
}

function multiplicar() {
  entrada();
  conversao();

  total = num1 * num2;
  saida();
}

//reset  re-loand
function resetCalculatio() {
  notie.confirm({
    text: " Deseja Resetar a Calculadora ?",
    submitText: "SIM", 
    cancelText: "NÃO", 
    position: "buttom",

    submitCallback: function remove(){
      window.location.reload();
    }
  }) 
 }

document.getElementById('meuFormulario').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obter os valores dos campos A e B
  var campoA = parseFloat(document.getElementById('campoA').value);
  var campoB = parseFloat(document.getElementById('campoB').value);

  // Verificar se o número B é maior que o número A
  if (campoB > campoA) {
      document.getElementById('mensagem').innerHTML = 'Formulário válido: B é maior que A.';
      document.getElementById('mensagem').style.color = 'green';
  } else {
      document.getElementById('mensagem').innerHTML = 'Formulário inválido: B deve ser maior que A.';
      document.getElementById('mensagem').style.color = 'red';
  }
});
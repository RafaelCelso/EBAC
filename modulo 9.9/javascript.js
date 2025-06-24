$(document).ready(function() {
  // Adiciona uma tarefa ao clicar no botão
  $("#add-task").click(function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var task = $("#task").val();
    if (task) {
      // Adiciona um novo elemento <li> à lista
      var li = $("<li>");
      li.text(task);
      li.appendTo("#tasks");

      // Limpa o campo de texto
      $("#task").val("");
    }
  });

  // Riscar um item ao clicar nele
  $("#tasks").on("click", "li", function() {
    $(this).toggleClass("completed");
  });
});

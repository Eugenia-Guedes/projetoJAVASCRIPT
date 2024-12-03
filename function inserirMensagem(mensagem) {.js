function inserirMensagem(mensagem) {
  var inserir = $.ajax({
    url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/mensagens',
    method: 'POST',
    data: JSON.stringify(mensagem),
    dataType: 'json',
    async: false,
    contentType: 'application/json',
  }).fail(function (xhr, status, error) {
    console.error('Erro ao enviar mensagem:', error);
    alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
  });

  inserir.done(function () {
    console.log('Mensagem enviada com sucesso!');
  });
}

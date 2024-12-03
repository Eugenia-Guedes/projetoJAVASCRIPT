function enviarMensagem() {
  console.log('Botão "Enviar" clicado.');
      
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagemTexto = document.getElementById('msg').value.trim();
      
      if (!nome || !email || !mensagemTexto) {
      alert('Por favor, preencha todos os campos.');
      console.error('Erro: Campos obrigatórios não preenchidos.');
      return;
      }
      
    const mensagem = {
      nome: nome,
      email: email,
      mensagem: mensagemTexto,
    };
      
    console.log('Objeto mensagem criado:', mensagem);
      
  try {
    inserirMensagem(mensagem); // Chamada da API do arquivo api.js
    alert('Mensagem enviada com sucesso!');
    console.log('Mensagem enviada com sucesso.');
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('msg').value = '';
  } catch (error) {
  console.error('Erro ao enviar mensagem:', error);
  alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
  }
}
console.log('jQuery:', typeof jQuery);
console.log('inserirMensagem:', typeof inserirMensagem);







    document.addEventListener('DOMContentLoaded', function () {
      console.log('Carregando mensagens...');

      // Obtém mensagens usando a função obterMensagens do api.js
      const mensagens = obterMensagens();
      console.log('Mensagens recebidas:', mensagens);

      // Verifica se há mensagens
      if (!mensagens || mensagens.length === 0) {
        document.getElementById('noMessages').style.display = 'block'; // Exibe mensagem de erro
        return;
      }

      // Seleciona o corpo da tabela
      const tbody = document.getElementById('mensagensTable').querySelector('tbody');

      // Preenche a tabela com as mensagens
      mensagens.forEach(msg => {
        const row = document.createElement('tr');

        // Cria as células
        const nomeCell = document.createElement('td');
        nomeCell.textContent = msg.nome;
        row.appendChild(nomeCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = msg.email;
        row.appendChild(emailCell);

        const mensagemCell = document.createElement('td');
        mensagemCell.textContent = msg.mensagem;
        row.appendChild(mensagemCell);

        // Adiciona a linha na tabela
        tbody.appendChild(row);
      });
    });
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnLogin').addEventListener('click', function () {
    console.log('Botão "Entrar" clicado.');

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        console.error('Erro: Campos obrigatórios não preenchidos.');
        return;
    }

    const objLoginSenha = {
    email: email,
    senha: senha,
    };

    console.log('Objeto de login criado:', objLoginSenha);

    try {
    const isValid = validarUsuario(objLoginSenha); // Função do api.js
    console.log('Resultado da validação:', isValid);

    if (isValid) {
    console.log('Login bem-sucedido. Redirecionando para mensagens.html...');
    window.location.href = 'mensagens.html';
    } else {
    console.error('Erro: E-mail ou senha inválidos.');
    document.getElementById('errorMsg').style.display = 'block';
    }
    } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    alert('Erro ao autenticar. Tente novamente mais tarde.');
    }
    });
});
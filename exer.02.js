const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

const salvarUsuarios = () =>
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

const renderizarTabela = () => {
  const tbody = document.querySelector('#tabelaUsuarios tbody');
  tbody.innerHTML = usuarios.map((u) => `
    <tr>
      <td>${u.nome}</td>
      <td>${u.email}</td>
    </tr>
  `).join('');
};

const cadastrarUsuario = () => {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  if (!nome || !email || !senha) {
    return alert('Preencha todos os campos!');
  }

  usuarios.push({ nome, email, senha });
  salvarUsuarios();
  renderizarTabela();

  ['nome', 'email', 'senha'].forEach(id => document.getElementById(id).value = '');
};

renderizarTabela();
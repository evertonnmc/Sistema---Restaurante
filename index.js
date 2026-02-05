const API_URL = "http://127.0.0.1:5000"; //URL base da API
async function carregarTodosUsuarios() {
 //Está função é uma função assíncrona (async). Este tipo de função é usada para tratar
 // erros (exceções) que ocorrem durante a execução do código, impedindo que o
 // programa pare inesperadamente, permitindo que o desenvolvedor lide com falhas
 try {
 //Dentro do 'Try', a função vai 'tentar' fazer o que foi programada
 const response = await fetch(`${API_URL}/usuarios`); //Função JavaScript responsável por fazer requisições HTTP para a API.
 if (!response.ok) throw new Error("Erro ao carregar usuários"); //Checagem para saber se a resposta da API foi ok.
 const usuarios = await response.json(); //Salva a resposta no formato JSON dentro da variável constante 'usuarios'.
 const tbody = document.querySelector("#tabelaUsuarios tbody"); //Pega a tabela do index.html e salva na variável 'tbody'.
 tbody.innerHTML = "";
 usuarios.forEach(user => { //Loop para gerar as linhas da tabela dinamicamente, para cada usuário cadastrado.
 const tr = document.createElement("tr");
 tr.innerHTML = `
 <td>${user.id}</td>
 <td>${user.nome}</td>
 <td>${user.email}</td>
 <td>
 <a class="btn btn-warning" href="updateUsuario.html?id=${user.id}" role="button"">Editar</a>
 </td>
 `;
 tbody.appendChild(tr);
 });
 } catch (err) {
 //Caso a função retorne um erro inesperado, ela entra no 'catch' e retorna um erro.
 alert("Erro: " + err.message);
 }
}
carregarTodosUsuarios(); //Chama a função
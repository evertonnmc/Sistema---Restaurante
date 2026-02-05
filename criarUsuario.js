const API_URL = "http://127.0.0.1:5000"; //URL base da API
async function criarUsuario() {
 try {
 let novoNome = document.getElementById('usuario-nome').value //Pega o nome digitado no input e salva na variável 'novoNome'
 let novoEmail = document.getElementById('usuario-email').value //Pega o email digitado no input e salva na variável 'novoEmail'
 const response = await fetch(`${API_URL}/usuarios`, { //Função JavaScript responsável por fazer requisições HTTP para a API.
 method: "POST", //Método post
 headers: {
 "Content-Type": "application/json" //Cabeçalho HTTP usado na comunicação web para indicar que o corpo da mensagem contémdados formatados como JSON.
 },
 body: JSON.stringify({ nome: novoNome, email: novoEmail })
 });
 if (!response.ok) throw new Error("Erro ao cadastrar usuário.") //Retorna erro se a resposta não for ok
 window.location.href = 'index.html'; //Retorna para a página 'index.html' quando terminar
 } catch (err) {
 alert("Erro: " + err.message);
 }
}
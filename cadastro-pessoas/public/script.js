// Ao enviar o formulário
document.getElementById("form").addEventListener("submit", async function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
 
    // Envia o nome para o servidor
    await fetch("/cadastrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome })
    });
 
    document.getElementById("nome").value = "";
    carregarPessoas();
  });
 
  // Carrega a lista de pessoas
  async function carregarPessoas() {
    const resposta = await fetch("/listar");
    const pessoas = await resposta.json();
 
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    pessoas.forEach(pessoa => {
      const li = document.createElement("li");
      li.textContent = pessoa.nome;
      lista.appendChild(li);
    });
  }
 
  // Carrega ao abrir
  carregarPessoas();
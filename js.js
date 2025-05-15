function alterarTexto() {
    const textoDigitado = document.getElementById("novoInput").value;
    document.getElementById("meuParagrafo").innerText = textoDigitado;
  }
  function mostrarNoConsole() {
    const valor = document.getElementById("meuInput").value;
    console.log(valor);
  }

  function ExibirValor() {
    const valor = document.getElementById("meuInput").value;
    console.log(valor);
  }

  function alterarTexto() {
    const novoTexto = document.getElementById("novoInput").value;
    document.getElementById("meuParagrafo").textContent = novoTexto;
  }

  function mudarCor() {
    const elemento = document.getElementById("cor");
    elemento.style.backgroundColor = "lightblue";
  }

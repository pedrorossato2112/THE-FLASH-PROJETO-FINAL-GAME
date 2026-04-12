// Aquelas 5 Váriaveis Obrigatorias que tinham que ter no site

const idadeMinima = 18;
const anoLancamento = 2026;
const nomeJogo = "The Flash Game";
const desenvolvedor = "Pedro";
const mensagemPadrao = "Bem-vindo ao jogo!";

// Verificação de Idade

let idade = prompt("Digite sua idade:");

let conteudo = document.getElementById("conteudoSensivel");

// Caso de erro ele vem para ca
if (idade === null || idade === "") {
  alert("Idade não informada!");
  conteudo.classList.add("blur");
} else {
  idade = Number(idade);

  if (idade >= idadeMinima) {
    alert("Acesso liberado!");
    conteudo.classList.remove("blur");
  } else {
    alert("Acesso negado!");
    conteudo.classList.add("blur");
  }
}

// Mensagem de Boas Vindas ao nome do jogador

function mostrarNome() {
  let nome = document.getElementById("nomeInput").value;
  let saudacao = document.getElementById("Bem-Vindo");

  if (nome === "") {
    saudacao.innerText = "Digite um nome válido!";
  } else {
    saudacao.innerText = "Olá, " + nome + "! Bem-vindo ao " + nomeJogo;
  }
}

// Tema Escuro e Claro

let botaoTema = document.getElementById("temaBtn");

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-claro");

  if (document.body.classList.contains("tema-claro")) {
    botaoTema.innerText = "Modo Claro";
  } else {
    botaoTema.innerText = "Modo Escuro";
  }
});

// Ano de Lancamento do meu jogo

let anoAtual = new Date().getFullYear();

if (anoAtual === anoLancamento) {
  alert("🚀 2026 e o jogo do ano é: " + nomeJogo + "!");
}
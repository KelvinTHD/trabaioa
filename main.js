// Obter os elementos
const nomeInput = document.getElementById("nome");
const corInput = document.getElementById("cor");
const mensagemDiv = document.getElementById("mensagem");
const resetarBtn = document.getElementById("resetar");
const anoSpan = document.getElementById("ano");
const contactForm = document.getElementById("contact-form");

// Atualizar o ano no rodapé
anoSpan.textContent = new Date().getFullYear();

// Função para mostrar mensagem
function mostrarMensagem() {
    let nome = nomeInput.value;
    let cor = corInput.value;
    if (nome && cor) {
        mensagemDiv.textContent = `Olá, ${nome}! Sua cor favorita é ${cor}.`;
        document.body.style.background = cor;
    } else {
        mensagemDiv.textContent = "Por favor, preencha ambos os campos!";
    }
}

// Adicionar eventos de "keydown" e "change"
nomeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") mostrarMensagem();
});

corInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") mostrarMensagem();
});

// Adicionar evento ao botão de resetar
resetarBtn.addEventListener("click", () => {
    nomeInput.value = "";
    corInput.value = "";
    mensagemDiv.textContent = "";
    document.body.style.background = "linear-gradient(to right, #e3f2fd, #bbdefb)";
});

// Adicionar evento ao formulário de contato
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nomeContato = document.getElementById("nome-contato").value;
    const emailContato = document.getElementById("email-contato").value;
    const mensagemContato = document.getElementById("mensagem-contato").value;

    if (nomeContato && emailContato && mensagemContato) {
        alert(`Obrigado por entrar em contato, ${nomeContato}! Responderemos em breve para o email ${emailContato}.`);
        contactForm.reset();
    } else {
        alert("Por favor, preencha todos os campos do formulário de contato.");
    }
});

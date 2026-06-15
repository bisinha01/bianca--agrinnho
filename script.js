// Menu Mobile Hamburguer
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Lógica do Formulário (Só roda se o formulário existir na página atual)
const form = document.getElementById('agro-form');
const formMensagem = document.getElementById('form-mensagem');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        formMensagem.textContent = `Obrigado, ${nome}! Entraremos em contato pelo e-mail: ${email}.`;
        formMensagem.className = "sucesso";
        
        form.reset();

        setTimeout(() => {
            formMensagem.className = "hidden";
        }, 5000);
    });
}
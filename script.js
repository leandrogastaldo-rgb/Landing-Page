// =========================================================
// MENU MOBILE
// =========================================================

const menuToggle = document.querySelector("#menu-toggle");
const headerNav = document.querySelector("#header-nav");

if (menuToggle && headerNav) {
    menuToggle.addEventListener("click", () => {
        const aberto = headerNav.classList.toggle("nav-links--active");

        menuToggle.setAttribute("aria-expanded", String(aberto));
        menuToggle.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );
    });

    headerNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            headerNav.classList.remove("nav-links--active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
        });
    });
}




 // =========================================================
 // ALTERNADOR DE TEMA CLARO E ESCURO
 // =========================================================

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

if (themeToggle && themeIcon) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

        const temaClaroAtivo =
            document.body.classList.contains("light-theme");

        if (temaClaroAtivo) {

            themeIcon.textContent = "☀️";

            themeToggle.setAttribute(
                "aria-label",
                "Ativar tema escuro"
            );

            themeToggle.setAttribute(
                "title",
                "Ativar tema escuro"
            );

        } else {

            themeIcon.textContent = "🌙";

            themeToggle.setAttribute(
                "aria-label",
                "Ativar tema claro"
            );

            themeToggle.setAttribute(
                "title",
                "Ativar tema claro"
            );

        }

    });

}


// =========================================================
// NEWSLETTER — SOMENTE DEMONSTRAÇÃO
// =========================================================

const newsletterForm = document.querySelector(".newsletter__form");
const newsletterMessage = document.querySelector("#newsletter-message");

if (newsletterForm && newsletterMessage) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!newsletterForm.checkValidity()) {
            newsletterForm.reportValidity();
            return;
        }

        newsletterMessage.textContent =
            "Demonstração concluída! Nenhum e-mail foi cadastrado ou enviado.";

        newsletterForm.reset();
    });
}



// ==========================================================================
//  VALIDAÇÃO DE FORMULÁRIO COM REGEX E FEEDBACK VISUAL
// ==========================================================================

// 1. SELEÇÃO DOS ELEMENTOS DO DOM
const formNewsletter = document.querySelector('.newsletter__form');
const inputEmail = document.querySelector('.newsletter__input');

// 2. CRIAÇÃO DINÂMICA DA MENSAGEM DE FEEDBACK
const feedbackText = document.createElement('small');
feedbackText.style.display = 'block';
feedbackText.style.marginTop = '8px';
feedbackText.style.fontSize = '0.85rem';
feedbackText.style.fontWeight = '600';

// Insere o elemento <small> logo abaixo do input de e-mail
inputEmail.parentNode.appendChild(feedbackText);

// 3. FUNÇÃO QUE VALIDA O FORMULÁRIO VIA REGEX
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email); // Retorna true ou false
}

// 4. ESCUTADOR DE EVENTO 'SUBMIT'
formNewsletter.addEventListener('submit', function(event) {
    // Bloqueia o envio do formulário enquanto validamos
    event.preventDefault();

    const emailValor = inputEmail.value.trim();

    // CHECAGEM DE ERRO: Campo vazio ou e-mail fora do padrão
    if (!validarEmail(emailValor)) {
        // Aplica o feedback visual de ERRO
        feedbackText.textContent = '❌ Por favor, digite um e-mail válido (ex: nome@dominio.com).';
        feedbackText.style.color = '#ef4444'; // Vermelho
        inputEmail.style.borderColor = '#ef4444';
        inputEmail.focus(); // Coloca o cursor de volta no campo
    } else {
        // Aplica o feedback visual de SUCESSO
        feedbackText.textContent = '✅ Inscrição realizada com sucesso!';
        feedbackText.style.color = '#22c55e'; // Verde
        inputEmail.style.borderColor = '#22c55e';

        // Limpa o campo de entrada
        inputEmail.value = '';

        console.log(`[Sucesso] E-mail cadastrado: ${emailValor}`);

        // Oculta a mensagem de sucesso após 4 segundos
        setTimeout(function() {
            feedbackText.textContent = '';
            inputEmail.style.borderColor = ''; // Restaura a borda padrão do CSS
        }, 4000);
    }
});
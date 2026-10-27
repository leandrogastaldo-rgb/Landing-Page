
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
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");

        const temaClaroAtivo =
            document.body.classList.contains("light-theme");

        if (temaClaroAtivo) {
            themeIcon.textContent = "☀️";
            themeToggle.setAttribute("aria-label", "Ativar tema escuro");
            themeToggle.setAttribute("title", "Ativar tema escuro");
        } else {
            themeIcon.textContent = "🌙";
            themeToggle.setAttribute("aria-label", "Ativar tema claro");
            themeToggle.setAttribute("title", "Ativar tema claro");
        }
    });
}


// =========================================================
// NEWSLETTER — VALIDAÇÃO COM REGEX E FEEDBACK VISUAL
// =========================================================

const formNewsletter = document.querySelector(".newsletter__form");
const inputEmail = document.querySelector(".newsletter__input");
const newsletterMessage = document.querySelector("#newsletter-message");

if (formNewsletter && inputEmail && newsletterMessage) {

    // Cria a mensagem de feedback abaixo do campo de e-mail
    const feedbackText = document.createElement("small");

    feedbackText.style.display = "block";
    feedbackText.style.marginTop = "8px";
    feedbackText.style.fontSize = "0.85rem";
    feedbackText.style.fontWeight = "600";

    // Insere o feedback logo abaixo do campo
    inputEmail.insertAdjacentElement("afterend", feedbackText);

    // Regex para verificar a estrutura básica do e-mail
    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    // Validação e feedback visual durante o preenchimento
    inputEmail.addEventListener("input", () => {
        feedbackText.textContent = "";
        feedbackText.style.color = "";
        inputEmail.style.borderColor = "";
        newsletterMessage.textContent = "";
    });

    // Validação ao enviar o formulário
    formNewsletter.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailValor = inputEmail.value.trim();

        // Verifica se o e-mail está vazio ou fora do padrão
        if (!validarEmail(emailValor)) {
            feedbackText.textContent =
                "❌ Por favor, digite um e-mail válido (ex: nome@dominio.com).";

            feedbackText.style.color = "#ef4444";
            inputEmail.style.borderColor = "#ef4444";

            inputEmail.focus();
            return;
        }

        // Feedback de sucesso — demonstração acadêmica
        feedbackText.textContent =
            "✅ Inscrição realizada com sucesso!";

        feedbackText.style.color = "#22c55e";
        inputEmail.style.borderColor = "#22c55e";

        // Registra apenas no console para fins acadêmicos
        console.log("[Demonstração] E-mail validado:", emailValor);

        // Limpa o campo após a validação
        inputEmail.value = "";

        // Oculta a mensagem e restaura a borda após 4 segundos
        setTimeout(() => {
            feedbackText.textContent = "";
            inputEmail.style.borderColor = "";
        }, 4000);
    });
}

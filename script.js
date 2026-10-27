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
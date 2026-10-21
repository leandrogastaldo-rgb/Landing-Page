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
// ALTERNADOR DE TEMA
// =========================================================

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

if (themeToggle && themeIcon) {
    themeToggle.addEventListener("click", () => {
        const temaClaro = document.body.classList.toggle("light-theme");

        themeIcon.textContent = temaClaro ? "☀️" : "🌙";

        themeToggle.setAttribute(
            "aria-label",
            temaClaro ? "Ativar tema escuro" : "Ativar tema claro"
        );

        themeToggle.setAttribute(
            "title",
            temaClaro ? "Ativar tema escuro" : "Ativar tema claro"
        );
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
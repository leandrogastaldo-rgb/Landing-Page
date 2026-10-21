
// ==========================================================
// PATY CALÇADOS
// MÓDULO 3 — AULA 1: NEWSLETTER
// MÓDULO 3 — AULA 2: MENU MOBILE E ALTERNADOR DE TEMA
// ==========================================================


// ==========================================================
// 1. NEWSLETTER — DEMONSTRAÇÃO
// ==========================================================

const formNewsletter = document.querySelector(".newsletter__form");
const inputEmail = document.querySelector(".newsletter__input");
const btnSubmit = document.querySelector(".btn--form");
const mensagemNewsletter = document.querySelector("#newsletter-message");

if (formNewsletter && inputEmail && btnSubmit) {
    formNewsletter.addEventListener("submit", function (event) {
        // Impede o recarregamento da página.
        event.preventDefault();

        // Obtém o e-mail e remove espaços extras.
        const emailValor = inputEmail.value.trim();

        // Verifica se o e-mail foi preenchido corretamente.
        if (inputEmail.checkValidity() && emailValor !== "") {
            // Altera o botão para demonstrar o envio.
            btnSubmit.textContent = "Demonstração concluída! 🎉";
            btnSubmit.style.backgroundColor = "#22c55e";
            btnSubmit.disabled = true;

            // Exibe uma mensagem sem afirmar que houve cadastro real.
            if (mensagemNewsletter) {
                mensagemNewsletter.textContent =
                    "Teste concluído! Seu e-mail não foi cadastrado.";
                mensagemNewsletter.classList.add("success");
            }

            // Exibe a informação no console para fins acadêmicos.
            console.log(
                "[DEMONSTRAÇÃO] E-mail informado no formulário:",
                emailValor
            );

            // Limpa o campo.
            inputEmail.value = "";

            // Restaura o botão após 3 segundos.
            setTimeout(function () {
                btnSubmit.textContent = "Quero Desconto 🎁";
                btnSubmit.style.backgroundColor = "";
                btnSubmit.disabled = false;
            }, 3000);
        } else {
            inputEmail.reportValidity();
        }
    });
}


// ==========================================================
// 2. MENU MOBILE — classList.toggle()
// ==========================================================

const menuToggle = document.querySelector("#menu-toggle");
const headerNav = document.querySelector("#header-nav");

if (menuToggle && headerNav) {
    menuToggle.addEventListener("click", function () {
        // Adiciona ou remove a classe responsável por exibir o menu.
        headerNav.classList.toggle("nav-links--active");

        // Verifica se o menu está aberto.
        const menuAberto = headerNav.classList.contains("nav-links--active");

        // Atualiza os atributos de acessibilidade.
        menuToggle.setAttribute("aria-expanded", menuAberto);
        menuToggle.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );

        menuToggle.setAttribute(
            "title",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );
    });

    // EXTRA DA ATIVIDADE:
    // Fecha o menu mobile quando um link é clicado.
    const linksMenu = headerNav.querySelectorAll("a");

    linksMenu.forEach(function (link) {
        link.addEventListener("click", function () {
            headerNav.classList.remove("nav-links--active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
            menuToggle.setAttribute("title", "Abrir menu");
        });
    });

    // Fecha o menu se a janela voltar para o tamanho de desktop.
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            headerNav.classList.remove("nav-links--active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
            menuToggle.setAttribute("title", "Abrir menu");
        }
    });
}


// ==========================================================
// 3. ALTERNADOR DE TEMA — DARK / LIGHT MODE
// ==========================================================

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

if (themeToggle && themeIcon) {
    themeToggle.addEventListener("click", function () {
        // Alterna a classe light-theme no elemento body.
        document.body.classList.toggle("light-theme");

        // Verifica qual tema está ativo.
        const temaClaroAtivo = document.body.classList.contains("light-theme");

        // Atualiza o ícone conforme o tema selecionado.
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



// MENU MOBILE
const menuToggle = document.querySelector("#menu-toggle");
const headerNav = document.querySelector("#header-nav");

if (menuToggle && headerNav) {
    menuToggle.addEventListener("click", function () {
        headerNav.classList.toggle("nav-links--active");

        const aberto = headerNav.classList.contains("nav-links--active");

        menuToggle.setAttribute("aria-expanded", aberto);
        menuToggle.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );
    });

    // Fecha o menu quando um link é selecionado.
    headerNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            headerNav.classList.remove("nav-links--active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
        });
    });

    // Fecha o menu ao voltar para a tela desktop.
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            headerNav.classList.remove("nav-links--active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}

// ALTERNADOR MANUAL DE TEMA
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

if (themeToggle && themeIcon) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        const temaClaro = document.body.classList.contains("light-theme");

        themeIcon.textContent = temaClaro ? "☀️" : "🌙";

        themeToggle.setAttribute(
            "aria-label",
            temaClaro ? "Ativar tema escuro" : "Ativar tema claro"
        );
    });
}

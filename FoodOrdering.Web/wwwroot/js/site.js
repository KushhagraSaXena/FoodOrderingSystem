// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

(() => {
    const storageKey = "site-theme";
    const toggleButton = document.querySelector("[data-theme-toggle]");
    const textSpan = toggleButton?.querySelector(".theme-toggle-text");

    const applyTheme = (theme) => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        if (textSpan) {
            textSpan.textContent = theme === "dark" ? "Dark" : "Light";
        }
    };

    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-bs-theme") || "light";
            const nextTheme = currentTheme === "light" ? "dark" : "light";
            localStorage.setItem(storageKey, nextTheme);
            applyTheme(nextTheme);
        });
    }
})();

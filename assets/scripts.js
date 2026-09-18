// MathJax Script

window.MathJax = {
    tex: {
        packages: { '[+]': ['ams'] },
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true
    },
    options: {
        ignoreHtmlClass: 'tex2jax_ignore',
        processHtmlClass: 'tex2jax_process'
    },
    svg: {
        scale: 1.1,
        matchFontHeight: false,
        linebreaks: {
            automatic: true,
            width: 'container'
        }
    },
    chtml: {
        scale: 1.2,
        matchFontHeight: false,
        linebreaks: {
            automatic: true,
            width: 'container'
        }
    }
};

// Script for expandable menu button

const sidebar = document.querySelector(".sidebar");
const menu_button = document.querySelector(".menu-toggle");

menu_button.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menu_button.classList.toggle("active");
});

// Script for switching between light and dark mode

const theme_button = document.getElementById("theme-toggle");
const root = document.documentElement;

function loadTheme() {
    try {
        return localStorage.getItem("theme");
    } catch {
        return null;
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem("theme", theme);
    } catch {
        // Ignore if storage is unavailable
    }
}

function setTheme(theme) {
    root.style.colorScheme = theme;
    theme_button.textContent = "◐";
    saveTheme(theme);
}

const savedTheme = loadTheme();

if (savedTheme === "dark" || savedTheme === "light") {
    setTheme(savedTheme);
} else {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    setTheme(systemTheme);
}

theme_button.addEventListener("click", () => {
    const currentTheme = root.style.colorScheme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(newTheme);
});
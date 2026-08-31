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

const sidebar = document.querySelector(".site__sidebar");
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

const savedTheme = loadTheme();

if (savedTheme) {
    root.style.colorScheme = savedTheme;
    theme_button.textContent = savedTheme === "dark" ? "☀" : "☾";
}

theme_button.addEventListener("click", () => {
    const newTheme =
        root.style.colorScheme === "dark" ? "light" : "dark";

    root.style.colorScheme = newTheme;

    theme_button.textContent = newTheme === "dark" ? "☀" : "☾";

    saveTheme(newTheme);
});

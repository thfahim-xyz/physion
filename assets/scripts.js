// MathJax Script

window.MathJax = {
  tex: {
    packages: { '[+]': ['ams'] },
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  chtml: {
    scale: 1.1,
    matchFontHeight: false,
    displayAlign: 'left',
    displayIndent: '1em'
  },
  svg: {
    scale: 1.1,
    matchFontHeight: false,
    displayAlign: 'left',
    displayIndent: '1em'
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

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
  }
};

const sidebar = document.querySelector(".site__sidebar");
const button = document.querySelector(".menu-toggle");

button.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  button.classList.toggle("active");
});

(function () {
  var root = document.documentElement;
  var storageKey = "portfolio-theme";
  var buttons = [];

  function getInitialTheme() {
    var storedTheme = localStorage.getItem(storageKey);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;

    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(theme === "dark"));
      button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");

      var label = button.querySelector("[data-theme-label]");
      if (label) {
        label.textContent = theme === "dark" ? "Dark" : "Light";
      }
    });
  }

  function toggleTheme() {
    var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  }

  function init() {
    buttons = Array.prototype.slice.call(document.querySelectorAll("[data-theme-toggle]"));
    applyTheme(getInitialTheme());

    buttons.forEach(function (button) {
      button.addEventListener("click", toggleTheme);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();

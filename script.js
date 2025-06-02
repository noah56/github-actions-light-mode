(function () {
  const element = document.querySelector("#logs");
  if (element) {
    element.setAttribute("data-color-mode", "light");

    const style = document.createElement("style");
    style.textContent = `
        #logs[data-color-mode="light"] .color-text-white {
          color: var(--fgColor-default) !important;
        }
      `;
    document.head.appendChild(style);
  }
})();

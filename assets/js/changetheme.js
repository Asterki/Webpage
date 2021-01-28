function setTheme(theme) {
    let body = document.getElementById("body");
    let checkBox = document.getElementById('theme-switch');

    if (checkBox.checked == true) {
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
      } else {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
      }
}
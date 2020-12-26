window.addEventListener('DOMContentLoaded', (e) => {
  const logo = document.querySelectorAll("#logo path");
  setTimeout(fill, 3700);
  function fill() {
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.fill = "white";
    }
  }
});




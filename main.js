const showMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector("nav ul");

showMenu.addEventListener("click", function() {
    menu.style.display = "flex";
    this.style.display = "none";
    closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", function() {
    menu.style.display = "none";
    this.style.display = "none";
    showMenu.style.display = "block";
});

const cssFile = document.getElementById("style-sheet");
const toggleTheme = document.querySelectorAll('.toggle-theme button');
toggleTheme.forEach(btn => {
    btn.addEventListener("click", function() {
        if (cssFile.getAttribute('href') == "dark_style.css") {
            cssFile.href = 'light_style.css';
        } else if (cssFile.getAttribute('href') == "light_style.css") {
            cssFile.href = 'dark_style.css';
        }
    });
});

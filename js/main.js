window.addEventListener('load', () => {
    const hamburger = document.querySelector("#hamburger");
    const close = document.querySelector("#close");
    const menu = document.querySelector(".mobile__nav");

    hamburger.addEventListener('click', () => {
        hamburger.style.display = "none";
        close.style.display = "block";
        menu.style.display = "flex";
    });

    close.addEventListener('click', () => {
        hamburger.style.display = "block";
        close.style.display = "none";
        menu.style.display = "none";
    });
})
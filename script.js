// Burger menu

const menuButton = document.querySelector(".menu-button");
const isActive = document.querySelector(".burger-menu-off");
const menuItems = document.querySelector(".burger-menu-items");

let isOpen = false;

menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("burger-menu-active");

    isOpen = !isOpen;
    if(isOpen) {
        menuButton.innerHTML = '<i class="fa-solid fa-x fa-beat-fade fa-2xl" style="color:#808397; position:fixed; top:45px; right:25px; z-index: 1; opacity: 0.75; --fa-beat-fade-opacity: 0.67; --fa-beat-fade-scale: 1.075;"></i>';
    } else {
        menuButton.innerHTML = '<img src="images/icon-hamburger.svg" alt="Hamburger menu icon">';
    }
});


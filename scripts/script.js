const preloadPage = document.getElementById("preload");
const loadedPage = document.getElementById("loaded");

function loadingPage() {
    // setTimeout(() => {
        preloadPage.style.display = 'none';
        loadedPage.style.display = 'block';
    // }, 5000);
}

const openMenuButton = document.getElementById("mobile-open-menu-icon");
const closeMenuButton = document.getElementById("mobile-close-menu-icon");

const mobileMenu = document.getElementById("mobile-nav-menu-container");
const mobileMenuList = document.getElementsByClassName("mobile-menu-list");
const mobileMenuItems = document.querySelectorAll(".mobile-nav-menu-container .mobile-menu-list .mobile-menu-item");

openMenuButton.addEventListener('click', () => {
    openMenuButton.style.display = 'none';
    closeMenuButton.style.display = 'flex';
    mobileMenu.style.width = '100%';
    mobileMenuList[0].style.display = 'flex';
});

closeMenuButton.addEventListener('click', () => {
    closeMenuButton.style.display = 'none';
    openMenuButton.style.display = 'flex';
    mobileMenu.style.width = '0';
    mobileMenuList[0].style.display = 'none';
});

mobileMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
        closeMenuButton.style.display = 'none';
        openMenuButton.style.display = 'flex';
        setTimeout(() => {
            mobileMenu.style.width = '0';
            mobileMenuList[0].style.display = 'none';
        }, 300);
    });
});
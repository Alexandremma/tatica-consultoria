// PRELOADING PAGE SCRIPT
const preloadPage = document.getElementById("preload");
const loadedPage = document.getElementById("loaded");

function loadingPage() {
    // setTimeout(() => {
        preloadPage.style.display = 'none';
        loadedPage.style.display = 'block';
    // }, 5000);
}

// MOBILE MENU SCRIPT
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

// ACCORDION SCRIPT
const tabs = document.querySelectorAll(".accordion-tab");
const tabButtons = document.querySelectorAll(".accordion-tab-button");
const tabPanel = document.querySelectorAll(".accordion-tab-panel");

const categoryServiceList1 = document.getElementById("category-service-list-1");
const categoryServiceList2 = document.getElementById("category-service-list-2");
const categoryServiceList3 = document.getElementById("category-service-list-3");
const categoryServiceList4 = document.getElementById("category-service-list-4");

tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
        tab.classList.toggle("active-tab");

        console.log('tab.children', tab.children);
        const buttonElement = tab.children[0];
        const panelElement = tab.children[1];

        if (panelElement.style.maxHeight) {
            panelElement.style.maxHeight = null;
        } else {
            panelElement.style.maxHeight = panelElement.scrollHeight + 32 + "px";
            selectedCategory(tab);
        }
    });
});

function selectedCategory(tab) {
    if (tab.classList.contains("accordion-tab-1")) {
        categoryServiceList1.style.display = "flex";
        categoryServiceList2.style.display = "none";
        categoryServiceList3.style.display = "none";
        categoryServiceList4.style.display = "none";
    } else if (tab.classList.contains("accordion-tab-2")) {
        categoryServiceList1.style.display = "none";
        categoryServiceList2.style.display = "flex";
        categoryServiceList3.style.display = "none";
        categoryServiceList4.style.display = "none";
    } else if ((tab.classList.contains("accordion-tab-3"))) {
        categoryServiceList1.style.display = "none";
        categoryServiceList2.style.display = "none";
        categoryServiceList3.style.display = "flex";
        categoryServiceList4.style.display = "none";
    } else if ((tab.classList.contains("accordion-tab-4"))) {
        categoryServiceList1.style.display = "none";
        categoryServiceList2.style.display = "none";
        categoryServiceList3.style.display = "none";
        categoryServiceList4.style.display = "flex";
    } else {
        return;
    }
}
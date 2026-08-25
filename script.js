document.documentElement.classList.add("js");

const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-current-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && menu) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

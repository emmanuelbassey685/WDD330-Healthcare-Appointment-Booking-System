/**
 * ---------------------------------------------------------
 * File: NavigationManager.js
 * Description:
 * Handles responsive navigation menu behavior.
 * ---------------------------------------------------------
 */

export function initNavigation() {

    console.log("NavigationManager loaded");

    const menuToggle = document.querySelector("#menuToggle");
    const navLinks = document.querySelector("#navLinks");

    if (!menuToggle || !navLinks) {
        console.log("Navigation elements not found.");
        return;
    }

    console.log("Navigation initialized.");

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("nav-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";
    });


    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("nav-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.textContent = "☰";

        });

    });

}
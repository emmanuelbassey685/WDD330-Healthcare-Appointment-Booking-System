/**
 * ---------------------------------------------------------
 * File: NavigationManager.js
 * Description:
 * Handles responsive navigation menu behavior.
 * ---------------------------------------------------------
 */

export function initNavigation() {

    const menuToggle = document.querySelector("#menuToggle");
    const navLinks = document.querySelector("#navLinks");

    if (!menuToggle || !navLinks) {
        console.warn("Navigation elements are not ready.");
        return;
    }

    // Prevent duplicate event listeners
    if (menuToggle.dataset.navigationReady === "true") {
        return;
    }

    menuToggle.dataset.navigationReady = "true";

    menuToggle.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

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


    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {

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
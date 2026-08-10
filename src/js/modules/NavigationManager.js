/**
 * ---------------------------------------------------------
 * File: NavigationManager.js
 * Description:
 * Handles responsive navigation menu behavior.
 * ---------------------------------------------------------
 */

export function initNavigation() {

    console.log("🚀 initNavigation() STARTED");

    const menuToggle = document.querySelector("#menuToggle");
    const navLinks = document.querySelector("#navLinks");

    console.log("☰ menuToggle:", menuToggle);
    console.log("🔗 navLinks:", navLinks);

    if (!menuToggle || !navLinks) {
        console.warn("❌ Navigation elements are not ready.");
        return;
    }

    // Prevent duplicate event listeners
    if (menuToggle.dataset.navigationReady === "true") {
        console.log("⚠️ Navigation already initialized.");
        return;
    }

    menuToggle.dataset.navigationReady = "true";

    console.log("✅ Attaching menu event listener");

    menuToggle.addEventListener("click", (event) => {

        console.log("☰ MENU CLICK DETECTED");

        event.preventDefault();
        event.stopPropagation();

        const isOpen =
            navLinks.classList.toggle("nav-open");

        console.log("Menu open:", isOpen);

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
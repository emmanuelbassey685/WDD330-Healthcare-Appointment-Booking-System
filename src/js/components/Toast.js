/**
 * --------------------------------------------------------
 * File: Toast.js
 * Description:
 * Reusable toast notification component.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330
 * --------------------------------------------------------
 */

export function showToast(message, type = "success") {

    const existingToast = document.querySelector(".toast");

    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement("div");

    toast.className = `toast toast-${type}`;

    toast.innerHTML = `
        <span class="toast-icon">
            ${type === "success" ? "✓" : "!"}
        </span>

        <span class="toast-message">
            ${message}
        </span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("toast-show");
    }, 10);

    setTimeout(() => {

        toast.classList.remove("toast-show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 3000);
}
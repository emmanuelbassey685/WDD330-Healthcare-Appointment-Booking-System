/**
 * --------------------------------------------------------
 * File: Layout.js
 * Description:
 * Reusable application layout.
 *
 * --------------------------------------------------------
 */
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";
import { initNavigation } from "../modules/NavigationManager.js";

export default function Layout(content) {

    const layout = `
        ${Navigation()}

        <main class="main-content">
            ${content}
        </main>

        ${Footer()}
    `;

    return layout;
}
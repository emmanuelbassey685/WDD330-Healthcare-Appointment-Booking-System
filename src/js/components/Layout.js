/**
 * ---------------------------------------------------------
 * File: Layout.js
 * Description:
 * Reusable application layout.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330
 * ---------------------------------------------------------
 */

import Navigation from "./Navigation.js";
import Footer from "./Footer.js";

export default function Layout(content) {

    return `
        ${Navigation()}

        <main class="main-content">
            ${content}
        </main>

        ${Footer()}
    `;
}
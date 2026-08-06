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

export default function Layout(content) {

  return `
    ${Navigation()}

    <main class="main-content">
      ${content}
    </main>

    ${Footer()}
  `;
}
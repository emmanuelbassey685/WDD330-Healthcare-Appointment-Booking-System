/**
 * --------------------------------------------------------
 * File: Spinner.js
 * Description:
 * Displays a reusable loading spinner while
 * asynchronous data is being loaded.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

/**
 * Creates a loading spinner.
 *
 * @param {string} message
 * @returns {string}
 */
export default function spinnerTemplate(message = "Loading...") {
  return `
    <section class="spinner">

      <div class="spinner__loader" aria-hidden="true"></div>

      <p class="spinner__message">
        ${message}
      </p>

    </section>
  `;
}
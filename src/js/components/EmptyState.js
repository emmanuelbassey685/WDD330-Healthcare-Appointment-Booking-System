/**
 * --------------------------------------------------------
 * File: EmptyState.js
 * Description:
 * Displays a reusable empty state message when
 * no data is available.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

/**
 * Creates an empty state component.
 *
 * @param {string} title
 * @param {string} message
 * @returns {string}
 */
export default function emptyStateTemplate(
  title = "Nothing Found",
  message = "No data is available."
) {
  return `
    <section class="empty-state">

      <div class="empty-state__icon">
        🔍
      </div>

      <h2 class="empty-state__title">
        ${title}
      </h2>

      <p class="empty-state__message">
        ${message}
      </p>

    </section>
  `;
}
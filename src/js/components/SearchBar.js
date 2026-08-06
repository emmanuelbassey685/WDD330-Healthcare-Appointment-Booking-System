/**
 * --------------------------------------------------------
 * File: SearchBar.js
 * Description:
 * Reusable search bar component.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

/**
 * Creates a reusable search bar.
 *
 * @param {string} placeholder - Placeholder text.
 * @param {string} id - Element ID.
 * @returns {string}
 */
export default function searchBarTemplate(
  placeholder = "Search...",
  id = "searchInput"
) {
  return `
    <section class="search-section">

      <label class="visually-hidden" for="${id}">
        Search
      </label>

      <input
        id="${id}"
        class="search-input"
        type="search"
        placeholder="${placeholder}"
        autocomplete="off"
      >

    </section>
  `;
}
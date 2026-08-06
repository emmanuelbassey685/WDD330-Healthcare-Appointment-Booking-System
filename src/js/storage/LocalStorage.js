/**
 * --------------------------------------------------------
 * File: Storage.js
 * Description:
 * Helper functions for Local Storage.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

/**
 * Save data to localStorage.
 *
 * @param {string} key
 * @param {*} value
 */
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Load data from localStorage.
 *
 * @param {string} key
 * @returns {*}
 */
export function load(key) {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
}

/**
 * Remove an item from localStorage.
 *
 * @param {string} key
 */
export function remove(key) {
  localStorage.removeItem(key);
}

/**
 * Clear all localStorage.
 */
export function clear() {
  localStorage.clear();
}
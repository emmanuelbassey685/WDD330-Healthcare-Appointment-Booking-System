/**
 * --------------------------------------------------------
 * File: Utils.js
 * Description:
 * Shared utility functions used throughout the application.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

/**
 * Generate a unique ID.
 *
 * @returns {string}
 */
export function generateId() {
  return crypto.randomUUID();
}

/**
 * Format a date for display.
 *
 * @param {string} date
 * @returns {string}
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

/**
 * Format a time for display.
 *
 * @param {string} time
 * @returns {string}
 */
export function formatTime(time) {
  return new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

/**
 * Check for an empty string.
 *
 * @param {string} value
 * @returns {boolean}
 */
export function isEmpty(value) {
  return value.trim() === "";
}
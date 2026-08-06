/**
 * --------------------------------------------------------
 * File: Footer.js
 * Description:
 * Reusable footer component.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return `
    <footer class="footer">

      <div class="footer-content">

        <p>
          &copy; ${year} Healthcare Appointment Booking System
        </p>

        <p>
          Developed by Emmanuel Bassey |
          WDD330 - Web Frontend Development II
        </p>

      </div>

    </footer>
  `;
}
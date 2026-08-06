/**
 * --------------------------------------------------------
 * File: Navigation.js
 * Description:
 * Reusable navigation component for the Healthcare
 * Appointment Booking System.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

export default function Navigation() {
  return `
    <header>

      <nav class="navbar">

        <div class="logo">
          🏥 Healthcare Booking
        </div>

        <ul class="nav-links">

          <li>
            <a href="/index.html">Home</a>
          </li>

          <li>
            <a href="/pages/doctors.html">Doctors</a>
          </li>

          <li>
            <a href="/pages/hospitals.html">Hospitals</a>
          </li>

          <li>
            <a href="/pages/appointments.html">Appointments</a>
          </li>

          <li>
            <a href="/pages/pharmacy.html">Pharmacy</a>
          </li>

          <li>
            <a href="/pages/dashboard.html">Dashboard</a>
          </li>

        </ul>

      </nav>

    </header>
  `;
}
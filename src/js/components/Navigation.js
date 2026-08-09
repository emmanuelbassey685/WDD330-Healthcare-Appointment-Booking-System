/**
 * ---------------------------------------------------------
 * File: Navigation.js
 * Description:
 * Reusable responsive navigation component.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330
 * ---------------------------------------------------------
 */

export default function Navigation() {

    return `
        <header>
            <nav class="navbar">

                <div class="logo">
                    🏥 Healthcare Booking
                </div>

                <button
                    id="menuToggle"
                    class="menu-toggle"
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                    aria-controls="navLinks"
                >
                    ☰
                </button>

                <ul
                    id="navLinks"
                    class="nav-links"
                >

                    <li>
                        <a href="/index.html">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="/pages/doctors.html">
                            Doctors
                        </a>
                    </li>

                    <li>
                        <a href="/pages/hospitals.html">
                            Hospitals
                        </a>
                    </li>

                    <li>
                        <a href="/pages/appointments.html">
                            Appointments
                        </a>
                    </li>

                    <li>
                        <a href="/pages/dashboard.html">
                            Dashboard
                        </a>
                    </li>

                    <li>
                        <a href="/pages/pharmacy.html">
                            Pharmacy
                        </a>
                    </li>

                    <li>
                        <a href="/pages/medical-history.html">
                            Medical History
                        </a>
                    </li>

                </ul>

            </nav>
        </header>
    `;
}
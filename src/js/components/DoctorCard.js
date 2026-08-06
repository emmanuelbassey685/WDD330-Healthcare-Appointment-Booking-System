/**
 * --------------------------------------------------------
 * File: DoctorCard.js
 * Description:
 * Renders a reusable doctor card component.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

/**
 * Generate the HTML for a doctor card.
 *
 * @param {Object} doctor - Doctor information.
 * @returns {string} HTML markup for the doctor card.
 */
export default function doctorCardTemplate(doctor) {

  const status = doctor.available ? "Available" : "Busy";
  const statusClass = doctor.available ? "available" : "busy";

  return `
    <article class="doctor-card">

      <img
        class="doctor-image"
        src="${doctor.image}"
        alt="${doctor.name}"
      >

      <div class="doctor-content">

        <h2>${doctor.name}</h2>

        <p><strong>Specialty:</strong> ${doctor.specialty}</p>

        <p><strong>Hospital:</strong> ${doctor.hospital}</p>

        <p><strong>Location:</strong> ${doctor.location}</p>

        <p><strong>Experience:</strong> ${doctor.experience} Years</p>

        <p>
          <strong>Rating:</strong>
          ⭐ ${doctor.rating}
        </p>

        <p class="status ${statusClass}">
          ${status}
        </p>

        <div class="doctor-actions">

          <button class="btn-secondary">
            View Details
          </button>

          <button class="btn-primary">
            Book Appointment
          </button>

        </div>

      </div>

    </article>
  `;
}
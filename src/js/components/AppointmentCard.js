/**
 * --------------------------------------------------------
 * File: AppointmentCard.js
 * Description:
 * Displays one appointment.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

export default function appointmentCardTemplate(appointment) {

  return `
    <article class="appointment-card">

      <h2>${appointment.doctor}</h2>

      <p><strong>Patient:</strong> ${appointment.patientName}</p>

      <p><strong>Hospital:</strong> ${appointment.hospital}</p>

      <p><strong>Date:</strong> ${appointment.date}</p>

      <p><strong>Time:</strong> ${appointment.time}</p>

      <p><strong>Reason:</strong> ${appointment.reason}</p>

      <div class="appointment-actions">

        <button
          class="btn-secondary edit-btn"
          data-id="${appointment.id}">
          Edit
        </button>

        <button
          class="btn-primary delete-btn"
          data-id="${appointment.id}">
          Cancel
        </button>

      </div>

    </article>
  `;
}
/**
 * --------------------------------------------------------
 * File: AppointmentCard.js
 * Description:
 * Reusable appointment card component.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

import { formatDate, formatTime } from "../utils/Utils.js";

export default function appointmentCardTemplate(appointment) {

  return `

    <article class="appointment-card">

      <h2>👤 ${appointment.patientName}</h2>

      <p>
        <strong>📧 Email:</strong><br>
        ${appointment.patientEmail}
      </p>

      <p>
        <strong>📞 Phone:</strong><br>
        ${appointment.patientPhone}
      </p>

      <hr>

      <p>
        <strong>👨‍⚕️ Doctor:</strong><br>
        ${appointment.doctor}
      </p>

      <p>
        <strong>🏥 Hospital:</strong><br>
        ${appointment.hospital}
      </p>

      <p>
        <strong>📅 Appointment Date:</strong><br>
        ${formatDate(appointment.date)}
      </p>

      <p>
        <strong>🕒 Time:</strong><br>
        ${formatTime(appointment.time)}
      </p>

      <p>
        <strong>💬 Reason:</strong><br>
        ${appointment.reason}
      </p>

      <span class="status-badge">
          Scheduled
      </span>

      <div class="card-actions">

        <button
            class="edit-btn"
            data-id="${appointment.id}"
        >
            ✏ Edit
        </button>

        <button
            class="delete-btn"
            data-id="${appointment.id}"
        >
            🗑 Cancel
        </button>

      </div>

    </article>

  `;
}
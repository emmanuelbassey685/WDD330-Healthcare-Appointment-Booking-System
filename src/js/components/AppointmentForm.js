/**
 * --------------------------------------------------------
 * File: AppointmentForm.js
 * Description:
 * Reusable appointment booking form component.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */
export default function appointmentFormTemplate() {
  return `
    <section class="appointment-page">

      <h1>Book an Appointment</h1>

      <form id="appointmentForm" class="appointment-form">

        <div class="form-group">
          <label for="patientName">Full Name</label>
          <input
            type="text"
            id="patientName"
            required
          >
        </div>

        <div class="form-group">
          <label for="patientEmail">Email Address</label>
          <input
            type="email"
            id="patientEmail"
            required
          >
        </div>

        <div class="form-group">
          <label for="patientPhone">Phone Number</label>
          <input
            type="tel"
            id="patientPhone"
            required
          >
        </div>

        <div class="form-group">
          <label for="doctorSelect">Doctor</label>

          <select
            id="doctorSelect"
            required
          >
            <option value="">
              Select Doctor
            </option>
          </select>

        </div>
        <div class="form-group">
        
          <label for="hospitalSelect">
              Hospital
          </label>
          
          <select id="hospitalSelect" required>
          
              <option value="">
                  Select Hospital
              </option>
              
          </select>
        </div>

        <div class="form-group">
          <label for="appointmentDate">
            Appointment Date
          </label>

          <input
            type="date"
            id="appointmentDate"
            required
          >
        </div>

        <div class="form-group">
          <label for="appointmentTime">
            Appointment Time
          </label>

          <input
            type="time"
            id="appointmentTime"
            required
          >
        </div>

        <div class="form-group">
          <label for="reason">
            Reason for Visit
          </label>

          <textarea
            id="reason"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="btn-primary"
        >
          Book Appointment
        </button>

      </form>

    </section>
  `;
}
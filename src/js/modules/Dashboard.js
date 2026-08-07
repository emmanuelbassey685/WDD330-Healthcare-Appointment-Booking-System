/**
 * --------------------------------------------------------
 * File: Dashboard.js
 * Description:
 * Displays user appointments.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */
import Layout from "../components/Layout.js";
import { loadAppointments } from "./AppointmentManager.js";
import appointmentCardTemplate from "../components/AppointmentCard.js";
import { removeAppointment } from "./AppointmentManager.js";

console.log("Dashboard.js loaded");

export function initDashboard() {

  console.log("initDashboard running");

  const app = document.querySelector("#app");

  app.innerHTML = Layout(`
    <section class="dashboard-page">

      <h1>My Appointments</h1>

      <div id="appointmentList"></div>

    </section>
  `);

  renderAppointments();
  attachDeleteListeners();
  attachEditListeners();
}

function renderAppointments() {

  const list = document.querySelector("#appointmentList");

  const appointments = loadAppointments();

  if (appointments.length === 0) {

    list.innerHTML = `
      <p>No appointments booked yet.</p>
    `;

    return;
  }

  list.innerHTML = appointments
    .map(appointmentCardTemplate)
    .join("");

}

function attachDeleteListeners() {
    const buttons = document.querySelectorAll(".delete-btn");
    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const id = button.dataset.id;
            deleteAppointment(id);
        });
    });
}

function deleteAppointment(id) {

    const confirmed = confirm(
        "Are you sure you want to cancel this appointment?"
    );

    if (!confirmed) {
        return;
    }
    removeAppointment(id);
    renderAppointments();
    attachDeleteListeners();
    attachEditListeners();
}

function attachEditListeners() {
  const buttons = document.querySelectorAll(".edit-btn");
  buttons.forEach((button) => {

    button.addEventListener("click", () => {
      console.log("Editing ID:", button.dataset.id);

      localStorage.setItem(
        "editingAppointment",
        button.dataset.id
      );

      window.location.href = "/pages/appointments.html";
    });
  });
}
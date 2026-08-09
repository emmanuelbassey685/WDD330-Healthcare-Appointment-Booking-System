/**
 * ---------------------------------------------------------
 * File: Dashboard.js
 * Description:
 * Displays user appointments and medical history.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * ---------------------------------------------------------
 */

import Layout from "../components/Layout.js";
import {
    loadAppointments,
    removeAppointment
} from "./AppointmentManager.js";

import appointmentCardTemplate from "../components/AppointmentCard.js";
import { showToast } from "../components/Toast.js";
import { getMedicalHistory } from "../services/MedicalHistoryService.js";

console.log("Dashboard.js loaded");

export function initDashboard() {

    console.log("initDashboard running");

    const app = document.querySelector("#app");

    if (!app) {
        console.error("Dashboard app container not found.");
        return;
    }

    // Load data
    const appointments = loadAppointments();
    const medicalHistory = getMedicalHistory() || [];

    // Dashboard layout
    app.innerHTML = Layout(`

        <!-- =========================
             APPOINTMENTS
        ========================== -->

        <section class="dashboard">

            <h1>My Appointments</h1>

            <p class="dashboard-subtitle">
                Manage your scheduled healthcare appointments.
            </p>

            <div id="appointmentList"></div>

        </section>


        <!-- =========================
             MEDICAL HISTORY
        ========================== -->

        <section class="dashboard-medical-history">

            <div class="dashboard-section-header">

                <div>
                    <h2>Medical History</h2>

                    <p>
                        View your recent medical records and
                        healthcare information.
                    </p>
                </div>

                <a
                    href="/pages/medical-history.html"
                    class="btn-primary"
                >
                    Manage Medical History
                </a>

            </div>

            <div id="dashboardMedicalHistory"></div>

        </section>

    `);

    // Render dashboard content
    renderAppointments(appointments);
    renderMedicalHistory(medicalHistory);

    // Attach appointment buttons
    attachDeleteListeners();
    attachEditListeners();

    // Display toast message after redirect
    const toastMessage = sessionStorage.getItem("toastMessage");

    if (toastMessage) {

        showToast(toastMessage);

        sessionStorage.removeItem("toastMessage");
    }
}


/* =========================================================
   APPOINTMENTS
========================================================= */

function renderAppointments(appointments) {

    const list = document.querySelector("#appointmentList");

    if (!list) {
        return;
    }

    if (!appointments.length) {

        list.innerHTML = `

            <div class="empty-dashboard">

                <div class="empty-state__icon">
                    📅
                </div>

                <h2>No Appointments Yet</h2>

                <p>
                    Book your first appointment to get started.
                </p>

                <a
                    href="/pages/appointments.html"
                    class="btn-primary"
                >
                    Book Appointment
                </a>

            </div>

        `;

        return;
    }

    list.innerHTML = appointments
        .map(appointmentCardTemplate)
        .join("");
}


/* =========================================================
   MEDICAL HISTORY
========================================================= */

function renderMedicalHistory(medicalHistory) {

    const container =
        document.querySelector("#dashboardMedicalHistory");

    if (!container) {
        return;
    }

    // No medical records
    if (!medicalHistory.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-state__icon">
                    🩺
                </div>

                <h3>No Medical Records</h3>

                <p>
                    Your medical history will appear here
                    after you add a medical record.
                </p>

                <a
                    href="/pages/medical-history.html"
                    class="btn-primary"
                >
                    Add Medical Record
                </a>

            </div>

        `;

        return;
    }

    // Display medical records
    container.innerHTML = medicalHistory
        .map(record => `

            <article class="medical-history-card">

                <div class="medical-history-card__header">

                    <h3>
                        ${record.condition || "Medical Record"}
                    </h3>

                    <span>
                        ${formatDate(record.date)}
                    </span>

                </div>

                <p>
                    <strong>Doctor:</strong>
                    ${record.doctorName || "Not specified"}
                </p>

                <p>
                    <strong>Treatment:</strong>
                    ${record.treatment || "Not specified"}
                </p>

                <p>
                    <strong>Notes:</strong>
                    ${record.medicalNotes || "No additional notes"}
                </p>

            </article>

        `)
        .join("");
}


/* =========================================================
   DATE FORMATTER
========================================================= */

function formatDate(date) {

    if (!date) {
        return "Date not specified";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return date;
    }

    return parsedDate.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "short",
            day: "numeric"
        }
    );
}


/* =========================================================
   DELETE APPOINTMENT
========================================================= */

function attachDeleteListeners() {

    const buttons =
        document.querySelectorAll(".delete-btn");

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

    // Re-render appointments
    renderAppointments(loadAppointments());

    // Reconnect buttons
    attachDeleteListeners();
    attachEditListeners();

    showToast(
        "Appointment cancelled successfully!"
    );
}


/* =========================================================
   EDIT APPOINTMENT
========================================================= */

function attachEditListeners() {

    const buttons =
        document.querySelectorAll(".edit-btn");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            console.log(
                "Editing ID:",
                button.dataset.id
            );

            localStorage.setItem(
                "editingAppointment",
                button.dataset.id
            );

            window.location.href =
                "/pages/appointments.html";

        });

    });
}
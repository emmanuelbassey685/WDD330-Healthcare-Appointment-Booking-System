/**
 * --------------------------------------------------------
 * File: AppointmentBooking.js
 * Description:
 * Displays the appointment booking page.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330
 * --------------------------------------------------------
 */
import Layout from "../components/Layout.js";
import appointmentFormTemplate from "../components/AppointmentForm.js";
import { getDoctors } from "../services/FHIRService.js";
import { getHospitals } from "../services/HospitalService.js";
import { createAppointment, editAppointment, loadAppointment } from "./AppointmentManager.js";
import { showToast } from "../components/Toast.js";
import { sendAppointmentConfirmation } from "../services/EmailService.js";

const editingId = localStorage.getItem("editingAppointment");

export async function initAppointmentBooking() {
    const app = document.querySelector("#app");
    app.innerHTML = Layout(`
        <section class="appointment-page">

            <h1>Book an Appointment</h1>

            <p>
                Complete the form below to schedule your appointment.
            </p>

            ${appointmentFormTemplate()}

        </section>
    `);

    await populateDoctors();
    await populateHospitals();
    attachFormListener();

    if (editingId) {

        const appointment = loadAppointment(editingId);

        console.log("Loaded Appointment:", appointment);

        populateForm(appointment);

    }
}

async function populateDoctors() {

    const doctors = await getDoctors();
    const select = document.querySelector("#doctorSelect");

    doctors.forEach((doctor) => {

        select.innerHTML += `
            <option value="${doctor.name}">
                ${doctor.name} - ${doctor.specialty}
            </option>
        `;
    });
}

async function populateHospitals() {

    const hospitals = await getHospitals();
    const select = document.querySelector("#hospitalSelect");

    hospitals.forEach((hospital) => {

        select.innerHTML += `
            <option value="${hospital.name}">
                ${hospital.name}
            </option>
        `;

    });

}

async function saveAppointmentForm(event) {

    event.preventDefault();

    const appointment = {

        patientName:
            document.querySelector("#patientName").value,

        patientEmail:
            document.querySelector("#patientEmail").value,

        patientPhone:
            document.querySelector("#patientPhone").value,

        doctor:
            document.querySelector("#doctorSelect").value,

        hospital:
            document.querySelector("#hospitalSelect").value,

        date:
            document.querySelector("#appointmentDate").value,

        time:
            document.querySelector("#appointmentTime").value,

        reason:
            document.querySelector("#reason").value

    };

    try {

        if (editingId) {

            editAppointment(editingId, appointment);
            /*
             * Send an email after the appointment
             * has been successfully updated.
             */

            await sendAppointmentConfirmation(appointment);

            localStorage.removeItem("editingAppointment");

            sessionStorage.setItem(
                "toastMessage",
                "Appointment updated successfully!"
            );

        } else {

            createAppointment(appointment);

            /*
             * Send confirmation after booking.
             */

            await sendAppointmentConfirmation(appointment);

            sessionStorage.setItem("toastMessage", "Appointment booked successfully!");

        }

        window.location.href = "/pages/dashboard.html";

    } catch (error) {

        console.error("Appointment email error:", error);

        showToast(
            "Appointment was saved, but the email notification could not be sent.",
            "error"
        );

        /*
         * We don't redirect here so the user can see
         * the error and try again.
         */
    }
}

function attachFormListener() {
    const form = document.querySelector("#appointmentForm");
    form.addEventListener("submit", saveAppointmentForm);

}

function populateForm(appointment) {

    if (!appointment) return;

    document.querySelector("#patientName").value =
        appointment.patientName;

    document.querySelector("#patientEmail").value =
        appointment.patientEmail;

    document.querySelector("#patientPhone").value =
        appointment.patientPhone;

    document.querySelector("#doctorSelect").value =
        appointment.doctor;

    document.querySelector("#hospitalSelect").value =
        appointment.hospital;

    document.querySelector("#appointmentDate").value =
        appointment.date;

    document.querySelector("#appointmentTime").value =
        appointment.time;

    document.querySelector("#reason").value =
        appointment.reason;

    document.querySelector("button[type='submit']").textContent =
        "Update Appointment";

}
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
import { createAppointment } from "./AppointmentManager.js";
import { getDoctors } from "../services/FHIRService.js";
import { getHospitals } from "../services/HospitalService.js";

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

function saveAppointmentForm(event) {

    event.preventDefault();

    const appointment = {

        patientName: document.querySelector("#patientName").value,
        patientEmail: document.querySelector("#patientEmail").value,
        patientPhone: document.querySelector("#patientPhone").value,

        doctor: document.querySelector("#doctorSelect").value,

        hospital: document.querySelector("#hospitalSelect").value,

        date: document.querySelector("#appointmentDate").value,

        time: document.querySelector("#appointmentTime").value,

        reason: document.querySelector("#reason").value

    };

    createAppointment(appointment);

    alert("Appointment booked successfully!");

    event.target.reset();

}

function attachFormListener() {

    const form = document.querySelector("#appointmentForm");

    form.addEventListener("submit", saveAppointmentForm);

}
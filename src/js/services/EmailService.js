/**
 * ---------------------------------------------------------
 * File: EmailService.js
 * Description:
 * Handles email notifications using EmailJS.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * ---------------------------------------------------------
 */

import emailjs from "@emailjs/browser";

/*
 * EmailJS configuration
 *
 * These values will be supplied through Vite environment
 * variables instead of being hard-coded in the application.
 */

const SERVICE_ID =
    import.meta.env.VITE_EMAILJS_SERVICE_ID;

const TEMPLATE_ID =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const PUBLIC_KEY =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


/**
 * Send an appointment confirmation email.
 *
 * @param {Object} appointment
 * @returns {Promise}
 */
export async function sendAppointmentConfirmation(
    appointment
) {

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {

        console.error(
            "EmailJS configuration is missing."
        );

        return;
    }

    const templateParams = {

        patient_name:
            appointment.patientName,

        patient_email:
            appointment.patientEmail,

        patient_phone:
            appointment.patientPhone,

        doctor:
            appointment.doctor,

        hospital:
            appointment.hospital,

        appointment_date:
            appointment.date,

        appointment_time:
            appointment.time,

        reason:
            appointment.reason || "Not specified"
    };

    try {

        const response =
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                {
                    publicKey: PUBLIC_KEY
                }
            );

        console.log(
            "Appointment confirmation email sent:",
            response.status,
            response.text
        );

        return response;

    } catch (error) {

        console.error(
            "Failed to send appointment confirmation email:",
            error
        );

        throw error;
    }
}
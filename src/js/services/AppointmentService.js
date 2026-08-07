/**
 * --------------------------------------------------------
 * File: AppointmentService.js
 * Description:
 * Handles appointment data using Local Storage.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */
import { load, save } from "../storage/LocalStorage.js";
import { generateId } from "../utils/Utils.js";

const STORAGE_KEY = "appointments";

/**
 * Get all appointments.
 *
 * @returns {Array}
 */
export function getAppointments() {
  return load(STORAGE_KEY) || [];
}

/**
 * Save a new appointment.
 *
 * @param {Object} appointment
 */
export function saveAppointment(appointment) {

  const appointments = getAppointments();

  appointments.push({
    id: generateId(),
    ...appointment,
    createdAt: new Date().toISOString()
  });

  save(STORAGE_KEY, appointments);

}

/**
 * Delete an appointment.
 *
 * @param {string} id
 */
export function deleteAppointment(id) {

  const appointments = getAppointments().filter(
    appointment => appointment.id !== id
  );

  save(STORAGE_KEY, appointments);

}

/**
 * Update an appointment.
 *
 * @param {string} id
 * @param {Object} updatedAppointment
 */
export function updateAppointment(id, updatedAppointment) {

  const appointments = getAppointments().map((appointment) => {

    if (String(appointment.id) === String(id)) {
      return {
        ...appointment,
        ...updatedAppointment
      };
    }

    return appointment;

  });

  save(STORAGE_KEY, appointments);

}

/**
 * Get one appointment by ID.
 *
 * @param {string} id
 * @returns {Object|undefined}
 */
export function getAppointmentById(id) {

    return getAppointments().find(
        appointment => appointment.id === id
    );

}
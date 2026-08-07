/**
 * --------------------------------------------------------
 * File: AppointmentManager.js
 * Description:
 * Handles appointment CRUD operations.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

import { getAppointments, saveAppointment, deleteAppointment, updateAppointment } from "../services/AppointmentService.js";

/**
 * Return all appointments.
 */
export function loadAppointments() {
  return getAppointments();
}

/**
 * Save a new appointment.
 *
 * @param {Object} appointment
 */
export function createAppointment(appointment) {
  saveAppointment(appointment);
}

/**
 * Remove an appointment.
 *
 * @param {string} id
 */
export function removeAppointment(id) {
  deleteAppointment(id);
}

/**
 * Update an appointment.
 *
 * @param {string} id
 * @param {Object} updatedAppointment
 */
export function editAppointment(id, updatedAppointment) {
  updateAppointment(id, updatedAppointment);
}
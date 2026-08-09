/**
 * ----------------------------------------------------
 * File: MedicalHistoryService.js
 * Description:
 * Handles medical history data using Local Storage.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330
 * ----------------------------------------------------
 */

import { load, save } from "../storage/LocalStorage.js";
import { generateId } from "../utils/Utils.js";

const STORAGE_KEY = "medicalHistory";

/**
 * Get all medical history records.
 *
 * @returns {Array}
 */
export function getMedicalHistory() {

    return load(STORAGE_KEY) || [];

}

/**
 * Save a new medical history record.
 *
 * @param {Object} record
 */
export function saveMedicalHistory(record) {

    const records = getMedicalHistory();

    records.push({

        id: generateId(),

        ...record,

        createdAt: new Date().toISOString()

    });

    save(STORAGE_KEY, records);

}

/**
 * Delete a medical history record.
 *
 * @param {string} id
 */
export function deleteMedicalHistory(id) {

    const records =
        getMedicalHistory().filter(
            record => record.id !== id
        );

    save(STORAGE_KEY, records);

}

/**
 * Get one medical history record.
 *
 * @param {string} id
 * @returns {Object|undefined}
 */
export function getMedicalHistoryById(id) {

    return getMedicalHistory().find(
        record => record.id === id
    );

}

/**
 * Update a medical history record.
 *
 * @param {string} id
 * @param {Object} updatedRecord
 */
export function updateMedicalHistory(
    id,
    updatedRecord
) {

    const records =
        getMedicalHistory().map((record) => {

            if (record.id === id) {

                return {
                    ...record,
                    ...updatedRecord
                };

            }

            return record;

        });

    save(STORAGE_KEY, records);

}
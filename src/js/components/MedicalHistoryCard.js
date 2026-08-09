/**
 * ----------------------------------------------------
 * File: MedicalHistoryCard.js
 * Description:
 * Displays an individual medical history record.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330
 * ----------------------------------------------------
 */

import { formatDate } from "../utils/Utils.js";

export default function medicalHistoryCardTemplate(
    record
) {

    return `

        <article
            class="medical-history-card"
            data-id="${record.id}"
        >

            <div class="medical-history-card__header">

                <h2>
                    ${record.condition}
                </h2>

                <span>
                    ${formatDate(record.date)}
                </span>

            </div>


            <div class="medical-history-card__body">

                <p>
                    <strong>Doctor:</strong>
                    ${record.doctorName}
                </p>

                <p>
                    <strong>Treatment:</strong>
                    ${record.treatment || "Not specified"}
                </p>

                <p>
                    <strong>Notes:</strong>
                    ${record.medicalNotes || "No additional notes"}
                </p>

            </div>


            <div class="medical-history-card__actions">

                <button
                    type="button"
                    class="btn-secondary edit-medical-btn"
                    data-id="${record.id}"
                >
                    Edit
                </button>

                <button
                    type="button"
                    class="delete-btn"
                    data-id="${record.id}"
                >
                    Delete
                </button>

            </div>

        </article>

    `;

}
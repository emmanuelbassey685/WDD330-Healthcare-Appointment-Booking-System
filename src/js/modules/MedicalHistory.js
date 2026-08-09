/**
 * ----------------------------------------------------
 * File: MedicalHistory.js
 * Description:
 * Handles the Medical History page.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330
 * ----------------------------------------------------
 */

import Layout from "../components/Layout.js";

import medicalHistoryFormTemplate
    from "../components/MedicalHistoryForm.js";

import medicalHistoryCardTemplate
    from "../components/MedicalHistoryCard.js";

import {
    getMedicalHistory,
    saveMedicalHistory,
    deleteMedicalHistory
} from "../services/MedicalHistoryService.js";


/**
 * Initialize Medical History page.
 */
export function initMedicalHistory() {

    const app =
        document.querySelector("#app");

    app.innerHTML = Layout(`

        <section class="medical-history-page">

            <h1>
                Medical History
            </h1>

            <p class="medical-history-intro">
                Keep track of your previous medical visits,
                treatments, and important health information.
            </p>


            <div class="medical-history-form-container">

                <h2>
                    Add Medical Record
                </h2>

                ${medicalHistoryFormTemplate()}

            </div>


            <section class="medical-history-records">

                <h2>
                    Medical Records
                </h2>

                <div id="medicalHistoryList">

                </div>

            </section>

        </section>

    `);

    renderMedicalHistory();

    attachFormListener();

    attachDeleteListeners();

}


/**
 * Render medical history records.
 */
function renderMedicalHistory() {

    const list =
        document.querySelector(
            "#medicalHistoryList"
        );

    const records =
        getMedicalHistory();

    if (records.length === 0) {

        list.innerHTML = `

            <div class="empty-state">

                <div class="empty-state__icon">
                    🩺
                </div>

                <h2 class="empty-state__title">
                    No Medical Records
                </h2>

                <p class="empty-state__message">
                    You have not added any medical
                    history records yet.
                </p>

            </div>

        `;

        return;

    }

    list.innerHTML = records
        .map(medicalHistoryCardTemplate)
        .join("");

}


/**
 * Attach form submission.
 */
function attachFormListener() {

    const form =
        document.querySelector(
            "#medicalHistoryForm"
        );

    form.addEventListener(
        "submit",
        saveMedicalRecord
    );

}


/**
 * Save medical record.
 */
function saveMedicalRecord(event) {

    event.preventDefault();

    const record = {

        date:
            document.querySelector(
                "#recordDate"
            ).value,

        condition:
            document.querySelector(
                "#condition"
            ).value,

        doctorName:
            document.querySelector(
                "#doctorName"
            ).value,

        treatment:
            document.querySelector(
                "#treatment"
            ).value,

        medicalNotes:
            document.querySelector(
                "#medicalNotes"
            ).value

    };

    saveMedicalHistory(record);

    event.target.reset();

    renderMedicalHistory();

    attachDeleteListeners();

}


/**
 * Attach delete buttons.
 */
function attachDeleteListeners() {

    const buttons =
        document.querySelectorAll(
            ".medical-history-card .delete-btn"
        );

    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const confirmed =
                    confirm(
                        "Are you sure you want to delete this medical record?"
                    );

                if (!confirmed) {
                    return;
                }

                deleteMedicalHistory(
                    button.dataset.id
                );

                renderMedicalHistory();

                attachDeleteListeners();

            }
        );

    });

}
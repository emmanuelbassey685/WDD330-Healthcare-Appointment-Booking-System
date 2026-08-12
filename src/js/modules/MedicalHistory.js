/**
 * ------------------------------------------------------
 * File: MedicalHistory.js
 * Description:
 * Handles the Medical History page.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * ------------------------------------------------------
 */

import Layout from "../components/Layout.js";

import medicalHistoryFormTemplate
    from "../components/MedicalHistoryForm.js";

import medicalHistoryCardTemplate
    from "../components/MedicalHistoryCard.js";

import {
    getMedicalHistory,
    saveMedicalHistory,
    deleteMedicalHistory,
    getMedicalHistoryById,
    updateMedicalHistory
} from "../services/MedicalHistoryService.js";


/**
 * Initialize Medical History page.
 */
export function initMedicalHistory() {

    const app = document.querySelector("#app");

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

                <h2 id="medicalFormTitle">
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

    attachEditListeners();
}


/**
 * Render medical history records.
 */
function renderMedicalHistory() {

    const list = document.querySelector(
        "#medicalHistoryList"
    );

    const records = getMedicalHistory();

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

    const form = document.querySelector(
        "#medicalHistoryForm"
    );

    form.addEventListener(
        "submit",
        saveMedicalRecord
    );

}


/**
 * Save or update medical record.
 */
function saveMedicalRecord(event) {

    event.preventDefault();

    const form = event.target;

    const editingId = form.dataset.editingId;

    const record = {

        date: document.querySelector(
            "#recordDate"
        ).value,

        condition: document.querySelector(
            "#condition"
        ).value,

        doctorName: document.querySelector(
            "#doctorName"
        ).value,

        treatment: document.querySelector(
            "#treatment"
        ).value,

        medicalNotes: document.querySelector(
            "#medicalNotes"
        ).value

    };


    /*
     * If editingId exists,
     * update the existing record.
     */
    if (editingId) {

        updateMedicalHistory(
            editingId,
            record
        );

    } else {

        /*
         * Otherwise create a new record.
         */
        saveMedicalHistory(record);

    }


    /*
     * Reset the form.
     */
    form.reset();

    delete form.dataset.editingId;


    /*
     * Restore Add mode.
     */
    const formTitle =
        document.querySelector(
            "#medicalFormTitle"
        );

    formTitle.textContent =
        "Add Medical Record";


    const submitButton =
        form.querySelector(
            'button[type="submit"]'
        );

    submitButton.textContent =
        "Add Medical Record";


    /*
     * Refresh records.
     */
    renderMedicalHistory();

    attachDeleteListeners();

    attachEditListeners();

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

                attachEditListeners();

            }
        );

    });

}


/**
 * Attach edit buttons.
 */
function attachEditListeners() {

    const buttons =
        document.querySelectorAll(
            ".medical-history-card .edit-medical-btn"
        );


    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                editMedicalRecord(
                    button.dataset.id
                );

            }
        );

    });

}


/**
 * Load an existing medical record
 * into the form for editing.
 */
function editMedicalRecord(id) {

    const record =
        getMedicalHistoryById(id);


    if (!record) {

        alert(
            "Unable to find the selected medical record."
        );

        return;
    }


    /*
     * Populate form fields.
     */
    document.querySelector(
        "#recordDate"
    ).value = record.date || "";


    document.querySelector(
        "#condition"
    ).value = record.condition || "";


    document.querySelector(
        "#doctorName"
    ).value = record.doctorName || "";


    document.querySelector(
        "#treatment"
    ).value = record.treatment || "";


    document.querySelector(
        "#medicalNotes"
    ).value = record.medicalNotes || "";


    /*
     * Store the ID of the record
     * currently being edited.
     */
    const form =
        document.querySelector(
            "#medicalHistoryForm"
        );

    form.dataset.editingId =
        record.id;


    /*
     * Change form heading.
     */
    const formTitle =
        document.querySelector(
            "#medicalFormTitle"
        );

    formTitle.textContent =
        "Edit Medical Record";


    /*
     * Change submit button.
     */
    const submitButton =
        form.querySelector(
            'button[type="submit"]'
        );

    submitButton.textContent =
        "Update Medical Record";


    /*
     * Scroll back to the form.
     */
    document.querySelector(
        ".medical-history-form-container"
    ).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
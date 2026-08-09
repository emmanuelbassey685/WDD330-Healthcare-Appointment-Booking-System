/**
 * ----------------------------------------------------
 * File: MedicalHistoryForm.js
 * Description:
 * Reusable medical history form component.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330
 * ----------------------------------------------------
 */

export default function medicalHistoryFormTemplate() {

    return `

        <form
            id="medicalHistoryForm"
            class="medical-history-form"
        >

            <div class="form-group">

                <label for="recordDate">
                    Date
                </label>

                <input
                    type="date"
                    id="recordDate"
                    required
                >

            </div>


            <div class="form-group">

                <label for="condition">
                    Condition / Reason for Visit
                </label>

                <input
                    type="text"
                    id="condition"
                    placeholder="Example: Annual checkup"
                    required
                >

            </div>


            <div class="form-group">

                <label for="doctorName">
                    Doctor
                </label>

                <input
                    type="text"
                    id="doctorName"
                    placeholder="Doctor's name"
                    required
                >

            </div>


            <div class="form-group">

                <label for="treatment">
                    Treatment
                </label>

                <input
                    type="text"
                    id="treatment"
                    placeholder="Treatment or medication"
                >

            </div>


            <div class="form-group">

                <label for="medicalNotes">
                    Notes
                </label>

                <textarea
                    id="medicalNotes"
                    rows="4"
                    placeholder="Additional medical information..."
                ></textarea>

            </div>


            <button
                type="submit"
                class="btn-primary"
            >
                Add Medical Record
            </button>

        </form>

    `;

}
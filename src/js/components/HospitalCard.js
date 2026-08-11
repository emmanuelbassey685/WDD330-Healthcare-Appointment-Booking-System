/**
 * ---------------------------------------------------
 * File: HospitalCard.js
 * Description:
 * Renders a reusable hospital card.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * ---------------------------------------------------
 */

export default function hospitalCardTemplate(hospital) {

    return `
        <article class="hospital-card">

            <img
                class="hospital-image"
                src="${hospital.image}"
                alt="${hospital.name}"
                loading="lazy"
            >

            <div class="hospital-content">

                <h2>${hospital.name}</h2>

                <p>
                    <strong>City:</strong>
                    ${hospital.city}
                </p>

                <p>
                    <strong>Specialty:</strong>
                    ${hospital.specialty}
                </p>

                <p>
                    <strong>Rating:</strong>
                    ⭐ ${hospital.rating}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${hospital.phone}
                </p>

                <p>
                    <strong>Address:</strong>
                    ${hospital.address}
                </p>

                <p>
                    <strong>Services:</strong><br>
                    ${hospital.services.join(", ")}
                </p>

                <div class="doctor-actions">

                    <button class="btn-secondary">
                        View Details
                    </button>

                    <button class="btn-primary">
                        Book Appointment
                    </button>

                </div>

            </div>

        </article>
    `;
}
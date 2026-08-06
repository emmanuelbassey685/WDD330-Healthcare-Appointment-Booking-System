/**
 * --------------------------------------------------------
 * File: DoctorSearch.js
 * Description:
 * Loads, searches, and displays doctors.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

import { getDoctors } from "../services/FHIRService.js";
import doctorCardTemplate from "../components/DoctorCard.js";
import searchBarTemplate from "../components/SearchBar.js";
import emptyStateTemplate from "../components/EmptyState.js";
import spinnerTemplate from "../components/Spinner.js";
import Layout from "../components/Layout.js";

let doctors = [];

/**
 * Initialize the Doctor Search page.
 */
export async function initDoctorSearch() {
  const app = document.querySelector("#app");

  app.innerHTML = Layout(`

  <section class="doctor-page">

      <h1>Find a Doctor</h1>

      ${searchBarTemplate(
        "Search by doctor, specialty, hospital or location...",
        "doctorSearch"
      )}

      <section id="doctorResults">
          ${spinnerTemplate("Loading doctors...")}
      </section>

  </section>

  `);

  await loadDoctors();

  attachSearchListener();
}

/**
 * Load doctors from the service.
 */
async function loadDoctors() {
  const results = document.querySelector("#doctorResults");

  try {
    doctors = await getDoctors();

    renderDoctors(doctors);

  } catch (error) {

    console.error(error);

    results.innerHTML = emptyStateTemplate(
      "Unable to Load Doctors",
      "Please try again later."
    );
  }
}

/**
 * Render doctor cards.
 *
 * @param {Array} doctorList
 */
function renderDoctors(doctorList) {

  const results = document.querySelector("#doctorResults");

  if (doctorList.length === 0) {

    results.innerHTML = emptyStateTemplate(
      "No Doctors Found",
      "Try another search."
    );

    return;
  }

  results.innerHTML = `
      <div class="card-grid">
        ${doctorList.map(doctorCardTemplate).join("")}
      </div>
  `;
}

/**
 * Attach the search event listener.
 */
function attachSearchListener() {

  const searchInput = document.querySelector("#doctorSearch");

  searchInput.addEventListener("input", filterDoctors);

}

/**
 * Filter doctors as the user types.
 *
 * @param {Event} event
 */
function filterDoctors(event) {

  const keyword = event.target.value
    .trim()
    .toLowerCase();

  const filteredDoctors = doctors.filter((doctor) => {

    return (

      doctor.name.toLowerCase().includes(keyword) ||

      doctor.specialty.toLowerCase().includes(keyword) ||

      doctor.hospital.toLowerCase().includes(keyword) ||

      doctor.location.toLowerCase().includes(keyword)

    );

  });

  renderDoctors(filteredDoctors);

}
/**
 * --------------------------------------------------------
 * File: HospitalSearch.js
 * Description:
 * Loads, searches, and displays hospitals.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

import { getHospitals } from "../services/HospitalService.js";
import hospitalCardTemplate from "../components/HospitalCard.js";
import searchBarTemplate from "../components/SearchBar.js";
import emptyStateTemplate from "../components/EmptyState.js";
import spinnerTemplate from "../components/Spinner.js";
import Layout from "../components/Layout.js";

let hospitals = [];

/**
 * Initialize the Hospital Search page.
 */
export async function initHospitalSearch() {

  const app = document.querySelector("#app");

  app.innerHTML = Layout(`
    
    <section class="hospital-page">
    <h1>Find a Hospital</h1>

    ${searchBarTemplate("Search by hospital, city or specialty...", "hospitalSearch")}
        
    <section id="hospitalResults">
    ${spinnerTemplate("Loading hospitals...")}
    
    </section>
    </section>
    
    `);

  await loadHospitals();

  attachSearchListener();
}

/**
 * Load hospitals.
 */
async function loadHospitals() {

  const results = document.querySelector("#hospitalResults");

  try {

    hospitals = await getHospitals();

    renderHospitals(hospitals);

  } catch (error) {

    console.error(error);

    results.innerHTML = emptyStateTemplate(
      "Unable to Load Hospitals",
      "Please try again later."
    );

  }

}

/**
 * Render hospital cards.
 */
function renderHospitals(hospitalList) {

  const results = document.querySelector("#hospitalResults");

  if (hospitalList.length === 0) {

    results.innerHTML = emptyStateTemplate(
      "No Hospitals Found",
      "Try another search."
    );

    return;

  }

  results.innerHTML = `
      <div class="card-grid">
          ${hospitalList.map(hospitalCardTemplate).join("")}
      </div>
  `;

}

/**
 * Search hospitals.
 */
function attachSearchListener() {

  const input = document.querySelector("#hospitalSearch");

  input.addEventListener("input", filterHospitals);

}

/**
 * Filter hospitals.
 */
function filterHospitals(event) {

  const keyword = event.target.value
    .trim()
    .toLowerCase();

  const filtered = hospitals.filter((hospital) => {
    return (

      hospital.name.toLowerCase().includes(keyword) ||

      hospital.city.toLowerCase().includes(keyword) ||

      hospital.specialty.toLowerCase().includes(keyword) ||

      hospital.address.toLowerCase().includes(keyword) ||

      hospital.services.join(" ").toLowerCase().includes(keyword)

    );

  });

  renderHospitals(filtered);

}
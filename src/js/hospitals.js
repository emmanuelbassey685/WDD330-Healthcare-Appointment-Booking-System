/**
 * --------------------------------------------------------
 * File: hospitals.js
 * Description:
 * Entry point for the Hospitals page.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

import "../css/styles.css";
import "../css/components.css";
import "../css/forms.css";
import "../css/dashboard.css";
import "../css/responsive.css";

import { initHospitalSearch } from "./modules/HospitalSearch.js";

document.addEventListener("DOMContentLoaded", () => {
  initHospitalSearch();
});
/**
 * --------------------------------------------------------
 * File: doctors.js
 * Description:
 * Entry point for the Doctors page.
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

import { initDoctorSearch } from "./modules/DoctorSearch.js";
import { initNavigation } from "./modules/NavigationManager.js";

document.addEventListener("DOMContentLoaded", () => {
  
  initDoctorSearch();
  initNavigation();
});
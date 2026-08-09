import "../css/styles.css";
import "../css/components.css";
import "../css/forms.css";
import "../css/dashboard.css";
import "../css/responsive.css";

import { initDashboard } from "./modules/Dashboard.js";
import { initNavigation } from "./modules/NavigationManager.js";

console.log("dashboard.js loaded");

document.addEventListener("DOMContentLoaded", () => {

    console.log("Starting Dashboard...");

    initDashboard();
    initNavigation();

});
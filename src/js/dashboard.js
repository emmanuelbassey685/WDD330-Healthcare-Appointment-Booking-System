import "../css/styles.css";
import "../css/components.css";
import "../css/forms.css";
import "../css/dashboard.css";
import "../css/responsive.css";

import { initDashboard } from "./modules/Dashboard.js";

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
});
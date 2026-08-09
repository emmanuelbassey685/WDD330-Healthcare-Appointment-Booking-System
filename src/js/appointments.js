import "../css/styles.css";
import "../css/components.css";
import "../css/forms.css";
import "../css/dashboard.css";
import "../css/responsive.css";

import { initAppointmentBooking } from "./modules/AppointmentBooking.js";
import { initNavigation } from "./modules/NavigationManager.js";

document.addEventListener("DOMContentLoaded", () => {
  initAppointmentBooking();
  initNavigation();
});
import "../css/styles.css";
import "../css/components.css";
import "../css/forms.css";
import "../css/responsive.css";

import { initMedicalHistory } from "./modules/MedicalHistory.js";
import { initNavigation } from "./modules/NavigationManager.js";

document.addEventListener("DOMContentLoaded", () => {
    
    initMedicalHistory();
    initNavigation();

    }
);
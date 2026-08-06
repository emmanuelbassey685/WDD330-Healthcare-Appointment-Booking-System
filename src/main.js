import "./css/styles.css";
import "./css/components.css";
import "./css/forms.css";
import "./css/dashboard.css";
import "./css/responsive.css";
import Navigation from "./js/components/Navigation.js";
import Hero from "./js/components/Hero.js";
import FeatureCards from "./js/components/FeatureCards.js";
import Footer from "./js/components/Footer.js";

document.querySelector("#app").innerHTML = `
${Navigation()}
${Hero()}
${FeatureCards()}
${Footer()}

`;
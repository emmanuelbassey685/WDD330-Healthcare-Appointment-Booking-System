import "./css/styles.css";
import "./css/responsive.css";
import Navigation from "./js/ui/Navigation.js";
import Hero from "./js/ui/Hero.js";
import FeatureCards from "./js/ui/FeatureCards.js";
import Footer from "./js/ui/Footer.js";

document.querySelector("#app").innerHTML = `
${Navigation()}
${Hero()}
${FeatureCards()}
${Footer()}

`;
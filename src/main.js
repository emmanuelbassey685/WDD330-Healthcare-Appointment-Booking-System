import "./css/styles.css";
import "./css/components.css";
import "./css/forms.css";
import "./css/dashboard.css";
import "./css/responsive.css";
import Layout from "./js/components/Layout.js";
import Hero from "./js/components/Hero.js";
import FeatureCards from "./js/components/FeatureCards.js";

const app = document.querySelector("#app");

app.innerHTML = Layout(`
    ${Hero()}
    ${FeatureCards()}
`);
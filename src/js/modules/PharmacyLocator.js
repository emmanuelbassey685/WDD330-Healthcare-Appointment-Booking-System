/**
 * ----------------------------------------------------
 * File: PharmacyLocator.js
 * Description:
 * Handles pharmacy search and Google Maps integration.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330
 * ----------------------------------------------------
 */

import Layout from "../components/Layout.js";
import { getPharmacies, searchPharmacies } from "../services/PharmacyService.js";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

let map;
let AdvancedMarkerElement;
let userMarker;

/**
 * Initialize Pharmacy Locator.
 */
export async function initPharmacyLocator() {

    const app = document.querySelector("#app");

    app.innerHTML = Layout(`

        <section class="pharmacy-page">

            <h1>Find a Pharmacy</h1>

            <p class="pharmacy-intro">
                Find pharmacies near you and get directions
                to the location that works best for you.
            </p>

            <div class="pharmacy-search">

                <input
                    type="text"
                    id="pharmacySearch"
                    class="search-input"
                    placeholder="Search by pharmacy or location..."
                    aria-label="Search for a pharmacy"
                >

                <button
                    id="locationBtn"
                    class="btn-primary"
                    type="button"
                >
                    📍 Use My Location
                </button>

            </div>

            <div
                id="pharmacyMap"
                class="pharmacy-map"
            ></div>

            <div
                id="nearestPharmacy"
                class="nearest-pharmacy"
            ></div>

            <div
                id="pharmacyResults"
                class="pharmacy-results"
            ></div>

        </section>

    `);

    displayPharmacies(getPharmacies());

    attachSearchListener();
    attachLocationListener();

    await initializeMap();
}

/**
 * Initialize Google Map.
 */
async function initializeMap() {

    try {

        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

        if (!apiKey) {

            console.error(
                "Google Maps API key is missing."
            );

            document.querySelector("#pharmacyMap").innerHTML = `
                <p>
                    Google Maps API key is not configured.
                </p>
            `;

            return;
        }

        setOptions({
            key: apiKey
        });

        const { Map } = await importLibrary("maps");

        const markerLibrary = await importLibrary("marker");
        AdvancedMarkerElement =
            markerLibrary.AdvancedMarkerElement;

        const pharmacies = getPharmacies();

        const center = {
            lat: pharmacies[0].latitude,
            lng: pharmacies[0].longitude
        };

        map = new Map(
            document.querySelector("#pharmacyMap"),
            {
                center,
                zoom: 13,
                mapId: "DEMO_MAP_ID"
            }
        );

        pharmacies.forEach((pharmacy) => {

            new AdvancedMarkerElement({
                map,
                position: {
                    lat: pharmacy.latitude,
                    lng: pharmacy.longitude
                },
                title: pharmacy.name
            });

        });

    } catch (error) {

        console.error(
            "Google Maps failed to load:",
            error
        );

        document.querySelector("#pharmacyMap").innerHTML = `
            <p>
                Unable to load Google Maps.
                Please check your API configuration.
            </p>
        `;
    }
}

/**
 * Display pharmacy results.
 *
 * @param {Array} pharmacies
 */
function displayPharmacies(pharmacies) {

    const container =
        document.querySelector("#pharmacyResults");

    if (!pharmacies.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-state__icon">
                    💊
                </div>

                <h2 class="empty-state__title">
                    No Pharmacies Found
                </h2>

                <p class="empty-state__message">
                    Try searching for another pharmacy
                    or location.
                </p>

            </div>

        `;

        return;
    }

    container.innerHTML = pharmacies.map(
        (pharmacy) => `

        <article class="pharmacy-card">

            <div class="pharmacy-card__content">

                <h2>${pharmacy.name}</h2>

                <p>
                    📍 ${pharmacy.address}
                </p>

                <p>
                    📞 ${pharmacy.phone}
                </p>

                <p>
                    ${pharmacy.city}
                </p>

                <button
                    class="btn-secondary pharmacy-directions"
                    data-lat="${pharmacy.latitude}"
                    data-lng="${pharmacy.longitude}"
                    type="button"
                >
                    Get Directions
                </button>

            </div>

        </article>

        `
    ).join("");

    attachDirectionButtons();
}

/**
 * Search pharmacies.
 */
function attachSearchListener() {

    const searchInput =
        document.querySelector("#pharmacySearch");

    searchInput.addEventListener(
        "input",
        (event) => {

            const results =
                searchPharmacies(event.target.value);

            displayPharmacies(results);
        }
    );
}

/**
 * Add direction button functionality.
 */
function attachDirectionButtons() {

    const buttons =
        document.querySelectorAll(
            ".pharmacy-directions"
        );

    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const lat = button.dataset.lat;
                const lng = button.dataset.lng;

                window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
                    "_blank"
                );

            }
        );

    });
}

/**
 * Attach Use My Location button.
 */
function attachLocationListener() {

    const locationButton =
        document.querySelector("#locationBtn");

    locationButton.addEventListener(
        "click",
        getUserLocation
    );
}


/**
 * Get the user's current location.
 */
function getUserLocation() {

    if (!navigator.geolocation) {

        alert(
            "Geolocation is not supported by your browser."
        );

        return;
    }

    navigator.geolocation.getCurrentPosition(

        (position) => {

            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            console.log(
                "User location:",
                userLocation
            );

            // Move map to user's location
            map.setCenter(userLocation);
            map.setZoom(14);

            // Remove previous user marker
            if (userMarker) {
                userMarker.map = null;
            }

            // Add new user marker
            userMarker = new AdvancedMarkerElement({
                map,
                position: userLocation,
                title: "Your Location"
            });

            // Find nearest pharmacy
            findNearestPharmacy(userLocation);

        },

        (error) => {

            console.error(
                "Location error:",
                error
            );

            alert(
                "Unable to determine your location. " +
                "Please allow location access and try again."
            );

        }

    );
}

/**
 * Calculate the distance between two coordinates.
 *
 * @param {number} lat1
 * @param {number} lng1
 * @param {number} lat2
 * @param {number} lng2
 * @returns {number} Distance in kilometers
 */
function calculateDistance(lat1, lng1, lat2, lng2) {

    const earthRadius = 6371;

    const latDifference =
        (lat2 - lat1) * Math.PI / 180;

    const lngDifference =
        (lng2 - lng1) * Math.PI / 180;

    const a =
        Math.sin(latDifference / 2) *
        Math.sin(latDifference / 2) +

        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(lngDifference / 2) *
        Math.sin(lngDifference / 2);

    const c =
        2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return earthRadius * c;
}

/**
 * Find the pharmacy closest to the user.
 *
 * @param {Object} userLocation
 */
function findNearestPharmacy(userLocation) {

    const pharmacies = getPharmacies();

    if (!pharmacies.length) {
        return;
    }

    const pharmaciesWithDistance = pharmacies.map(
        (pharmacy) => {

            const distance = calculateDistance(
                userLocation.lat,
                userLocation.lng,
                pharmacy.latitude,
                pharmacy.longitude
            );

            return {
                ...pharmacy,
                distance
            };

        }
    );

    pharmaciesWithDistance.sort(
        (a, b) => a.distance - b.distance
    );

    const nearestPharmacy =
        pharmaciesWithDistance[0];

    displayNearestPharmacy(nearestPharmacy);

    console.log(
        "Nearest pharmacy:",
        nearestPharmacy
    );
}

/**
 * Display the nearest pharmacy.
 *
 * @param {Object} pharmacy
 */
function displayNearestPharmacy(pharmacy) {

    const container =
        document.querySelector("#nearestPharmacy");

    if (!container) {
        return;
    }

    container.innerHTML = `

        <div class="nearest-pharmacy-card">

            <div class="nearest-pharmacy-badge">
                ⭐ Nearest Pharmacy
            </div>

            <h2>
                ${pharmacy.name}
            </h2>

            <p>
                📍 ${pharmacy.address}
            </p>

            <p>
                📞 ${pharmacy.phone}
            </p>

            <p>
                🏙️ ${pharmacy.city}
            </p>

            <p class="pharmacy-distance">
                📏 ${pharmacy.distance.toFixed(2)} km away
            </p>

            <button
                class="btn-primary"
                type="button"
                id="nearestDirectionsBtn"
            >
                Get Directions
            </button>

        </div>

    `;

    const directionsButton =
        document.querySelector(
            "#nearestDirectionsBtn"
        );

    directionsButton.addEventListener(
        "click",
        () => {

            window.open(
                `https://www.google.com/maps/dir/?api=1&destination=${pharmacy.latitude},${pharmacy.longitude}`,
                "_blank"
            );

        }
    );
}
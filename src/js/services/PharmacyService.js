/**
 * ----------------------------------------------------
 * File: PharmacyService.js
 * Description:
 * Provides pharmacy data for the pharmacy locator.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330
 * ----------------------------------------------------
 */

const pharmacies = [
    {
        id: "pharmacy-001",
        name: "HealthPlus Pharmacy",
        address: "Udo Udoma Avenue, Uyo",
        city: "Uyo",
        phone: "+234 800 000 0001",
        latitude: 5.0377,
        longitude: 7.9128
    },

    {
        id: "pharmacy-002",
        name: "MedPlus Pharmacy",
        address: "Abak Road, Uyo",
        city: "Uyo",
        phone: "+234 800 000 0002",
        latitude: 5.0339,
        longitude: 7.9246
    },

    {
        id: "pharmacy-003",
        name: "HealthCare Pharmacy",
        address: "Ikot Ekpene Road, Uyo",
        city: "Uyo",
        phone: "+234 800 000 0003",
        latitude: 5.0255,
        longitude: 7.9311
    },

    {
        id: "pharmacy-004",
        name: "Good Health Pharmacy",
        address: "Oron Road, Uyo",
        city: "Uyo",
        phone: "+234 800 000 0004",
        latitude: 5.0158,
        longitude: 7.9504
    }, 

    {
        id: "pharmacy-005",
        name: "BEZ Pharmacy",
        address: "Abak Road, Uyo",
        city: "Uyo",
        phone: "+234 800 000 0005",
        latitude: 5.0158,
        longitude: 7.9504
    }, 

    {
        id: "pharmacy-006",
        name: "Pharmablaze Pharmacy",
        address: "General Edet Akpan Ave, Uyo",
        city: "Uyo",
        phone: "+234 800 000 0006",
        latitude: 5.0158,
        longitude: 7.9504
    }

];

/**
 * Get all pharmacies.
 *
 * @returns {Array}
 */
export function getPharmacies() {
    return pharmacies;
}

/**
 * Search pharmacies by name or location.
 *
 * @param {string} searchTerm
 * @returns {Array}
 */
export function searchPharmacies(searchTerm) {

    const term = searchTerm.trim().toLowerCase();

    if (!term) {
        return pharmacies;
    }

    return pharmacies.filter((pharmacy) =>
        pharmacy.name.toLowerCase().includes(term) ||
        pharmacy.address.toLowerCase().includes(term) ||
        pharmacy.city.toLowerCase().includes(term)
    );
}
/**
 * --------------------------------------------------------
 * File: FHIRService.js
 * Description:
 * Service responsible for retrieving healthcare data.
 * Currently loads local JSON data and can later be
 * extended to connect to a live FHIR Healthcare API.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

/**
 * Load all doctors.
 *
 * @returns {Promise<Array>}
 */
export async function getDoctors() {
  try {
    const response = await fetch("/data/doctors.json");

    if (!response.ok) {
      throw new Error("Unable to load doctor data.");
    }

    const doctors = await response.json();

    return doctors;
  } catch (error) {
    console.error("FHIRService:", error);

    throw error;
  }
}
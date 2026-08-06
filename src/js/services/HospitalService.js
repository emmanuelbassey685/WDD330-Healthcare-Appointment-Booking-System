/**
 * --------------------------------------------------------
 * File: HospitalService.js
 * Description:
 * Retrieves hospital data from the local JSON file.
 *
 * Author: Emmanuel Bassey
 * Course: WDD330 - Web Frontend Development II
 * --------------------------------------------------------
 */

/**
 * Fetch all hospitals.
 *
 * @returns {Promise<Array>}
 */
export async function getHospitals() {
  try {
    const response = await fetch("/data/hospitals.json");

    if (!response.ok) {
      throw new Error("Unable to load hospitals.");
    }

    return await response.json();
  } catch (error) {
    console.error("Hospital Service Error:", error);
    throw error;
  }
}
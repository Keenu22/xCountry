
import axios from 'axios';

export default async function api() {
  try {
    const res = await axios.get("https://xcountries-backend.azurewebsites.net/all");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("Error fetching data: " + error.message);
    throw error; // Propagate the error to be handled by the caller
  }
}

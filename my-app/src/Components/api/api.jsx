
import axios from 'axios';

export default async function api() {
  try {
    const res = await axios.get("https://xcountries-backend.azurewebsites.net/all");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching data: " + error.message);
  }
}


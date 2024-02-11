import axios from 'axios';

const url = import.meta.env.VITE_API_URL

export async function getDogs() {
  try {
    const response = await axios.get(`${url}/dogs`)
    return response
  } catch (error) {
    return {error: error.response}
  }
}
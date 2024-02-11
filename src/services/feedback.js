import axios from 'axios';

const url = import.meta.env.VITE_API_URL

export async function getFeedbacks() {
  try {
    const response = await axios.get(`${url}/feedbacks`)
    return response
  } catch (error) {
    return {error: error.response}
  }
}
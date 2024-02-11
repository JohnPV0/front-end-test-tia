import axios from 'axios';

const url = import.meta.env.VITE_API_URL

export async function login(email, password) {
  try {
    const response = await axios.post(`${url}/login`,{
      email: email,
      password: password,
    })
    return response
  } catch (error) {
    return {error: error.response}
  }
}

export async function logout(token) {
  try {
    const response = await axios.post(`${url}/logout`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (error) {
    return {error: error.response}
  }
}

export async function register(name, email, password, password_confirmation) {
  try {
    const response = await axios.post(`${url}/register`,{
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    })
    return response
  } catch(error) {
    return {error: error.response}
  }
}

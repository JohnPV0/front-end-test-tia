import {useState} from 'react'
import '../assets/css/Login.css'

import { login } from '../services/auth'
import { useDispatch } from 'react-redux'
import { setJwtToken, setUser } from '../slices/authSlice'

export default function Login() {

  const jwtToken = localStorage.getItem('jwtToken')
  const user = localStorage.getItem('user')
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if (email === '' || password === '') {
      alert('Correo y contraseña son requeridos')
      return
    }

    try {
      const response = await login(email, password)
      if (response.status == 200) {
        const responseToken = response.data.data.token
        const responseUser = response.data.data.user
        localStorage.setItem('jwtToken', responseToken)
        localStorage.setItem('user', JSON.stringify(responseUser))
        dispatch(setJwtToken(responseToken))
        dispatch(setUser(responseUser))
        window.location.href = '/'
      } else {
        alert('Correo o contraseña incorrectos')
      }
    } catch (error) {
      alert('Ha ocurrido un error')
    }
  }

  

  if (jwtToken && user) {
    window.location.href = '/'
    return
  }

  return (
    <div className='container'>
      <div className='login-card col-lg-6 col-md-6'>
        <div className='login-card-title'>
          <h3>Iniciar Sesión</h3>
        </div>
        <div className='login-card-body'>
          <div className='login-card-fields'>
            <div className='form-group'>
              <label htmlFor='email'>Correo</label>
              <input type='email' className='form-control' id='email' onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Contraseña</label>
              <input type='password' className='form-control' id='password' onChange={e => setPassword(e.target.value)}/>
            </div>
          </div>
          <div className='login-card-footer'>
            <button type='submit' className='btn btn-primary' onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

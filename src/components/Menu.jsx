import { Navbar, Nav } from 'react-bootstrap';
import '../assets/css/Menu.css'
import { logout } from '../services/auth'
import { useSelector } from 'react-redux';

export default function Menu() {
  const jwtToken = useSelector((state) => state.auth.jwtToken)
  const user = useSelector((state) => state.auth.user)

  const handleLogout = async () => {
    try {
      const response = await logout(jwtToken)
      if (response.status === 200) {
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('user')
        window.location.href = '/'
      } else {
        alert('Ha ocurrido un error, sesión expirada, por favor inicia sesión nuevamente')
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('user')
        window.location.href = '/login'
      }
    } catch (error) {
      console.log(error)
      alert('Ha ocurrido un error')
    }
  }

  return (
    <Navbar expand="lg" className='navbar-container'>
      <div className='nav-toggle-menu'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggler-menu'/>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-items" style={{marginLeft: 'auto'}}>
          {jwtToken && user 
            ? (
              <button className='nav-link nav-link-menu' onClick={handleLogout}>Cerrar sesión</button>
            )
            :(
              <>
                <Nav.Link href="/login" className='nav-link-menu'>Iniciar sesión</Nav.Link>
                <Nav.Link href="/register" className='nav-link-menu'>Registrarme</Nav.Link>
              </>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


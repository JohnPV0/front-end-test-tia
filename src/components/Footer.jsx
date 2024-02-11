import '../assets/css/Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-left'>
          <div className='footer-social'>
            <div className='footer-social-icon'>
              <FaFacebook color='#112e40' className='icon'/>
            </div>
            <div className='footer-social-icon'>
              <FaTwitter color='#112e40' className='icon'/>
            </div>
            <div className='footer-social-icon'>
              <FaInstagram color='#112e40' className='icon'/>
            </div>
            <div className='footer-social-icon'>
              <FaYoutube color='#112e40' className='icon'/>
            </div>
          </div>
          <div className='footer-links'>
            <a href='#'>Contacto</a>
            <a href='#'>Acerca de</a>
            <a href='#'>Términos y condiciones</a>
            <a href='#'>Política de privacidad</a>
          </div>
        </div>
        <div className='footer-right'>
          <div className='footer-column'>
            <h3>Contáctanos</h3>
            <p>123-456-7890</p>
          </div>
          <div className='footer-column'>
            <h3> Horario de atención</h3>
            <p>Lunes a Viernes: 9:00 am - 6:00 pm</p>
            <p>Sábado: 9:00 am - 2:00 pm</p>
          </div>
          <div className='footer-column'>
            <h3>Ubicación</h3>
            <p>123 Calle Principal, Ciudad, País</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

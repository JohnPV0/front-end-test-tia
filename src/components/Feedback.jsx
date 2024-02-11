import '../assets/css/Feedback.css';
import Carousel from './Carousel';

export default function Feedback() {
  


  return (
    <div className='feedback-container'>
      <div className='feedback-title'>Nuestros clientes opinan</div>
      <div className='feedback-content'>
       <Carousel />
      </div>
    </div>
  );
}
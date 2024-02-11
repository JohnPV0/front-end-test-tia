import "../assets/css/Cover.css";
import CoverCard from "./CoverCard";

export default function Cover() {
  return (
    <div className="cover-container">
      <div className="cover-content">
        <div className="cover-title">
          <h1>Cuidamos a tu mascota</h1>
        </div>
        <div className="cover-subtitle">
          <h3>Conoce a las mascotas felices</h3>
          <h3>que hemos cuidado</h3>
        </div>
        <button className='cover-btn'>Conocer más</button>
      </div>
      <div className='cover-cards-container'>
        <CoverCard  />
        <CoverCard  />
        <CoverCard  />
      </div>
    </div>
  );
}

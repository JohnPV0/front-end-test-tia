import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

export default function FeaturedCard(props) {
  const { image, name, stars, description } = props;
  return (
    <div className='featured-card'>
      <div className='featured-card-image'>
        <img src={image} alt='featured' />
      </div>
      <div className='featured-card-content'>
        <div className='featured-card-title'>
          <h3>{name}</h3>
          <div className='featured-card-stars'>
            {[...Array(stars)].map((star, index) => {
              return <FaStar key={index} color="#FFD700" />;
            })}
          </div>
        </div>
        <div className='featured-card-description'>
          <p>{description}</p>
        </div>
        <div className='featured-card-bottom'>
          <button>Ver más</button>
          <div className='featured-card-share'>
            <div className='share-icon'>
              <AiFillLike color="#112e40" />
            </div>
            <div className='share-icon'>
              <FaShare color="#112e40" />
            </div>
            <div className='share-icon'>
              <FaComment color="#112e40" />
            </div>
          </div>       
        </div>
      </div>
    </div>
  )
}

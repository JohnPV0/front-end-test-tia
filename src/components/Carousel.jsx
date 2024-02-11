import Slider from 'react-slick'
import FeedbackItem from './FeedbackItem';
import { useEffect, useState } from 'react';
import { getFeedbacks } from '../services/feedback';

export default function Carousel() {

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await getFeedbacks()
      if (response.error) {
        console.log(response.error)
      } else {
        setFeedbacks(response.data.data.feedbacks)
      }
    }
    fetchFeedbacks()
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      const currentElement = document.querySelector('.slick-current .feedback-item-container');
      currentElement.classList.remove('active');
      const nextElement = document.querySelector(`.slick-slide[data-index="${next}"] .feedback-item-container`);
      nextElement.classList.add('active');
    },
    
    
  };

  useEffect(() => {
    if (feedbacks.length > 0) {
      const firstElement = document.querySelector('.slick-current .feedback-item-container');
      firstElement.classList.add('active');
    }
  }, [feedbacks]);

  return (
    <div className="slider-container" style={{width: '90%'}}>
      <Slider {...settings} >
        {feedbacks.map((item, index) => {
          return (
            <FeedbackItem key={index} name={item.name} image={item.photo} comment={item.comment} />
          );
        })}
      </Slider>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{...style,
        display: "block",
        background: "#4c857a",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{...style,
        display: "block",
        background: "#4c857a",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

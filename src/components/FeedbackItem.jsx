import React from 'react'
import '../assets/css/FeedbackItem.css'

export default function FeedbackItem(props) {
  const { image, name, comment } = props
  return (
    <div className={`feedback-item-container`}>
      <div className='feedback-item-photo'>
        <img src={image} alt='client' />
      </div>
      <div className='feedback-item-content'>
        <div className='feedback-item-name'>
          {name}
        </div>
        <div className='feedback-item-rating'>
          {comment}
        </div>
      </div>
    </div>
  )
}

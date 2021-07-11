import React from 'react'
import './Card.css'
import image from './kakashi.jpg'

const Card = () => {
    return (
        <div className="card">
        <img  src={image} alt="img" />
        </div>
    )
}

export default Card

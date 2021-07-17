import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div className="card">
            <div className="name">
            {props.name}
            </div>
            <div className="value">
            Calories: {props.value}
            </div>
        </div>
    )
}

export default Card

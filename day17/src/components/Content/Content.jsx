import React from 'react'
import Card from '../Card/Card'
import "./Content.css"

const Content = () => {
    return (
        <div className="content">
        <div className="content-box">
           <Card name="Pizza" value="500" /> 
           <Card name="Cake" value="100" /> 
           <Card name="Burger" value="150" /> 
           <Card name="Pasta" value="250" /> 
        </div>
        </div>
    )
}

export default Content

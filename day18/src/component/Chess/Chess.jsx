import React from 'react'
import {White, Black} from '../Cubes/Cube'
import './Chess.css'

const Chess = () => {
    const blocks = [];
    for (let index = 0; index < 81; index++) 
        (index%2 === 0) ? blocks.push(<White key={index} />) : blocks.push(<Black key={index} />);
    
    return (
        <div className="chessboard">
            {blocks}
        </div>
    )
}

export default Chess

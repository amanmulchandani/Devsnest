import React from 'react'
import { Button } from '@material-ui/core'
import { useState } from 'react'

const Buttons = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Button onClick={() => {setCount(count + 1)}} variant="contained" fullWidth color="primary">{count}</Button>
        </div>
    )
}

export default Buttons

import React from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'

// let num = 0;

// const increaseNum = () =>{

// }

const useStyles = makeStyles({
    main:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"100vh"
    }
});

const Buttons = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.main}>
        <Grid item>
            <Button variant="contained" color="primary">1</Button>
        </Grid>
        <Grid item>
            <Button variant="contained" color="primary">2</Button>
        </Grid>
        <Grid item>
            <Button variant="contained" color="primary">3</Button>
        </Grid>
        <Grid item>
            <Button variant="contained" color="primary">4</Button>
        </Grid>
        </Grid>
    )
}

export default Buttons

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
import { makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { CardHeader } from '@material-ui/core'
import { Typography } from '@material-ui/core'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-JSON DATA OBJECTS
import blogsData from '../assets/data/blogsData'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const useStyles = makeStyles(theme => ({
    paperRoot: {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',      

        // WHITE TEXT - BLACK  S T R O K E  EFFECT
        color: 'white',
        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    }
}))

export default function Menu(props) {
    // ENABLE C U S T O M I Z A T I O N S OF STYLE ATTRIBUTES WITH MATERIAL UI
    const classes = useStyles()


    // I T E R A T E  THROUGH ALL BLOG JSON DATA > R E N D E R  CLICKABLE TITLE BUTTONS > 
    return (
      <Grid container justifyContent='center' spacing={1}>
        {blogsData.map((b) => 

        // THE GRID CHILD CARRIES A REQUIRED KEY - EASILY PASS THAT ID INTO EVENTHANDLING > WRITTEN IN PARENT, FUNCTION ACCESSIBLE VIA PROPS
            <Grid item xs="auto" key={b.id}  onClick={(event) => props.handleClick(event, b.id)}>
                <Paper 
                    classes={{root: classes.paperRoot}} 
                    elevation={4}
                    style={{backgroundImage: `url(${b.image})`}} 
                    >
                        <CardHeader title={b.title} />                                     
                        <Typography align='right' variant='subtitle2'>
                            {b.date}
                        </Typography>
                </Paper>
            </Grid>
        )}  
      </Grid>
    
    )
}
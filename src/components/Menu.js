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

        color: 'white',
        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    }
}))

export default function Menu() {
    // ENABLE CUSTOMIZATIONS OF STYLE ATTRIBUTES WITH MATERIAL UI
    const classes = useStyles()

    return (
      <Grid container justifyContent='center' spacing={1}>
        {blogsData.map((b) => 
            <Grid item xs="auto" key={b.id}  >
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
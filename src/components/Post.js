import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
import { makeStyles, Paper, Typography } from '@material-ui/core'
import { Box, Grid, Card, CardMedia, CardContent  } from '@material-ui/core'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// C U S T O M    S T Y L E  ATTRIBUTES
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const useStyles = makeStyles(theme => ({
    paperRoot: {
        padding: '15px',
        marginTop: '50px',
        marginLeft: '100px',
        marginRight: '100px',
    }
}))
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// DISPLAY  S I N G L E   B L O G  POST DATA > HEADER & BODY
export default function Post(props) {
    // E N A B L E  USAGE OF S T Y L E   C U S T O M I Z A T I O N
    const classes = useStyles()

    return (<>
        
            
            <Paper className={classes.paperRoot} elevation={4} >              

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>

                    <Paper><CardMedia><img style={{maxWidth:"100px"}} src={`${props.blog.image}`} /></CardMedia></Paper>
                    <Typography>{props.blog.title}</Typography>
                    <Typography>{props.blog.date}</Typography>
                        
                        </Grid>
                    </Box>
                    


                    <Card>
                    <CardContent><Typography>{props.blog.content}</Typography></CardContent>
                    </Card>
            </Paper>          

    </>)
}
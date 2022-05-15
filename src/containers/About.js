import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
import { Grid, Typography, makeStyles, Paper} from '@material-ui/core'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// C U S T O M    S T Y L E  ATTRIBUTES
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paperRoot: {
        padding: '15px',
        marginTop: '50px',
        marginBottom: '50px',
        marginLeft: '100px',
        marginRight: '100px',

    }
}))
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// A B O U T   M E  SECTION
export default function About() {
    // E N A B L E  USAGE OF S T Y L E   C U S T O M I Z A T I O N
    const classes = useStyles()

    return (<>
                
                <Paper className={classes.paperRoot}>
                    
                

                <Grid container
                justifyContent='center'
                alignItems='center'
                spacing={1}>

                    <Grid item xs={5}>
                    <img 
                    style={{maxWidth:"200px", borderRadius:"100%"}}
                    src={`${'https://www.dropbox.com/s/q715ljny8yv5zl7/File_000.jpeg?raw=1'}`} />
                    </Grid>

                    <Grid item xs>
                    <Paper className={classes.paper}>
                    <Typography variant='h6'>Kimberly Rosaly</Typography>
                    <Typography variant='h6'>Software Engineer</Typography>
                    <Typography variant='h6'>Bay Shore, New York</Typography>
                    </Paper>
                    </Grid>

                </Grid>
                </Paper>
    </>)
}
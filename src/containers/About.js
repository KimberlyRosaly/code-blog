import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
import { ButtonGroup, Button, Grid, Typography, makeStyles, Paper} from '@material-ui/core'

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// C U S T O M    S T Y L E  ATTRIBUTES
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const useStyles = makeStyles(theme => ({
    
    paperRoot: {
        display: 'flex',
        justifyContent: 'center',
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
                
                    
                

                <Grid container
                justifyContent='center'
                alignItems='center'
                spacing={0}>

                <Paper className={classes.paperRoot} elevation={15}>

                    <Grid item xs>
                        <img 
                        alt='self portrait'
                        style={{maxWidth:"200px", borderRadius:"5%"}}
                        src={`${'https://www.dropbox.com/s/q715ljny8yv5zl7/File_000.jpeg?raw=1'}`} />
                    </Grid>

                    <Grid item xs>
                    <Paper>
                                <Typography variant='h5'>Kimberly Rosaly</Typography>
                                <Typography variant='h6'>Software Engineer</Typography>
                                <Typography variant='h6'>Bay Shore, New York</Typography>


                                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button variant="outlined" href='https://www.linkedin.com/in/kimberly-rosaly/ '>LinkedIn</Button>
                                <Button variant="outlined" href='https://github.com/KimberlyRosaly/'>GitHub</Button>
                                </ButtonGroup>
                    </Paper>                  
                    </Grid>

                </Paper>
                </Grid>
    </>)
}
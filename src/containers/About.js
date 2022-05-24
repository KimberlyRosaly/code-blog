import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
import { ButtonGroup, Button } from '@material-ui/core'
import { Grid, Typography, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// C U S T O M    S T Y L E  ATTRIBUTES
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const useStyles = makeStyles(theme => ({    
    paperRoot: {
        display: 'flex',
        justifyContent: 'center',        
        alignItems: 'center',        
        //      TOP > RIGHT > BOTTOM > LEFT
        padding: '30PX 70PX 30PX 70PX'      
    }
}))
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// A B O U T   M E  SECTION
export default function About() {
    // E N A B L E  USAGE OF S T Y L E   C U S T O M I Z A T I O N
    const classes = useStyles()
    
    return (<>           
                <Grid container
                // CENTER CONTAINER ON PAGE
                justifyContent="center"
                >
                <Paper className={classes.paperRoot} elevation={15}>

                    {/* // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - I M A G E */}
                    <Grid item xs>
                        <img 
                        alt='self portrait'
                        style={{width:"300px", borderRadius:"5%"}}
                        src={`${'https://www.dropbox.com/s/q715ljny8yv5zl7/File_000.jpeg?raw=1'}`} />                 
                    </Grid>
                    {/* // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}
                    {/* // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - I N F O */}
                    <Grid item style={{paddingLeft:"20px"}}>
                        <Paper style={{padding:"20px"}}>
                            <Typography variant='h5'>Kimberly Rosaly</Typography>
                            <Typography variant='h6'>Software Engineer</Typography>
                            <Typography variant='h6'>Bay Shore, New York</Typography>


                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button variant="outlined" href='https://www.linkedin.com/in/kimberly-rosaly/ '>LinkedIn</Button>
                            <Button variant="outlined" href='https://github.com/KimberlyRosaly/'>GitHub</Button>
                            </ButtonGroup>
                        </Paper>                  
                    </Grid>
                    {/* // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}

                </Paper>
                </Grid>
    </>)
}
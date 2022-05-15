import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
import { makeStyles, Paper} from '@material-ui/core'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// C U S T O M    S T Y L E  ATTRIBUTES
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const useStyles = makeStyles(theme => ({
    paperRoot: {
        
    }
}))
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// A B O U T   M E  SECTION
export default function About() {
    // E N A B L E  USAGE OF S T Y L E   C U S T O M I Z A T I O N
    const classes = useStyles()

    return (<>
                
                <Paper>ABOUT ME LIVES HERE</Paper>

    </>)
}
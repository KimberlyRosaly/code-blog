import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
import { makeStyles, Paper } from '@material-ui/core'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


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

export default function Post(props) {

    const classes = useStyles()

    return (
        
            <Paper className={classes.paperRoot} elevation={4} >
                {props.blog.content}
            </Paper>          

    )
}
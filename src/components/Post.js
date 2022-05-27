import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useParams } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Paper, Grid } from '@material-ui/core'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



// DISPLAY S I N G L E   B L O G  POST DATA > HEADER & BODY
export default function Post(props) {
    
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //                                         P A R A M S  HANDLING
    //! RETRIEVE URL PARAMS DEFINED IN APP.JS (I THINK..PLEASE LOOK UP)
    const urlParams = useParams()    
    let blogID = parseInt(urlParams.blogId)
    const blog = props.blogs.find( (b) => b.id == blogID )
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    
    return (<>
        <Grid container 
        justifyContent='center'
        >
        <Paper >

        <img 
              style={{maxWidth:"200px"}}
              src={`${blog.image}`} />
        <div>{blog.title}</div>     
        <div>{blog.date}</div>     
        <div>{blog.content}</div>               
        </Paper></Grid>

    </>)
}
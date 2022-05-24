import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useParams } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



// DISPLAY S I N G L E   B L O G  POST DATA > HEADER & BODY
export default function Post(props) {
    
    const urlParams = useParams()    
    let blogID = parseInt(urlParams.blogId)
    const blog = props.blogs.find( (b) => b.id == blogID )


    
    return (<>
        
       <div>{blog.title}</div>     
       <div>{blog.date}</div>     
       <div>{blog.content}</div>               


    </>)
}
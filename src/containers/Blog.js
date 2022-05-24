// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Menu from '../components/Menu'
import Post from '../components/Post'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-JSON DATA OBJECTS
import blogsData from '../assets/data/blogsData'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useParams } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


export default function Blog() {

  // GRAB A HOLD OF PARAMS
  const urlParams = useParams()    
  // CHECK PARAMS > CONTAINS A :blogId ((STRING INTO INTEGER))
  let blogID = parseInt(urlParams.blogId)

  return (<>
    {/* BLOG MENU SELECTION W/ CLICK EVENT HANDLING VIA PROP */}
    <Menu blogs={blogsData} />

    {/* BOOLEAN-IZE WHETHER OR NOT BLOGID HAS A VALUE */}
    {!!blogID ? (<Post blogs={blogsData} />) : (null)}
    {/* ONLY RENDER THE POST COMPONENT, IF A :blogId EXISTS INSIDE PARAMS */}
    
  </>)

}

// n o t e s :
// Consider changing <Post> to take in one blog object which to render
// Where should this logic live? Should PARENT do the heavy lifting and CHILD be presentational?
// I think child should be pure > less repetitive code > PARAMS bugs in 1 location
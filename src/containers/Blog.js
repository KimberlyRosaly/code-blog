// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { useState } from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Menu from '../components/Menu'
import Post from '../components/Post'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-JSON DATA OBJECTS
import blogsData from '../assets/data/blogsData'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



export default function Blog() {

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                                     s t a t e
  // blogSelected = FALSE || blogSelected = {...}
  const [blogSelected, setBlogSelected] = useState(false) // SET  I N I T I A L  VALUE INSIDE OF STATE
  // SET FUNCTION TO CHANGE SPECIFIED STATE KEY
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
  //                                          e v e n t  for child
  const handleClick = (event, blogID) => {
    // console.log("the child has been clicked | this log lives in it's clickHandling parent", blogID)
    const selectedBlog = blogsData.find((eachBlog) => eachBlog.id === blogID )  
    // state.blogSelected = {...}
    setBlogSelected(selectedBlog)
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (<>
    {/* BLOG MENU SELECTION W/ CLICK EVENT HANDLING VIA PROP */}
    <Menu blogs={blogsData} handleClick={handleClick} />

    {/* IF MENU HAS CLICK EVENT > STATE CHANGE > RENDER ITS POST */}
    { blogSelected ? (<Post blog={blogSelected} />) : (null) }    
  </>)

}
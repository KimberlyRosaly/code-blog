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

  // blogSelected = FALSE || blogSelected = {...}
  const [blogSelected, setBlogSelected] = useState(false) // SET  I N I T I A L  VALUE INSIDE OF STATE
  // SET FUNCTION TO CHANGE SPECIFIED STATE KEY

  const handleClick = (event, blogID) => {
    // console.log("the child has been clicked | this log lives in it's clickHandling parent", blogID)
    const selectedBlog = blogsData.find((eachBlog) => eachBlog.id === blogID )  
    // state.blogSelected = {...}
    setBlogSelected(selectedBlog)
  }

  return (<>
    <Menu blogs={blogsData} handleClick={handleClick} />
    <Post blog={blogSelected} />
  </>)

}
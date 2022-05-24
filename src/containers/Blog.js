// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import Menu from '../components/Menu'
import Post from '../components/Post'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-JSON DATA OBJECTS
import blogsData from '../assets/data/blogsData'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



export default function Blog() {


  return (<>
    {/* BLOG MENU SELECTION W/ CLICK EVENT HANDLING VIA PROP */}
    <Menu blogs={blogsData} />
    {/* ▼  U R L   P A R A M S  HANDLING ▼ */}
    <Post blogs={blogsData} />
  </>)

}
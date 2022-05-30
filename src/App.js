// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Routes, Route } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import NavBar from './components/NavBar'
import Header from './components/Header'
import Blog from './containers/Blog'
import About from './containers/About'
import Post from './components/Post'
import Guide from './components/Guide'
import Home from './containers/Home'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// GET BLOGID PARAM FROM THE URL

export default function App() {
  
  return (<>
    {/* > > > > > > > > > > > > > > > > > > > > > > > > > > > >  */}
    <NavBar />
    <Header />
    <Guide />
    {/* > > > > > > > > > > > > > > > > > > > > > > > > > > > >  */}

    {/*  ==================================================================== */}
    {/*                                             CLIENT SIDE R O U T I N G */}
    <Routes>      
        <Route path="/" element={<Home />} />
        {/* =============================================site.com/ b l o g /  */}
        <Route path="/blog" element={<Blog />} >
        {/* =======================================site.com/ b l o g / 1 2 3  */}
          <Route path=":blogId" element={<Post />} />
        </Route>

        {/* =============================================site.com/ a b o u t  */}
        <Route path="/about" element={<About />} />      
    </Routes>   
    {/*  ==================================================================== */}    
    

  </>);
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Routes, Route } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import NavBar from './components/NavBar'
import Header from './components/Header'
import Blog from './containers/Blog'
import About from './containers/About'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


function App() {
  return (<>

    <NavBar />
    <Header />

    <Routes>
      
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      
    </Routes>   
    

  </>);
}

export default App;

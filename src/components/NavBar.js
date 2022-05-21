// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Link } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
// PARENT CONTAINER
import Tabs from '@material-ui/core/Tabs';
// TAB CHILDREN
import Tab from '@material-ui/core/Tab';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


  export default function NavBar() {
 
    return (
        <Tabs centered>

                <Link to={'/about'}>
                      <Tab label="ABOUT ME" />
                </Link>

                <Link to={'/blog'}>
                      <Tab label="BLOG" />
                </Link>
      
        </Tabs>      

    );
  }

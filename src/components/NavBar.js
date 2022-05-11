// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
// PARENT CONTAINER
import Tabs from '@material-ui/core/Tabs';
// TAB CHILDREN
import Tab from '@material-ui/core/Tab';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


  export default function NavBar() {
 
    return (
        <Tabs>
              <Tab label="ABOUT ME" />
              <Tab label="BLOG" />
        </Tabs>
      
    );
  }

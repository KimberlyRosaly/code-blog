// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



  export default function Nav() {
 
    return (
     
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="contact me" />
          <Tab label="blog" />
        </Tabs>
      
    );
  }

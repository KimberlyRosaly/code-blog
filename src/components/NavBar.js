// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import React from 'react'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import { Link } from 'react-router-dom';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
import { Paper, Tabs, Tab } from '@material-ui/core';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


  export default function NavBar() {

      
      // STATEFUL VALUE & FUNCTION TO UPDATE IT |=| SET DEFAULT VALUE TO FALSE
      const [value, setValue] = React.useState(false);
          
      const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };
 
    return (
      <Paper sx={{ width: '100%' }}>
            <Tabs
            centered
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            >                                       
                              <Tab value="/about" to="/about" component={Link} label="About Me" />
                              <Tab value="/blog" to="/blog" component={Link} label="Blog" />
            </Tabs>
    </Paper>
    )
  }

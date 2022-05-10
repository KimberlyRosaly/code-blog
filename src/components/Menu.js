// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
import * as React from 'react';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-MATERIAL UI IMPORTS
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-JSON DATA OBJECTS
import blogsData from '../assets/data/blogsData';
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// COMPONENT RETURNS > A GRID CONTAINING GRID ITEMS
// ITERATE THROUGH JSON OBJECTS > FOR EACH BLOG DATA OBJECT, CREATE GRID ITEM
// GRID ITEMS CONTAIN TYPOGRAPHY COMPONENTS TO RENDER BLOG TITLES & DATES

export default function Menu() {
  return (
    
      <Grid container justifyContent='center' alignItems='center' spacing={2}>

        {blogsData.map((b) => 
            <Grid item xs="auto" key={b.id}>

                <Typography align='center' variant='h6'>{b.title}</Typography>
                <Typography align='right' variant='subtitle2'>{b.date}</Typography>
                   
            </Grid>
        )}
  
      </Grid>
    
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid 
        container 
        justifyContent='center' 
        alignItems='center' 
        spacing={1}
        >
          <Grid item xs={5}>
            <div className={classes.paper}>
              <img 
              style={{maxWidth:"200px"}}
              src={`${'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pencil_BLACK-01.svg/1200px-Pencil_BLACK-01.svg.png'}`} />
            </div>
          </Grid>

            <Grid item xs>
              <Paper className={classes.paper}>
              code.blog
              </Paper>
          </Grid>

          <Grid item xs>
            <Paper className={classes.paper}>
            by kimberly rosaly
            </Paper>
          </Grid>

      </Grid>
    </div>
  );
}

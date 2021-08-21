import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  mainPageImage: {
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    textAlign: 'center',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1614315517650-3771cf72d18a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)',
  },
  overlay: {
    justifyContent: 'center',
  },
  test: {
    color: 'white',
  },
  GridContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100vw',
    height: '75vh',
  },
  quote: {
    maxWidth: '75vw',
    textAlign: 'center',
  },
  titleText: {
    color: '#FFFFFF',
    textAlign: 'left',
    padding: '2vw',
  },
});

export default function ComingSoon() {
  const classes = useStyles();
  return (
    <div className={classes.mainPageImage}>
      <Typography variant="h2" className={classes.titleText}>Coming Soon...</Typography>
      <Typography variant="h5" className={classes.titleText}>Going Far and Beyond!</Typography>
      <div className={classes.overlay}>
        <Grid container direction="column" justifyContent="space-evenly" wrap="nowrap" className={classes.GridContainer}>
          <Grid item>
            <Typography variant="body1">“The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.”</Typography>
            <Typography variant="body2">Konstantin Tsiolkovsky</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              <Link component={RouterLink} color="inherit" underline="none" to="/">
                Go to Homepage
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

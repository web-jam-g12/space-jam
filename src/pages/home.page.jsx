import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import spaceImage from '../assets/images/nasa-Yj1M5riCKk4-unsplash.jpg';

const useStyles = makeStyles({
  mainPageImage: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${spaceImage})`,
  },
  overlay: {
    justifyContent: 'center',
  },
  test: {
    color: 'white',
  },
  mainContainer: {
    width: '90vw',
    height: '80vh',
  },
  optionsContainer: {
    borderRight: '1px solid white',
    padding: '10px',
  },
});

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.mainPageImage}>
      <div className={classes.overlay}>
        <Grid className={classes.mainContainer} container direction="column" justifyContent="space-between" wrap="nowrap">
          <Grid item>
            <Typography variant="h2">Welcome to your Journey through Space</Typography>
          </Grid>
          <Slide in="true" direction="left" timeout={{ enter: 2000 }}>
            <Grid item container direction="column" alignItems="flex-end">
              <Grid item>
                <Link component={RouterLink} underline="none" to="/">
                  <Typography variant="h4">Spacecrafts</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} underline="none" to="/">
                  <Typography variant="h4">Astronauts</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} underline="none" to="/">
                  <Typography variant="h4">About</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} underline="none" to="/">
                  <Typography variant="h4">Coming Soon</Typography>
                </Link>
              </Grid>
            </Grid>
          </Slide>
        </Grid>
      </div>
    </div>
  );
}

import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import spaceImage from '../assets/images/nasa-Yj1M5riCKk4-unsplash.jpg';

const useStyles = makeStyles((theme) => ({
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
  container: {
    paddingTop: theme.spacing(4),
  },
  test: {
    color: 'white',
  },
  mainContainer: {
    height: '80vh',
  },
  optionsContainer: {
    borderRight: '1px solid white',
    padding: '10px',
  },
  gridContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100vw',
    height: '75vh',
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.mainPageImage}>
      <div className={classes.overlay}>
        <Container className={classes.container}>
          <Grid container direction="column" justifyContent="space-between" wrap="nowrap" className={classes.mainContainer}>
            <Grid item>
              <Typography variant="h2">Welcome to your Journey through Space</Typography>
            </Grid>
            <Slide in="true" direction="left" timeout={{ enter: 2000 }}>
              <Grid item container direction="column" alignItems="flex-end" className={classes.optionsContainer}>
                <Grid item>
                  <Link component={RouterLink} underline="none" to="/spacecrafts">
                    <Typography variant="h4">Spacecrafts</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} underline="none" to="/astronauts">
                    <Typography variant="h4">Astronauts</Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} underline="none" to="/about">
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
        </Container>
      </div>
    </div>
  );
}

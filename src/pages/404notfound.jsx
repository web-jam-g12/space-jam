import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

//  import spaceImage from '../assets/images/nasa-Yj1M5riCKk4-unsplash.jpg';

const useStyles = makeStyles({
  mainPageImage: {
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80')",
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
});

export default function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.mainPageImage}>
      <div className={classes.overlay}>
        <Grid container direction="column" justifyContent="space-evenly" wrap="nowrap" className={classes.GridContainer}>
          <Grid item>
            <Typography variant="h1">404</Typography>
            <Typography variant="h5" style={{ color: '#FFFFFF' }}>Not Found</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">“The eternal silence of these infinite spaces frightens me.”</Typography>
            <Typography variant="body2">Blais Pascal</Typography>
          </Grid>
          <Grid item>
            <Link component={RouterLink} underline="none" to="/">
              <Typography variant="body2">Go to Homepage</Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

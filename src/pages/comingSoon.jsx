import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

//  import spaceImage from '../assets/images/nasa-Yj1M5riCKk4-unsplash.jpg';

const useStyles = makeStyles({
  mainPageImage: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://i.guim.co.uk/img/media/523656697e208a8de3169794a5020b3a242ef412/0_145_3032_1819/master/3032.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f2c74c82895f1de1b5c901f411938161')",
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

export default function ComingSoon() {
  const classes = useStyles();
  return (
    <div className={classes.mainPageImage}>
      <div className={classes.overlay}>
        <Grid container direction="column" justifyContent="space-evenly" wrap="nowrap" className={classes.GridContainer}>
          <Grid item>
            <Typography variant="h2" style={{ color: '#FFFFFF' }}>Coming Soon...</Typography>
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

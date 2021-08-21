import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import spaceImage from '../assets/images/nasa-Yj1M5riCKk4-unsplash.jpg';

const useStyles = makeStyles({
  mainPageImage: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    backgroundSize: 'cover',
    textAlign: 'center',
    backgroundImage: `url(${spaceImage})`,
  },
  overlay: {
    color: '#FFFFFF',
    justifyContent: 'center',
    fontFamily: 'Orbitron',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '60px',
    lineHeight: '60px',
  },
});

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.mainPageImage}>
      <div className={classes.overlay}>
        <Typography variant="h2">Welcome to your Journey through Space</Typography>
      </div>
    </div>
  );
}

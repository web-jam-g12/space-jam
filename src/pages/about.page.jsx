import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Header from '../components/header.component';

const useStyles = makeStyles({
  mainPageImage: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1457364887197-9150188c107b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)',
  },
  infoGrid: {
    padding: '2vw',
  },
  aboutInfoText: {
    textAlign: 'left',
    maxWidth: '70%',
  },
  aboutInfoSubtitle: {
    textAlign: 'left',
    maxWidth: '40vw',
    paddingTop: '0.5vw',
    paddingBottom: '0.5vw',
    textShadow: '1px 1px 2px black',
  },
  aboutQuote: {
    textAlign: 'center',
    maxWidth: '70vw',
    textShadow: '1px 1px 2px black',
  },
  link: {
    paddingLeft: '0.5vw',
  },
  gridContainer: {
    paddingTop: '8%',
  },
});

export default function AboutPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainPageImage}>
        <Header text="About" textColor="white" lineColor="white" backLink="/" />
        <Grid container direction="column" alignItems="flex-start" spacing={2} className={classes.infoGrid}>
          <Grid item>
            <Typography variant="h3" className={classes.aboutInfoSubtitle}>
              The Project:
            </Typography>
            <Typography variant="body2" className={classes.aboutInfoText}>
              This project was built with the information provided by
              <Link href="https://thespacedevs.com/" color="inherit" className={classes.link}>
                The Space Devs
              </Link>
              , for the DCC Web Jam 2021.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.aboutInfoText}>
              Images provided by NASA, SpaceX and Jeremy Perkins through
              <Link href="https://unsplash.com/" color="inherit" className={classes.link}>
                Unsplash
              </Link>
              .
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.aboutInfoText}>
              Developed by:
              <Link href="https://github.com/barbaraim" color="inherit" className={classes.link}>
                Bárbara Irarrázaval,
              </Link>
              <Link href="https://github.com/humbertoortuzar" color="inherit" className={classes.link}>
                Humberto Ortúzar,
              </Link>
              <Link href="https://github.com/arpincheira" color="inherit" className={classes.link}>
                Andrés Pincheira,
              </Link>
              <Link href="https://github.com/meretamal" color="inherit" className={classes.link}>
                Moisés Retamal.
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-evenly" wrap="nowrap" className={classes.gridContainer}>
          <Grid item>
            <Typography variant="h3" className={classes.aboutQuote}>
              “Space is an inspirational concept that allows you to dream big.”
            </Typography>
            <Typography variant="body2" className={classes.aboutQuote}>
              Peter Diamandis
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

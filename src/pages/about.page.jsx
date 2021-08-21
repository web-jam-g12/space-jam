import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
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
  overlay: {
    justifyContent: 'center',
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

export default function AboutPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainPageImage}>
        <Header text="About" textColor="white" lineColor="white" backLink="/" />
        <Container>
          <Grid container spacing={2}>
            {/* eslint-disable-next-line camelcase */}
            <Typography variant="body1">
              This project was built with the information provided by https://thespacedevs.com/, for the DCC Web Jam 2021.
            </Typography>
            <Typography variant="body1">
              Images provided by NASA, SpaceX and Jeremy Perkins through Unsplash.
            </Typography>
            <Typography variant="body1">
              The team:

              Bárbara Irarrázaval @barbaraim
              Humberto Ortúzar @humbertoortuzar
              Andrés Pincheira @arpincheira
              Moisés Retamal @meretamal
            </Typography>
            <Typography>
              “Space is an inspirational concept that allows you to dream big.”
            </Typography>
            <Typography>
              Peter Diamandis
            </Typography>
          </Grid>
        </Container>
      </div>
    </>
  );
}

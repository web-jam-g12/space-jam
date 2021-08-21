/* eslint-disable camelcase */
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/header.component';
import MediaCard from '../components/media-card.component';
import { useGetAstronautListQuery } from '../api/astronauts.api';

import spaceImage from '../assets/images/nasa-Yj1M5riCKk4-unsplash.jpg';

const useStyles = makeStyles((theme) => ({
  mainPageImage: {
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    textAlign: 'center',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${spaceImage})`,
  },
  listContainer: {
    marginTop: theme.spacing(4),
  },
}));

export default function SpacecraftListPage() {
  const classes = useStyles();
  const { data } = useGetAstronautListQuery();
  return (
    <Box className={classes.mainPageImage}>
      <Header text="Choose your Astronaut" backLink="/" />
      <Container className={classes.listContainer}>
        <Grid container spacing={2} justifyContent="center">
          {data && data.results.map(({ id, name, profile_image_thumbnail }) => (
            <Grid item key={id} xs={6} sm={4} md={3} lg={2}>
              <MediaCard
                style={{ height: '100%' }}
                imageUrl={profile_image_thumbnail}
                title={name}
                link={`/astronauts/${id}`}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

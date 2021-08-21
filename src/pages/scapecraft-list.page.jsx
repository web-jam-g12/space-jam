import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/header.component';
import MediaCard from '../components/media-card.component';
import { useGetSpacecraftsListQuery } from '../api/spacecrafts.api';

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
  listContainer: {
    marginTop: theme.spacing(4),
  },
}));

export default function SpacecraftListPage() {
  const classes = useStyles();
  const { data } = useGetSpacecraftsListQuery();
  return (
    <Box className={classes.mainPageImage}>
      <Header text="Choose your Spacecraft" backLink="/" />
      <Container className={classes.listContainer}>
        <Grid container spacing={2} justifyContent="center">
          {/* eslint-disable-next-line camelcase */}
          {data && data.results.map(({ id, name, spacecraft_config }) => (
            <Grid item key={id} xs={12} sm={6} md={4} lg={2}>
              <MediaCard
                style={{ height: '100%' }}
                imageUrl={spacecraft_config.image_url}
                title={name}
                link={`/spacecrafts/${id}`}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

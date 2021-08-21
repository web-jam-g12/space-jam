import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/header.component';
import MediaCard from '../components/media-card.component';
import Pagination from '../components/pagination.component';
import { useGetSpacecraftsListQuery } from '../api/spacecrafts.api';

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
  paginationContainer: {
    padding: theme.spacing(4),
  },
}));

export default function SpacecraftListPage() {
  const [offset, setOffset] = useState(0);
  const classes = useStyles();
  const { data } = useGetSpacecraftsListQuery(offset);

  return (
    <Box className={classes.mainPageImage}>
      <Header text="Choose your Spacecraft" backLink="/" />
      <Container className={classes.listContainer} justifyContent="space-evenly">
        <Grid container spacing={2} justifyContent="center">
          {/* eslint-disable-next-line camelcase */}
          {data && data.results.map(({ id, name, spacecraft_config }) => (
            <Grid item key={id} xs={6} sm={4} md={3} lg={2}>
              <MediaCard
                style={{ height: '100%' }}
                imageUrl={spacecraft_config.image_url}
                title={name}
                link={`/spacecrafts/${id}`}
              />
            </Grid>
          ))}
        </Grid>
        <Container maxWidth="sm" className={classes.paginationContainer}>
          {data
            && (
            <Pagination
              max={Math.ceil(data.count / 10)}
              onChange={(value) => setOffset(value * 10 - 10)}
            />
            )}
        </Container>
      </Container>
    </Box>
  );
}
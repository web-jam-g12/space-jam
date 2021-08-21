import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../components/header.component';
import MediaCard from '../components/media-card.component';
import { useGetSpacecraftsListQuery } from '../api/spacecrafts.api';

export default function SpacecraftListPage() {
  const { data } = useGetSpacecraftsListQuery();
  return (
    <>
      <Header text="Choose your Spacecraft" textColor="black" lineColor="black" backLink="/" />
      <Container>
        <Grid container spacing={2}>
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
    </>
  );
}

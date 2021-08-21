import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import MediaCard from '../components/media-card.component';
import { useGetSpacecraftsListQuery } from '../api/spacecrafts.api';

export default function SpacecraftListPage() {
  const { data } = useGetSpacecraftsListQuery();
  const history = useHistory();
  return (
    <>
      <Box style={{
        borderBottom: '1px solid black',
        padding: '20px',
        width: '100vw',
        margin: 0,
      }}
      >
        <Grid container spacing={4} justifyContent="flex-start" alignItems="center">
          <Grid item>
            <IconButton color="action" aria-label="back" component="span" onClick={() => history.push('/')}>
              <ArrowBackIcon color="action" fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h3">Choose your Spacecraft</Typography>
          </Grid>
        </Grid>
      </Box>
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

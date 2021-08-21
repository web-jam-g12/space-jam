import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Header from '../components/header.component';
import { useGetSpacecraftDetailQuery } from '../api/spacecrafts.api';

const useStyles = makeStyles({
  imageContainer: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
});

export default function SpecificSpacecraftPage() {
  const { id } = useParams();
  const { data } = useGetSpacecraftDetailQuery(id);
  const classes = useStyles();

  return (
    <div className={classes.imageContainer} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data?.spacecraft_config.image_url})` }}>
      <Header text={data?.name} textColor="#BE45FF" lineColor="white" backLink="/spacecrafts" />
      <Grid container>
        <Grid item>
          <Typography variant="h3">Description</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">{data?.description}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

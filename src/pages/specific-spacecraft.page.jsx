import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Header from '../components/header.component';
import { useGetSpacecraftDetailQuery } from '../api/spacecrafts.api';

const useStyles = makeStyles(() => ({
  imageContainer: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  descriptionTitle: {
    color: '#F1BD06',
    opacity: '100%',
  },
  descriptionContainer: {
    backgroundColor: 'rgba(190, 69, 255, 0.2)',
    textAlign: 'left',
  },
}));

export default function SpecificSpacecraftPage() {
  const { id } = useParams();
  const { data } = useGetSpacecraftDetailQuery(id);
  const classes = useStyles();

  return (
    <div className={classes.imageContainer} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data?.spacecraft_config.image_url})` }}>
      <Header text={data?.name} textColor="#BE45FF" lineColor="white" buttonColor="white" backLink="/spacecrafts" />
      <Container>
        <Box pt={6}>
          <Grid container>
            <Grid className={classes.descriptionContainer} container item direction="column" justifyContent="space-between" wrap="nowrap" alignItems="flex-start" xs={12} md={6}>
              <Grid item>
                <Typography className={classes.descriptionTitle} variant="h5">Description</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{data?.description}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

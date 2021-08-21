import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Header from '../components/header.component';
import Loading from '../components/loading.component';
import { useGetSpacecraftDetailQuery } from '../api/spacecrafts.api';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundSize: 'cover',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  informationTitle: {
    color: '#F1BD06',
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
  },
  informationContent: {
    textAlign: 'left',
    padding: theme.spacing(2),
  },
  informationContainer: {
    backgroundColor: 'rgba(190, 69, 255, 0.3)',
    border: '1px solid #BE45FF',
  },
}));

export default function SpecificSpacecraftPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSpacecraftDetailQuery(id);
  const classes = useStyles();
  return (
    <>
      {isLoading && <Loading />}
      <div className={classes.imageContainer} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${data?.spacecraft_config.image_url})` }}>
        <Header text={data?.name} textColor="#BE45FF" lineColor="white" buttonColor="white" backLink="/spacecrafts" />
        <Container>
          <Box pt={6}>
            <Grid container>
              <Grid className={classes.informationContainer} container item direction="column" justifyContent="space-between" wrap="nowrap" alignItems="flex-start" xs={12} md={6}>
                <Grid item>
                  <Typography className={classes.informationTitle} variant="h5">Description</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.informationContent} variant="body1">{data?.description}</Typography>
                </Grid>
                <Grid item container>
                  <Typography className={classes.informationTitle} variant="h5">Serial Number </Typography>
                  <Typography className={classes.informationContent} variant="body1">{data?.serial_number}</Typography>
                </Grid>
                <Grid item container>
                  <Typography className={classes.informationTitle} variant="h5">Status </Typography>
                  <Typography className={classes.informationContent} variant="body1">{data?.status.name}</Typography>
                </Grid>
                <Grid item container>
                  <Typography className={classes.informationTitle} variant="h5">Agency Name </Typography>
                  <Typography className={classes.informationContent} variant="body1">{data?.spacecraft_config.agency.name}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
}

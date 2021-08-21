import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Header from '../components/header.component';
import Loading from '../components/loading.component';
import { useGetAstronautDetailQuery } from '../api/astronauts.api';

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
  profileContainer: {
    backgroundColor: 'rgba(190, 69, 255, 0.3)',
    border: '1px solid #BE45FF',
  },
  informationContainer: {
    borderLeft: '1px solid #FFFFFF',
    margin: '2vw',
    paddingRight: '2vw',
  },
  imageProfileContainer: {
    padding: '2vw',
  },
  profileImage: {
    maxWidth: '15vw',
  },
}));

export default function SpecificAstronautPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetAstronautDetailQuery(id);
  const classes = useStyles();
  return (
    <>
      {isLoading && <Loading />}
      <div className={classes.imageContainer} style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1670&q=80)' }}>
        <Header text={data?.name} textColor="#BE45FF" lineColor="white" buttonColor="white" backLink="/astronauts" />
        <Container>
          <Box pt={6}>
            <Grid container>
              <Grid className={classes.profileContainer} container item direction="row" justifyContent="space-between" wrap="nowrap" alignItems="flex-start">
                <Grid item className={classes.imageProfileContainer}>
                  <img
                    className={classes.profileImage}
                    src={data?.profile_image}
                    alt={data?.name}
                  />
                </Grid>
                <Grid item>
                  <Grid className={classes.informationContainer} container item direction="column" justifyContent="space-between" wrap="nowrap" alignItems="flex-start">
                    <Grid item container>
                      <Typography className={classes.informationTitle} variant="h5">Date of Birth </Typography>
                      <Typography className={classes.informationContent} variant="body1">{data?.date_of_birth}</Typography>
                    </Grid>
                    <Grid item container>
                      <Typography className={classes.informationTitle} variant="h5">Agency </Typography>
                      <Typography className={classes.informationContent} variant="body1">{data?.agency.name}</Typography>
                    </Grid>
                    <Grid item container>
                      <Typography className={classes.informationTitle} variant="h5">Status </Typography>
                      <Typography className={classes.informationContent} variant="body1">{data?.status.name}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.informationTitle} variant="h5">Biography</Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.informationContent} variant="body1">{data?.bio}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
}

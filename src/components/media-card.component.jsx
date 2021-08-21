import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  container: {
    cursor: 'pointer',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));

export default function MediaCard({ imageUrl, title, link }) {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Card className={classes.container} onClick={() => history.push(link)} variant="outlined">
      <CardMedia className={classes.cardMedia} image={imageUrl} />
      <CardContent>
        <Typography className={classes.text} align="center">{title}</Typography>
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

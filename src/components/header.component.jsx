import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

export default function Header({ text, textColor, backLink }) {
  const history = useHistory();
  return (
    <Box style={{
      borderBottom: '1px solid black',
      padding: '20px',
      width: '100vw',
      margin: 0,
    }}
    >
      <Grid container spacing={4} justifyContent="flex-start" alignItems="center">
        <Grid item>
          <IconButton color="action" aria-label="back" component="span" onClick={() => history.push(backLink)}>
            <ArrowBackIcon color="action" fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h3" style={{ color: textColor }}>{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  backLink: PropTypes.string.isRequired,
};

Header.defaultProps = {
  textColor: 'white',
};

import React, { useState, useEffect } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  field: {
    border: '1px solid white',
  },
  whiteColor: {
    color: 'white',
  },
}));

export default function Pagination({
  min, max, onChange,
}) {
  const [page, setPage] = useState(parseInt(min, 10));
  const classes = useStyles();

  useEffect(() => {
    if (page >= min && page <= max) {
      onChange(page);
    }
  }, [page]);

  return (
    <Grid container justifyContent="space-around">
      <Grid item xs={2}>
        <IconButton onClick={() => setPage(page - 1)} disabled={page === min}>
          <ChevronLeftIcon style={{ color: 'white' }} />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <TextField className={classes.field} inputProps={{ className: classes.whiteColor }} color="primary" type="number" variant="outlined" size="small" value={page} onChange={(e) => setPage(e.target.value)} />
      </Grid>
      <Grid item xs={4}>
        <Typography>
          of
          {' '}
          {max}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={() => setPage(parseInt(page, 10) + 1)} disabled={page === max}>
          <ChevronRightIcon style={{ color: 'white' }} />
        </IconButton>
      </Grid>
    </Grid>
  );
}

Pagination.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  min: 1,
};

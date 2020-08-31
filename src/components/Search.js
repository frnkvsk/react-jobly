import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    width: '100%',
    margin: '30px 0 20px 0',
    // border: '1px solid red'
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
  },
}));

export default function Search({companies}) {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField className={classes.input} id="outlined-basic" label="Search for a company" variant="outlined" />
      <Button variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
}

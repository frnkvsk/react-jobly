import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import { Button, Container } from '@material-ui/core';
// import BusinessIcon from '@material-ui/icons/Business';
import JobCard from './JobCard';
import Search from './Search';
import { Container } from '@material-ui/core';

// import CompaniesCard from './CompaniesCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    maxWidth: 'lg',
    // height: '100vh',
    // backgroundColor: '#ffffff',
    // border: '1px solid red'
  },
  form: {
    display: 'flex',
    width: '100%',
    margin: '30px 0 20px 0',
    // border: '1px solid red'
  },
  input: {
    width: '100%'
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '20px 0 20px 20px',
    margin: '10px 0 10px 0',
    border: '1px solid lightgray',
  },
  info: {
    width: '80%',
  },
  icon: {
    fontSize: '40px',
    margin: '30px 20px 0 0',
  },
}));

export default function Jobs({jobs}) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Search /> 
      {jobs.map(e => <JobCard job={e} /> )}
    </Container>
  );
}

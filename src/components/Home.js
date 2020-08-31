import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    height: '100vh',
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Jobly</h2>
      <p>All the jobs in on, convenient place.</p>
      <Button variant="contained" color="primary">
        Log In
      </Button>
    </div>
  );  
}

export default Home;
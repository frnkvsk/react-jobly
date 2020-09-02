import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { LoginContext } from '../context/LoginContext';

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
  const {loginStatus} = useContext(LoginContext);
  return (
    <div className={classes.root}>
      <h2>Jobly</h2>
      <p>All the jobs in on, convenient place.</p>
      {!loginStatus ? 
      <Button variant="contained" color="primary">
        log in / sign up  
      </Button>
      : null}
    </div>
  );  
}

export default Home;
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AuthContext } from '../context/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    fontSize: '28px',
    height: '100vh',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20vh',
  }
}));

const Home = () => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <h2>Jobly</h2>
        <p>All the jobs in on, convenient place.</p>
        {!auth.authState.token ? 
        <Button variant="contained" color="primary">
          log in / sign up  
        </Button>
        : null}
      </main>
      
    </div>
  );  
}

export default Home;
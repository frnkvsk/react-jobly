import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from '../context/AuthContext';
import { postUserApply } from '../api/JoblyApi';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    minWidth: 275,
    margin: '10px 10px 0 10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
    "&:hover": {
      boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
    },
    cursor: 'pointer',
    backgroundColor: '#ffffff',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    margin: '10px 0 10px',
  },
  pos: {
    margin: '0 0 0',
  },
});

export default function JobCard({job}) {
  const classes = useStyles();  
  const auth = useContext(AuthContext);
  const [state, setState] = useState({
    applied: auth.authState.userInfo.jobs ? auth.authState.userInfo.jobs.includes(job.id) : false
  });
  const handleApply = async () => {
    let {jobs} = auth.authState.userInfo;
    const {token} = auth.authState;
    const {username} = auth.authState.userInfo;

    if(jobs.includes(job.id)) {
      jobs = jobs.filter(e => e !== job.id);
      await postUserApply(token, job.id, username, "closed");
    } else {
      jobs.push(job.id);
      await postUserApply(token, job.id, username, "applied");
    }     
      
    const authInfo = {
      token: auth.authState.token,
      userInfo: {
        ...auth.authState.userInfo,
        jobs: jobs
      }
    }
    auth.setAuthState(authInfo);
    setState({applied: !state.applied})
  }

  return (    
    <Card className={classes.root}>
      <CardContent>        
        <Typography className={classes.title} variant="h5" component="h2">
          {job.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Salary: {job.salary}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Equity: {job.equity}
        </Typography>        
      </CardContent>
      <CardActions>
      <Button onClick={handleApply} className={classes.btn} variant={state.applied ? "outlined" : "contained"} color="secondary">
        {state.applied ? "Applied" : "Apply"}
      </Button>
      </CardActions>
    </Card>  
  );
}


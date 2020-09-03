import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      <Button className={classes.btn} variant="contained" color="secondary">
        Apply
      </Button>
      </CardActions>
    </Card>
  );
}


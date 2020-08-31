import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import BusinessIcon from '@material-ui/icons/Business';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    minWidth: 275,
    marginTop: '10px',
    // boxShadow: '0 1px 2px rgba(0,0,0,0.16)',
    // boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
    "&:hover": {
      boxShadow: '0 1px 2px rgba(0,0,0,0.3)'
    },
    cursor: 'pointer',
    // backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    margin: '10px',
  },
  icon: {
    fontSize: '40px',
    margin: '30px 20px 0 0',
  },
});


export default function CompanyCard({company}) {
  const classes = useStyles();
  const history = useHistory();
  const redirect = () => {
    history.push(`/companies/${company.handle}`);
  }
  return (
    <Card className={classes.root} variant="outlined" onClick={redirect}>
      <CardContent>        
        <Typography className={classes.pos} variant="h5" component="h2">
          {company.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {company.description}
        </Typography>  
      </CardContent>
      <CardActions className={classes.pos} >
      <BusinessIcon className={classes.icon} />
      </CardActions>
    </Card>
  );
}


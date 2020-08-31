import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
    display: 'flex',
    width: '100%',
    margin: '30px 0 20px 0',
    border: '1px solid red'
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

export default function CompaniesCard({companies}) {
  const classes = useStyles();

  return (
    <>    
      <Container className={classes.root} >
        <form className={classes.form} noValidate autoComplete="off">
          <TextField className={classes.input} id="outlined-basic" label="Search for a company" variant="outlined" />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </form>
        
        {companies.map(company => (
        <div className={classes.card} >
          <div className={classes.info} >
            <div><b>{company.name}</b></div>
            <div>{company.description}</div>
          </div>
          <BusinessIcon className={classes.icon} />
          {/* TODO button changes to Applied */}
        </div>  
        ))}
      </Container>
    </>
  );
}

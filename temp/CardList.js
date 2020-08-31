import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    maxWidth: 'lg',
    border: '1px solid red'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '20px 0 20px 20px',
    paddingTop: '30px',

  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '20px 0 20px 20px',
    margin: '10px 0 10px 0',
    border: '1px solid lightgray',
  },
  btn: {
    // display: 'absolute',
    // position: 'relative',
    // top: '50px',
    // left: '30px',
    margin: '60px 30px 0 0',
    height: '30px', 
  }
}));

export default CardList = ({title, items}) => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root} >
        <div className={classes.header}>
          <div><b>{title.name}</b></div>
          <div>{title.description}</div>
        </div>
        {items.map(item => (
        <div className={classes.card} >
          <div>
          <div><b>{item.title}</b></div>
          <div>Salary: {item.salary}</div>
          <div>Equity: {item.equity}</div>
          </div>
          <Button className={classes.btn} variant="contained" color="secondary">
            Apply
          </Button>
          {/* TODO button changes to Applied */}
        </div>  
        ))}
      </Container>
    </>
  );  
}

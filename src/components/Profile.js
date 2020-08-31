import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, FormHelperText, } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '500px',
    padding: '30px',
    height: '100vh',
    // backgroundColor: '#ffffff',
  },
  form: {
    // border: '1px solid red',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    width: '90%',
    margin: '10px 20px 0 20px',
  },
  input: {
    width: '90%',
    margin: '0 20px 0 20px',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px 20px 15px',
  }

}));

export default function Profile({user}) {
  //username, password, first_name, last_name, email, photo_url, is_admin
  const classes = useStyles();
  const username = useFormOutlinedInput(user.username);
  const first_name = useFormOutlinedInput(user.first_name);
  const last_name = useFormOutlinedInput(user.last_name);
  const email = useFormOutlinedInput(user.email);
  const photo_url = useFormOutlinedInput(user.photo_url);  

  return (
    
    <Container className={classes.root}>
      <h1>Profile</h1>      
      <form className={classes.form}>      
        <FormHelperText className={classes.label} id="standard-weight-helper-text">Username</FormHelperText>
        <FormHelperText className={classes.label} id="standard-weight-helper-text">{username.value}</FormHelperText>

        <FormHelperText className={classes.label} id="standard-weight-helper-text">First Name</FormHelperText>
        <OutlinedInput className={classes.input} name="first_name" variant="outlined" {...first_name}/>

        <FormHelperText className={classes.label} id="standard-weight-helper-text">Last Name</FormHelperText>
        <OutlinedInput className={classes.input} name="last_name" variant="outlined" {...last_name}/>

        <FormHelperText className={classes.label} id="standard-weight-helper-text">Email</FormHelperText>
        <OutlinedInput className={classes.input} name="email" variant="outlined" {...email}/>

        <FormHelperText className={classes.label} id="standard-weight-helper-text">Photo URL</FormHelperText>
        <OutlinedInput className={classes.input} name="photo_url" variant="outlined" {...photo_url}/>
        <div className={classes.button}>
          <Button variant="contained" color="primary">Submit</Button>
        </div>          
      </form>
      
    </Container>
  );
}

function useFormOutlinedInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value, 
    onChange: handleChange
  };
}

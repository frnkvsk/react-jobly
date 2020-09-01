import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container, FormHelperText, } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Button } from '@material-ui/core';

import {login} from '../api/JoblyApi'
import {useFormInput} from '../hooks/useFormInput';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

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

export default function Login(login_status) {
  

  const classes = useStyles();
  const [loginType, setValue] = React.useState(login_status);

  const username = useFormInput("");
  const password = useFormInput("");
  const first_name = useFormInput("");
  const last_name = useFormInput("");
  const email = useFormInput("");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = () => {
    login(username.value, password.value);
  }
  return (
    
    <Container className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={loginType}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Login" value="login" />
          <LinkTab label="Sign up" value="signup" />
        </Tabs>
      </AppBar>
      
      {loginType === 'login' ?    
        <form className={classes.form} noValidate autoComplete="off">
          <FormHelperText className={classes.label} id="standard-weight-helper-text">username</FormHelperText>
          <OutlinedInput className={classes.input} name="username" variant="outlined" {...username}/>

          <FormHelperText className={classes.label} id="standard-weight-helper-text">Password</FormHelperText>
          <OutlinedInput className={classes.input} name="password" type="password" variant="outlined" {...password} />
          <div className={classes.button}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
                :
        <form className={classes.form}>      
          <FormHelperText className={classes.label} id="standard-weight-helper-text">username</FormHelperText>
          <OutlinedInput className={classes.input} name="username" variant="outlined" {...username}/>

          <FormHelperText className={classes.label} id="standard-weight-helper-text">Password</FormHelperText>
          <OutlinedInput className={classes.input} name="password" type="password" variant="outlined" {...password}/>

          <FormHelperText className={classes.label} id="standard-weight-helper-text">First Name</FormHelperText>
          <OutlinedInput className={classes.input} name="first_name" variant="outlined" {...first_name}/>

          <FormHelperText className={classes.label} id="standard-weight-helper-text">Last Name</FormHelperText>
          <OutlinedInput className={classes.input} name="last_name" variant="outlined" {...last_name}/>

          <FormHelperText className={classes.label} id="standard-weight-helper-text">Email</FormHelperText>
          <OutlinedInput className={classes.input} name="email" variant="outlined" {...email}/>
          <div className={classes.button}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
          </div>
          
        </form>
      }
    </Container>
  );
}



/** Login and Signup */
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container, FormHelperText, Box, } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { login, signup } from '../api/JoblyApi'
import { useFormInput } from '../hooks/useFormInput';
import { LoginContext } from '../context/LoginContext';
import { useLogin } from '../hooks/useLogin';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import { AuthContext } from '../context/AuthContext';
// import

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
  },
  err: {
    color: '#ff1744',
    fontSize: '24px',
  }

}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  // const authContext = useContext(AuthContext);
  const {setLoginStatus} = useContext(LoginContext);

  
  const [,setTokenStorage] = useLogin();
  // const {setToken} = useLocalStorage("token");
  const [loginType, setValue] = useState("signup");
  const [errorMessage, setErrorMessage] = useState(false);
  
  const username = useFormInput("");
  const password = useFormInput("");
  const first_name = useFormInput("");
  const last_name = useFormInput("");  
  const photo_url = useFormInput("");
  const email = useFormInput("");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleSubmitLogin = async () => {
    setErrorMessage(false);
    try {
      const resp = await login(username.value, password.value);
      setLoginStatus(true);
      console.log('Login handleSubmitLogin resp.token',resp.token)
      setTokenStorage(resp.token);
      history.push(`/`);
    } catch (error) {
      setErrorMessage(true);
    }    
  }
  const handleSubmitSignup = async () => {
    setErrorMessage(false);
    try {
      const resp = await signup(username.value, password.value, first_name.value, last_name.value, photo_url.value, email.value);
      setLoginStatus(true);
      setTokenStorage(resp.token);
      history.push(`/`);
    } catch (error) {
      setErrorMessage(true);
    }    
  }

  return (
    
    <Container className={classes.root}>
      <Box className={classes.err} 
        component="span" 
        display={errorMessage ? 'block' : 'none'}
        >
          Error: Invalid credentials
      </Box>
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
        <form className={classes.form}>
          <FormHelperText className={classes.label} >username</FormHelperText>
          <OutlinedInput className={classes.input} name="username" variant="outlined" {...username}/>

          <FormHelperText className={classes.label} >Password</FormHelperText>
          <OutlinedInput className={classes.input} name="password" type="password" variant="outlined" {...password} />
          <div className={classes.button}>
            <Button variant="contained" color="primary" onClick={handleSubmitLogin}>Submit</Button>
          </div>
        </form>
                :
        <form className={classes.form}>      
          <FormHelperText className={classes.label} >username</FormHelperText>
          <OutlinedInput className={classes.input} name="username" variant="outlined" {...username}/>

          <FormHelperText className={classes.label} >Password</FormHelperText>
          <OutlinedInput className={classes.input} name="password" type="password" variant="outlined" {...password}/>

          <FormHelperText className={classes.label} >First Name</FormHelperText>
          <OutlinedInput className={classes.input} name="first_name" variant="outlined" {...first_name}/>

          <FormHelperText className={classes.label} >Last Name</FormHelperText>
          <OutlinedInput className={classes.input} name="last_name" variant="outlined" {...last_name}/>

          <FormHelperText className={classes.label} >Photo URL</FormHelperText>
          <OutlinedInput className={classes.input} name="photo_url" variant="outlined" {...photo_url}/>

          <FormHelperText className={classes.label} >Email</FormHelperText>
          <OutlinedInput className={classes.input} name="email" variant="outlined" {...email}/>
          <div className={classes.button}>
            <Button variant="contained" color="primary" onClick={handleSubmitSignup}>Submit</Button>
          </div>
          
        </form>
      }
    </Container>
  );
}



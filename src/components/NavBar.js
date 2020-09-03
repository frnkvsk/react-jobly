import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import { LoginContext } from '../context/LoginContext';
// import { useLogin } from '../hooks/useLogin';
import { AuthContext } from '../context/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // fontSize: '20px',
    color: '#ffffff',
    textDecoration: 'none',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  // const {loginStatus, setLoginStatus} = useContext(LoginContext);
  // const {setTokenStorage} = useLogin();
  const auth = useContext(AuthContext);
  console.log('NavBar auth=',auth)
  const handleClick = () => {
    // setLoginStatus(false);    
    // setTokenStorage("");
    auth.setAuthState({
      token: "",
      userInfo: {}
    });
  }

  return (
    <div className={classes.root}>
      {/* {console.log('NavBar loginStatus',loginStatus)} */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title} component={Link} to={"/"} >
            Jobly
          </Typography>
          {auth.authState.token !== "" ? <>
            <Button color="inherit" component={Link} to={"/companies"} >Companies</Button>
            <Button color="inherit" component={Link} to={"/jobs"} >Jobs</Button>
            <Button color="inherit" component={Link} to={"/profile"} >Profile</Button>
            <Button onClick={handleClick} color="inherit" component={Link} to={"/login"} >Log out</Button>
            </> :
            <Button color="inherit" component={Link} to={"/login"} >login / signup</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}


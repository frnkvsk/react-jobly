import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import EventNoteIcon from '@material-ui/icons/EventNote';
// import Icon from '@material-ui/core/Icon';


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
  button: {
    fontWeight: 'bold',
    // border: '1px solid gray',
    // textDecoration: 'underline',
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const handleClick = () => {
    auth.setAuthState({
      token: "",
      userInfo: {}
    });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title} component={Link} to={"/"} >
            Jobly
          </Typography>
          {auth.authState.token !== "" ? <>
            <Button color="inherit" component={Link} to={"/companies"} >Companies</Button>
            <Button color="inherit" component={Link} to={"/jobs"} >Jobs</Button>
            <Button color="inherit" component={Link} to={"/profile"} >Profile</Button>
            <Button className={classes.button} color="inherit" startIcon={<EventNoteIcon />} component={Link} to={"/applications"} >Applications</Button>
            
            <Button onClick={handleClick} color="inherit" component={Link} to={"/login"} >Log out</Button>
            </> :
            <Button color="inherit" component={Link} to={"/login"} >login / signup</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}


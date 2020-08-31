import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

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

export default function NavBar({loggedin}) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title} component={Link} to={"/"} >
            Jobly
          </Typography>
          {loggedin ? <>
            <Button color="inherit" component={Link} to={"/companies"} >Companies</Button>
            <Button color="inherit" component={Link} to={"/jobs"} >Jobs</Button>
            <Button color="inherit" component={Link} to={"/profile"} >Profile</Button>
            <Button color="inherit" component={Link} to={"/login"} >Log out</Button>
            </> :
            <Button color="inherit" component={Link} to={"/login"} >Login</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}


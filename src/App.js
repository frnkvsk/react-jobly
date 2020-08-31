import React from 'react';
import {BrowserRouter, Route, Switch, useParams} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Company from './components/Company';
import Companies from './components/Companies';
import Jobs from './components/Jobs';
import Profile from './components/Profile';
import Login from './components/Login';
import Page404 from './components/Page404';


// import {companies, jobs, user} from './testData';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  
}));
function CompanyHandle() {
  let handle = useParams();
  return <Company handle={handle} />
}
function App() {
  const classes = useStyles();
  
  return (
    // <main>
      <BrowserRouter>
        <NavBar loggedin={true} />
        <main className={classes.root}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/company/:handle"> 
              <CompanyHandle />
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route exact path="/jobs">
              <Jobs />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/login">
              <Login login={"signup"} />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    // </main>
  );
}

export default App;

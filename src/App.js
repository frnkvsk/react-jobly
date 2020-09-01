import React, {useState} from 'react';
import {BrowserRouter, Route, Switch, useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Company from './components/Company';
import Companies from './components/Companies';
import Jobs from './components/Jobs';
import Profile from './components/Profile';
import Login from './components/Login';
import Page404 from './components/Page404';
import {SearchContext} from './context/SearchContext';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  
}));
function CompanyHandle() {
  let {handle} = useParams();
  console.log('App CompanyHandle handle=',handle)
  return <Company handle={handle} />
}

function App() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  return (
      <BrowserRouter>
        <NavBar loggedin={true} />
        <main className={classes.root}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/companies/:handle"> 
              <CompanyHandle />
            </Route>
            <Route exact path="/companies">
              <SearchContext.Provider value={{search, setSearch}}>
                <Companies />
              </SearchContext.Provider>              
            </Route>
            <Route exact path="/jobs">
              <SearchContext.Provider value={{search, setSearch}}>
                <Jobs />
              </SearchContext.Provider>    
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
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Company from './pages/Company';
import Companies from './pages/Companies';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import { SearchContext } from './context/SearchContext';
import { LoginContext } from './context/LoginContext';
import { useLogin } from './hooks/useLogin';

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
  const [token] = useLogin();
  console.log('App token',token)
  const [search, setSearch] = useState("");
  
  const [loginStatus, setLoginStatus] = useState(token ? true : false);

  return (
      <BrowserRouter>
        <LoginContext.Provider value={{loginStatus, setLoginStatus}}>
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
        </LoginContext.Provider>
        
      </BrowserRouter>
  );
}

export default App;

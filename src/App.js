import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Company from './pages/Company';
import Companies from './pages/Companies';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Applications from './pages/Applications';
import { SearchProvider } from './context/SearchContext';
import { AuthProvider } from './context/AuthContext';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
  },
  
}));

function App() {
  const classes = useStyles();
  return (
      <BrowserRouter>
        <AuthProvider>
        <SearchProvider>
        <NavBar loggedin={true} />
          <main className={classes.root}>
            <Switch>
              <Route exact path="/">
                <Home />          
              </Route>
              <Route exact path="/companies/:handle"> 
                <Company />
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
                <Login />
              </Route>
              <Route exact path="/applications">
                <Applications />
              </Route>
              <Route>
                <Page404 />
              </Route>
            </Switch>
          </main>
          </SearchProvider>   
        </AuthProvider>        
      </BrowserRouter>
  );
}

export default App;

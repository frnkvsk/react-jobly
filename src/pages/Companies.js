import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompanyCard from '../components/CompanyCard';
import Search from '../components/SearchBar';
import { Container } from '@material-ui/core';
import { getCompanies } from '../api/JoblyApi';
import { SearchContext } from '../context/SearchContext';
import { AuthContext } from '../context/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    maxWidth: 'lg',
  },
  form: {
    display: 'flex',
    width: '100%',
    margin: '30px 0 20px 0',
  },
  input: {
    width: '100%'
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '20px 0 20px 20px',
    margin: '10px 0 10px 0',
    border: '1px solid lightgray',
  },
  info: {
    width: '80%',
  },
  icon: {
    fontSize: '40px',
    margin: '30px 20px 0 0',
  },
}));

export default function Companies() {
  const classes = useStyles();
  const searchContext = useContext(SearchContext);
  const [companies, setCompanies] = useState([]);
  const authContext = useContext(AuthContext);
  const params = {search: searchContext.searchState.search, _token: authContext.authState.token};

  useEffect(() => {
    const getComps = async () => {
      const comps = await getCompanies(params);  
      setCompanies(comps.companies);
    }
    getComps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search]);

  return (
    <Container className={classes.root}>       
      <Search next={"companies"}/>            
      {companies.length ? companies.map(e => <CompanyCard key={e.handle} company={e} /> ) : "...loading"}
    </Container>
  );
}

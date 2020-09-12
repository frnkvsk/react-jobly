import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompanyCard from '../components/CompanyCard';
import Search from '../components/SearchBar';
import { Container } from '@material-ui/core';
import { getCompanies } from '../api/JoblyApi';
import { SearchContext } from '../context/SearchContext';
import { AuthContext } from '../context/AuthContext';
import PaginationComp from '../components/Pagination';
import { PageCountContext } from '../context/PageCountContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    fontSize: '28px',
    maxWidth: 'lg',
  },
  pagination: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
}));

export default function Companies() {
  const classes = useStyles();
  const searchContext = useContext(SearchContext);
  const [companies, setCompanies] = useState([]);
  const pageCountContext = useContext(PageCountContext);
  let {pageCurr} = pageCountContext.pageContext;
  const authContext = useContext(AuthContext);
  const params = {search: searchContext.searchState.search, _token: authContext.authState.token};
  
  useEffect(() => {
    const getValue = async () => {
      const value = await getCompanies(params); 
      if(value) {
        setCompanies(value.companies);
      }       
    }
    getValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search]);
  return (
    <Container className={classes.root}>       
      <Search nextPage={"companies"}/>            
      {companies.length ? companies.slice((pageCurr*10), (pageCurr*10)+10).map(e => <CompanyCard key={e.handle} company={e} /> ) : "...loading"}
      <PaginationComp pageCount={companies.length}/>     
    </Container>
  );
}

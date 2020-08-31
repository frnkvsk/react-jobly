import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CompanyCard from './CompanyCard';
import Search from './Search';
import { Container } from '@material-ui/core';
import JoblyApi from '../api/JoblyApi';
// import CompaniesCard from './CompaniesCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    maxWidth: 'lg',
    // height: '100vh',
    // border: '1px solid red'
  },
  form: {
    display: 'flex',
    width: '100%',
    margin: '30px 0 20px 0',
    // border: '1px solid red'
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
    // backgroundColor: '#ffffff',
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
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const getCompanies = async () => {
      const comps = await JoblyApi.getCompanies();  
      setCompanies(comps);
      console.log('useEffect companies=',companies)
    }
    getCompanies();
  })
  console.log('Companies export default companies = ',companies)
  return (
    <Container className={classes.root}>      
      <Search /> 
      {companies.length ? companies.map(e => <CompanyCard company={e} /> ) : "...loading"}
    </Container>
  );
}

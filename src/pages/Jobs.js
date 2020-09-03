import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import JobCard from '../components/JobCard';
import Search from '../components/SearchBar';
import { Container } from '@material-ui/core';
import { getJobs } from '../api/JoblyApi';
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
    // height: '100vh',
    // backgroundColor: '#ffffff',
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
  },
  info: {
    width: '80%',
  },
  icon: {
    fontSize: '40px',
    margin: '30px 20px 0 0',
  },
}));

export default function Jobs() {
  const classes = useStyles();
  const searchContext = useContext(SearchContext);
  // searchContext.setSearchState({search: ""});
  const [jobs, setJobs] = useState([]);

  const auth = useContext(AuthContext);
  const params = {search: searchContext.searchState.search, _token: auth.authState.token}; 
  
  console.log('Jobs params=',params)
  useEffect(() => {
    const getValue = async () => {
      const value = await getJobs(params);
      console.log('Company useEffect getValue value=',value.jobs)
      setJobs(value.jobs.slice());
    }
    getValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search]);

  return (
    <Container className={classes.root}>
      <Search next={"jobs"}/> 
      {jobs.map(e => <JobCard job={e} /> )}
    </Container>
  );
}

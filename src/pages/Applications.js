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
    justifyContent: 'flex-start',
    minHeight: '100vh',
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

export default function Applications() {
  const classes = useStyles();
  const searchContext = useContext(SearchContext);
  const [jobs, setJobs] = useState([]);
  const auth = useContext(AuthContext);
  const params = {search: searchContext.searchState.search, _token: auth.authState.token}; 
  
  useEffect(() => {
    const getValue = async () => {
      const value = await getJobs(params);
<<<<<<< HEAD
      setJobs(value.jobs.filter(job => auth.authState.userInfo.jobs.includes(job.id) ) );
=======
      if(value) {
        setJobs(value.jobs.filter(job => auth.authState.userInfo.jobs.includes(job.id) ) );
      }      
>>>>>>> e94462676a209fbe08e3ccc29a60c1d58665523b
    }
    getValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search, auth.authState.userInfo.jobs]);

  return (
    <Container className={classes.root}>
      <Search nextPage={"jobs"}/> 
      {jobs.length ? jobs.map(job => <JobCard key={job.id} job={job} /> ) : <h3>You have no applications.</h3>}
    </Container>
  );
}

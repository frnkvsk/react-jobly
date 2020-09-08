import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import JobCard from '../components/JobCard';
import Search from '../components/SearchBar';
import { Container } from '@material-ui/core';
import { getJobs } from '../api/JoblyApi';
import { SearchContext } from '../context/SearchContext';
import { AuthContext } from '../context/AuthContext';
import { PageCountContext } from '../context/PageCountContext';

import PaginationComp from '../components/Pagination';

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

export default function Jobs() {
  const classes = useStyles();
  const searchContext = useContext(SearchContext);
  const [jobs, setJobs] = useState([]);
  const pageCountContext = useContext(PageCountContext);  
  const auth = useContext(AuthContext);
  const params = {search: searchContext.searchState.search, _token: auth.authState.token}; 
  let pageCurr = pageCountContext.pageContext ? pageCountContext.pageContext.pageCurr : 1;

  useEffect(() => {
    const getValue = async () => {
      try {
        const value = await getJobs(params);
        setJobs(value.jobs.slice());
      } catch (error) {
        console.debug('--Jobs useEffect getValue error',error);
      }
    }
    getValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.search]);

  return (
    <Container className={classes.root}>
      <Search nextPage={"jobs"}/> 
      { jobs.length ?
        jobs
          .slice((pageCurr*10), (pageCurr*10)+10)
          .map(job => <JobCard key={job.id} job={job} /> )
        :
        <div>...Loading</div>
      }
      <PaginationComp pageCount={jobs.length}/>
    </Container>
  );
}

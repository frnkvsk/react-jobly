import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import JobCard from '../components/JobCard';
import { getJobs, getCompany } from '../api/JoblyApi';
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
  header: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '20px 0 20px 20px',
    paddingTop: '30px',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '20px 0 20px 20px',
    margin: '10px 0 10px 0',
    border: '1px solid lightgray',
  },
  btn: {
    margin: '60px 30px 0 0',
    height: '30px', 
  }
}));

const Company = () => {
  const classes = useStyles();
  const {handle} = useParams();
  const [company, setCompany] = useState(null);
  const [jobs, setJobs] = useState([]);
  const auth = useContext(AuthContext);
  const params = {_token: auth.authState.token};
  useEffect(() => {
    const getValue = async () => {
      const value = await getCompany(params, handle);
      if(value) {
        setCompany(value.company);
      }      
    }
    getValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const getValue = async () => {
      const value = await getJobs(params);
      if(value) {
        setJobs(value.jobs.filter(e => e.company_handle === handle));
      }      
    }
    if(!jobs.length) getValue();
  });
  return (
    <>
      <Container className={classes.root} >
        {
          company ? 
            <div className={classes.header}>
              <div><b>{company.name}</b></div>
              <div>{company.description}</div>
            </div> :
            <h1>...Loading</h1>
        }
        
        {
          jobs.length ? jobs.map(job => (
            <JobCard key={job.id} job={job} />
          )) : 
          <h1>...Loading</h1>
        }
      </Container>
    </>
  );  
}

export default Company;
import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import JobCard from '../components/JobCard';
import {getJobs, getCompany} from '../api/JoblyApi';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    maxWidth: 'lg',
    // backgroundColor: '#ffffff',
    // height: '100vh',
    // border: '1px solid red'
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
    // display: 'absolute',
    // position: 'relative',
    // top: '50px',
    // left: '30px',
    margin: '60px 30px 0 0',
    height: '30px', 
  }
}));

const Company = ({handle}) => {
  const classes = useStyles();
  const [company, setCompany] = useState(null);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getValue = async () => {
      const value = await getCompany(handle);
      console.log('Company useEffect value=',value)
      setCompany(value.company);
    }
    if(!company) getValue();
  });
  useEffect(() => {
    const getValue = async () => {
      const value = await getJobs();
      console.log('Company useEffect getValue value=',value.jobs)
      setJobs(value.jobs.filter(e => e.company_handle === handle));
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

// const useGetCompany = handle => {
//   const [value, setValue] = useState({});
//   useEffect(() => {
//     const getValue = async () => {
//       const value = await JoblyApi.getCompany(handle);
//       setValue(value);
//     }
//     getValue();
//   });
//   return value;
// }
// const useGetJobs = handle => {
//   const [value, setValue] = useState([]);
//   useEffect(() => {
//     const getValue = async () => {
//       const value = await JoblyApi.getJobs();;
//       setValue(value.filter(e => e.company_handle === handle));
//     }
//     getValue();
//   });
//   return value;
// }
export default Company;
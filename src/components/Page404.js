import React from 'react';
// import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';
// import JobCard from './JobCard';
// import JoblyApi from '../api/JoblyApi';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '28px',
//     maxWidth: 'lg',
//     // backgroundColor: '#ffffff',
//     // height: '100vh',
//     // border: '1px solid red'
//   },
//   header: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     margin: '20px 0 20px 20px',
//     paddingTop: '30px',

//   },
//   card: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '100%',
//     padding: '20px 0 20px 20px',
//     margin: '10px 0 10px 0',
//     border: '1px solid lightgray',
//   },
//   btn: {
//     // display: 'absolute',
//     // position: 'relative',
//     // top: '50px',
//     // left: '30px',
//     margin: '60px 30px 0 0',
//     height: '30px', 
//   }
// }));
// const getComp = async comp => {
//   return await JoblyApi.getCompany(comp);
// }
const Page404 = () => {
  // const classes = useStyles();
  return (
    <>
      <h1>404 page not found</h1>
    </>
  );  
}

export default Page404;
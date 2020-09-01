import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Button } from '@material-ui/core';
import {useFormInput} from '../hooks/useFormInput';
// import '../hooks/useSearchContext';
import { useHistory } from "react-router-dom";
// import useSearchContext from '../hooks/useSearchContext';
import {SearchContext} from '../context/SearchContext';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    width: '100%',
    margin: '30px 0 20px 0',
    // border: '1px solid red'
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    marginRight: '5px',
  },
}));

export default function Search({next}) {
  const classes = useStyles();
  const searchText = useFormInput("");
  const history = useHistory();
  const {setSearch} = useContext(SearchContext);

  const handleSubmit = () => {
    setSearch(searchText);
    history.push(`/${next}`);
  }

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <OutlinedInput 
        className={classes.input} 
        name="username" 
        placeholder={`Search for a ${next}`} 
        variant="outlined" 
        {...searchText}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Search
      </Button>
    </form>
  );
}

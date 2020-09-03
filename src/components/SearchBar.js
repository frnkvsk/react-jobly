import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { SearchContext } from '../context/SearchContext';

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

export default function Search({nextPage}) {
  const classes = useStyles();
  const history = useHistory();
  let [searchText, setSearchText] = useState("");
  
  const searchContext = useContext(SearchContext);

  const handleSubmit = () => {    
    history.push(`/${nextPage}`);
    setSearchText("");
  }
  const handleChange = (e) => {
    setSearchText(e.target.value);
    searchContext.setSearchState({search: e.target.value});
  }
  return (
    <form className={classes.form} noValidate autoComplete="off">
      <OutlinedInput 
        className={classes.input} 
        id="searchInput" 
        placeholder={`Search for a ${nextPage}`} 
        variant="outlined" 
        value={searchText}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Search
      </Button>
    </form>
  );
}

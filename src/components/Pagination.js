import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { PageCountContext } from '../context/PageCountContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
}));

export default function PaginationComp({pageCount}) {
  const classes = useStyles();
  const pageCountContext = useContext(PageCountContext);
  let {pagesTotal, pageCurr} = pageCountContext.pageContext;  
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    const getValue = async () => {
      pageCountContext.setPageContext({
        pagesTotal: pageCount,
        pageCurr: page
      });
    }
    getValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount,pagesTotal, page]);
  
  const handleChange = (event, value) => {
    setPage(value - 1);
  }

  return (
    <div className={classes.root}>
        <Typography>Page: {pageCurr+1}</Typography>
        <Pagination count={~~(pagesTotal/10)} page={+pageCurr+1} onChange={handleChange} />
      </div> 
  );
}

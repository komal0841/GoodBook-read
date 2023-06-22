import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useGlobalContext } from './context';

export default function Pagination() {
  const { page, nbPages, decPage, inPage, count,setCount,} = useGlobalContext();
  const handleItemPerPage = () => {
    const newCount = count - 1 >= 1 ? count - 1 : 1;
    setCount(newCount);
  }
 

  return (
    <>
      <div className='botm'>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <Box
        sx={{
          width: '400px',
          display: 'flex'
        }}
      >
        <Typography>Items per page - </Typography>
        <Box sx={{ border: '2px solid black', display: 'flex' }}>
          <Typography sx={{ ml: '3px' }}>{count}</Typography>
          <Button onClick={handleItemPerPage}>
                <KeyboardArrowDownIcon />
              </Button>
        </Box>
       
      </Box>
       
      <Box
        sx={{
          width: '300px',
          display: 'flex'
        }}
      >
        <Button sx={{ backgroundColor: 'gray', color: 'white' }} onClick={()=>decPage(0)}>Prev</Button>
        <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid black' }}>
          <Typography>{page + 1} of {nbPages}</Typography>
         
        </Box>
        <Button sx={{ backgroundColor: 'gray', color: 'white' }}  onClick={()=>inPage()}>Next</Button>
      </Box>
    </Box>
      </div>
    </>
  );
}

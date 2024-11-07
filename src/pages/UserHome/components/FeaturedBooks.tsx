import React from 'react';
import { Box, Typography } from '@mui/material';

const FeaturedBooks: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#9B86BD',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '16px',
        justifyContent: 'space-between',
        borderRadius: '6px',
        width: '70%',
        margin: '50px',
      }}
    >

      {Array.from({ length: 15 }).map((_, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: '#D9D9D9',
            width: '30%',
            height: '20vh',
            margin: '10px',
            padding: '20px',
            boxSizing: 'border-box',
            borderRadius: '6px',
            textAlign: 'center',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
          }}
        >
          <Typography variant="h6">RESEARCH TITLE</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FeaturedBooks;

import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import sizeConfigs from '../../configs/sizeConfigs';

const sizes = sizeConfigs.footer

export default function Footer() {
  return (
    <>
      <Box 
        component='footer'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          height: `${sizes.height}`,
          backgroundColor: 'background.dark',
        }}
      >
        <Typography 
          component="span" 
          sx={{
            fontSize: '1rem',
            fontWeight: 300,
            color: 'white'
          }}
        >
          eRifaTec Team &copy; 2023
        </Typography>
        <Typography 
          component="span"
          sx={{
            fontSize: '0.7rem',
            fontWeight: 300,
            color: 'white'
          }}
        >
          Marco Antônio, Lemuel e Arthur Bortolozo
        </Typography>
      </Box>
    </>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Feed from '../componentes/feed/Feed';

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        p: '20px 0'
      }}>
        <Feed />
      </Box>
    </>
  );
}

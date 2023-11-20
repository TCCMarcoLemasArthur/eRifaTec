import React from 'react';

import Box from '@mui/material/Box';

import FormRifa from '../componentes/formrifa/FormRifa';

export default function CriarRifa() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <FormRifa />
    </Box>
  );
}
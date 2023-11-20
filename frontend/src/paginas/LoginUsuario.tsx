import React from 'react';

import Box from '@mui/material/Box';

import FormLogin from "../componentes/formlogin/FormLogin";

export default function LoginUsuario() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <FormLogin />
    </Box>
  );
}

import React from 'react';

import Box from '@mui/material/Box';

import FormUsuario from '../componentes/formusuario/FormUsuario';

export default function PerfilUsuario() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <FormUsuario cadastro={false} />
    </Box>
  );
}
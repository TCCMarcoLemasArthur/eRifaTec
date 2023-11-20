import React from 'react';

import Box from '@mui/material/Box';

import FormUsuario from '../componentes/formusuario/FormUsuario';

export default function CadastroUsuario() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <FormUsuario cadastro />
    </Box>
  );
}

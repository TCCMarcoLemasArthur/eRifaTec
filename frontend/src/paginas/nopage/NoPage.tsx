import React from 'react';

import Alert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';
import Box from "@mui/material/Box";

import styles from './noPageStyles';

export default function NoPage() {
  return (
    <Box sx={styles.container}>
      <Alert variant="filled" severity="error" sx={styles.alert}>
        <AlertTitle sx={styles.alertTitle}>Erro 404</AlertTitle>
        Página não encontrada
      </Alert>
    </Box>
  );
}
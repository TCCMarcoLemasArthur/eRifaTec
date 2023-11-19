import React from 'react';
import styles from '../estilos/noPageStyles';

import Alert from "@mui/material/Alert";
import AlertTitle from '@mui/material/AlertTitle';
import Container from "@mui/material/Container";


export default function NoPage() {
  return (
    <>
      <Container sx={styles.container}>
        <Alert variant="filled" severity="error" sx={styles.alert}>
          <AlertTitle sx={styles.alertTitle}>Erro 404</AlertTitle>
          Página não encontrada
        </Alert>
      </Container>
    </>
  );
}
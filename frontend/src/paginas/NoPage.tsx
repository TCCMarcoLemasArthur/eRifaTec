import React from 'react'
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import styles from '../estilos/noPageStyles';

import Alert from "@mui/material/Alert"
import AlertTitle from '@mui/material/AlertTitle';
import Container from "@mui/material/Container"


export default function NoPage() {
  return (
    <>
      <Header />
      <Container sx={styles.container}>
        <Alert variant="filled" severity="error" sx={styles.alert}>
          <AlertTitle sx={styles.alertTitle}>Erro 404</AlertTitle>
          Página não encontrada
        </Alert>
      </Container>
      <Footer />
    </>
  );
}
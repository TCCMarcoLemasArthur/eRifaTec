import React from 'react'
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import FormUsuario from '../componentes/FormUsuario';

export default function PerfilUsuario() {
  return (
    <>
      <Header />
      <FormUsuario cadastro={false} />
      <Footer />
    </>
  );
}
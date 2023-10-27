import React from 'react'
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import GridUsuarios from '../componentes/GridUsuarios';

export default function ListarUsuarios() {
  
  return (
    <>
      <Header />
      <GridUsuarios />
      <Footer />
    </>
  );
}
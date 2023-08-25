import React from 'react'
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import FormUsuario from '../componentes/FormUsuario';


export default function CadastroUsuario() {
    return (
        <>
            <Header />
            <FormUsuario cadastro />
            <Footer />
        </>
    );
}

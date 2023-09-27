import React from 'react'
import HeaderUI from "../componentes/HeaderUI";
import Footer from "../componentes/Footer";
import FormUsuario from '../componentes/FormUsuario';


export default function CadastroUsuario() {
    return (
        <>
            <HeaderUI />
            <FormUsuario cadastro />
            <Footer />
        </>
    );
}

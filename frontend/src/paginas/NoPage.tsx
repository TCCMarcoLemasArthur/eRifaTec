import React from 'react'
import HeaderUI from "../componentes/HeaderUI";
import Footer from "../componentes/Footer";
import '../estilos/nopage.css'


export default function NoPage() {
    return (
        <>
            <HeaderUI />
            <div className="nopage">
                <h1>Erro 404: Página não encontrada!</h1>
            </div>
            <Footer />
        </>
    );
}
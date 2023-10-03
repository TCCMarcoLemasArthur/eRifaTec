import React from 'react'
import HeaderUI from "../componentes/HeaderUI";
import Footer from "../componentes/Footer";
import Alert from "@mui/material/Alert"
import AlertTitle from '@mui/material/AlertTitle';
import Container from "@mui/material/Container"
import '../estilos/nopage.css'


export default function NoPage() {
    return (
        <>
            <HeaderUI />
            <Container sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                minHeight: "500px"
            }}>
                <Alert variant="filled" severity="error" sx={{ 
                    bgcolor: "error.main", 
                    width: "90%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <AlertTitle>Error 404</AlertTitle>
                    Página não encontrada
                </Alert>
            </Container>
            <Footer />
        </>
    );
}
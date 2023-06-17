import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import '../estilos/nopage.css'

export default function NoPage() {
    return (
        <>
            <Header />
            <div className="nopage">
                <h1>Erro 404: Página não encontrada!</h1>
            </div>
            <Footer />
        </>
    );
}
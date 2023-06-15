import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import FormUsuario from '../componentes/FormUsuario';

// TODO criar elementos Header, menu, footer entre outros

export default function CadastroUsuario() {
    return (
        <>
            <Header />
            <FormUsuario cadastro />
            <Footer />
        </>
    );
}

import FormLogin from "../componentes/FormLogin";
import FormUsuario from '../componentes/FormUsuario';

// TODO criar elementos Header, menu, footer entre outros

export default function LoginUsuario() {
    return (
        <>
            <FormLogin />
            <FormUsuario cadastro />
        </>
    );
}

import { Navegador } from "../../commom/Navegador/Navegador";
import { useForm } from "react-hook-form"
import './Cadastro.css';
import history from "../../../history"
import { CadastroUser } from "../../../api/Auth";

function FormularioCadastro() {

    const { register, handleSubmit } = useForm();

    const Submit = (usuario) => {
        CadastroUser(usuario).then((response) => {
            console.log(response);
            history.push("/login");
        }).catch((error) => {
            console.log(error);
        })
    };  
    return (
        <form onSubmit={handleSubmit(Submit)}>
            <div className="inputCadastro">
                Nome: <input name="nome" type="text" placeholder="Nome" ref={register} /> <br />
            </div>
            <div className="inputCadastro">
                Email: <input name="email" type="text" placeholder="Email" ref={register} /> <br />
            </div>
            <div className="inputCadastro">
                Senha: <input name="senha" type="password" placeholder="Senha" ref={register} /> <br />
            </div>

            <button type="submit">Enviar </button>
        </form>
    )
}

export function Cadastro() {
    return (
        <div>
            <Navegador></Navegador>
            <FormularioCadastro></FormularioCadastro>

        </div>
    );
}
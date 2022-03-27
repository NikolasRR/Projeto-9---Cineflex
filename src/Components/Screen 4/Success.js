import {useLocation, useNavigate} from "react-router-dom";

function Success () {
    const location = useLocation();
    const navigate = useNavigate();
    const {cpf, name, reservedSeats, info} = location.state;

    return (
        <main className="Success">
            <h2>Pedido feito com sucesso!</h2>
            <article>
                <h5>Filme e sessão</h5>
                <p>{info.movie.title}</p>
                <p>{info.day.date} {info.name}</p>
            </article>
            <article>
                <h5>Ingressos</h5>
                {reservedSeats.map(seat => <p key={seat}>Assento {seat}</p>)}
            </article>
            <article>
                <h5>Comprador</h5>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </article>
            <button onClick={() => navigate("/")}>Voltar para Home</button>
        </main>
    )
}

export default Success;
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seats from "./Seats";

import gif from "../../assets/imgs/loading.gif"
import Footer from "../Footer";

function SeatSelection() {
    const params = useParams();
    const [seats, setSeats] = useState([]);
    const [reservedSeats, setReservedSeats] = useState([]);

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    const navigate = useNavigate();

    function reserveSeats(ev) {
        ev.preventDefault();
        if (reservedSeats.length === 0) {
            alert("Você não selecionou nenhum assento!");
            return;
        }

        const promisse = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
            {
                ids: reservedSeats.map(seat => seat.ID),
                name: name,
                cpf: cpf
            });
        promisse.then(serverAnswer => {
            console.log(serverAnswer);
            navigate("/sucesso", {state: { info: seats, reservedSeats: reservedSeats, name: name, cpf: cpf } });
            console.log({
                ids: reservedSeats,
                name: name,
                cpf: cpf
            });
        });
        promisse.catch(serverAnswer => console.log(serverAnswer.statusText));
    }

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.SessionID}/seats`);
        promisse.then(serverAnswer => {setSeats(serverAnswer.data); console.log(serverAnswer)});
        promisse.catch(serverAnswer => console.log(serverAnswer.statusText));
    }, [params]);
    return seats.length !== 0 ? (
        <>
            <main className="SeatSelection">
                <h2>Selecione o(s) assento(s)</h2>
                <section className="Seats" >
                    {seats.seats.map(seat => <Seats key={seat.id} seat={seat} reservedSeats={reservedSeats} setReservedSeats={setReservedSeats} />)}
                </section>
                <section className="SeatStatus">
                    <article>
                        <div className="selected"></div>
                        Selecionado
                    </article>
                    <article>
                        <div className="available"></div>
                        Disponível
                    </article>
                    <article>
                        <div className="unavailable"></div>
                        Indisponível
                    </article>
                </section>
                <section className="BuyerInfo">
                    <form onSubmit={reserveSeats}>
                        <label>Nome do comprador:</label>
                        <input onChange={ev => setName(ev.target.value)} type="text" placeholder="   Digite seu nome..." value={name} required></input>
                        <label>CPF do comprador:</label>
                        <input onChange={ev => setCpf(ev.target.value)} type="number" placeholder="   Digite seu CPF..." value={cpf} required></input>
                        <button type="submit">Reservar assento(s)</button>
                    </form>
                </section>
            </main>
            <Footer movie={seats.movie} day={seats.day.weekday} session={seats.name} />
        </>
    ) : (
        <img className="loadingGIF" src={gif} alt="loading movies" />
    )
}

export default SeatSelection;
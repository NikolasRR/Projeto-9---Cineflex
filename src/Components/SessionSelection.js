import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Session from "./Session";

function SessionSelection() {
    const params = useParams();
    const [movieSessions, setMovieSessions] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.MovieID}/showtimes`);
        promisse.then(serverAnswer => setMovieSessions(serverAnswer.data.days));
        promisse.catch(serverAnswer => console.log(serverAnswer.statusText));
    }, []);

    return (
        <main className="SessionSelection">
            <h2>Selecione o horário</h2>
            {movieSessions.map(session => <Session session={session} key={session.id} />)}
        </main>
    )
}

export default SessionSelection;
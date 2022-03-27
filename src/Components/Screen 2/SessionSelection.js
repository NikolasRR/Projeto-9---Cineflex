import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Session from "./Session";

import gif from "../../assets/imgs/loading.gif"
import Footer from "../Footer";

function SessionSelection() {
    const params = useParams();
    const [movieSessions, setMovieSessions] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.MovieID}/showtimes`);
        promisse.then(serverAnswer => setMovieSessions(serverAnswer.data));
        promisse.catch(serverAnswer => console.log(serverAnswer.statusText));
    }, [params]);

    return movieSessions.length !== 0 ? (
        <>
        <main className="SessionSelection">
            <h2>Selecione o horário</h2>
            {movieSessions.days.map(session => <Session session={session} key={session.id} />)}
        </main>
        <Footer movie={movieSessions}/>
        </>
    ) : (
        <img className="loadingGIF" src={gif} alt="loading movies" />
    )
}

export default SessionSelection;
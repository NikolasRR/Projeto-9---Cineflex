import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "./Movies";

function MovieSelection({loading_gif}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then(serverAnswer => setMovies(serverAnswer.data));
        promisse.catch(serverAnswer => console.log(serverAnswer.statusText));
    }, [])

    return movies ? (
        <main className="MovieSelection">
            <h2>Selecione o filme</h2>
            <section className="Movies">
                {movies.map(movie => <Movies movie={movie} key={movie.id}  />)}
            </section>
        </main>
    ) : (
        <img src={loading_gif} alt="loading movies" />
    )
}

export default MovieSelection;
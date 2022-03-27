import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "./Movies";

import gif from "../../assets/imgs/loading.gif";


function MovieSelection() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then(serverAnswer => setMovies(serverAnswer.data));
        promisse.catch(serverAnswer => console.log(serverAnswer.statusText));
    }, []);

    return movies.length !== 0 ? (
        <main className="MovieSelection">
            <h2>Selecione o filme</h2>
            <section className="Movies">
                {movies.map(movie => <Movies movie={movie} key={movie.id}  />)}
            </section>
        </main>
    ) : (
        <img className="loadingGIF" src={gif} alt="loading movies" />
    )
}

export default MovieSelection;
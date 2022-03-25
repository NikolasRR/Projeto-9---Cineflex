import { Link } from "react-router-dom";

function Movies({ movie }) {
    return (
        <Link to={`/filme/${movie.id}`} >
            <img src={movie.posterURL} alt={movie.title} />
        </Link>
    )
}

export default Movies;
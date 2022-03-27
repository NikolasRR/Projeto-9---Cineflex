import { Link } from "react-router-dom";

function Session({ session }) {
    const { date, weekday, showtimes } = session;
    return (
        <article className="Session" >
            <p>{`${weekday} - ${date}`}</p>
            {showtimes.map(time =>
                <Link to={`/sessao/${time.id}`} key={time.id} style={{textDecoration: 'none'}} >
                    <div>
                        {time.name}
                    </div>
                </Link>
            )}
        </article>
    )
}

export default Session;
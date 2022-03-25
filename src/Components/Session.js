
function Session({ session }) {
    const { date, weekday, showtimes } = session;
    return (
        <article className="Session" >
            <p>{`${weekday} - ${date}`}</p>
            {showtimes.map(time => <div key={time.id} >{time.name}</div>)}
        </article>
    )
}

export default Session;
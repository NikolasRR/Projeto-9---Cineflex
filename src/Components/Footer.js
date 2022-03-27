function Footer ({movie, day, session}) {
    const {title, posterURL} = movie;
    return (
        <footer className="Footer">
            <div>
                <img src={posterURL} alt={title} />
            </div>
            <div>
            <h4>{title}</h4>
            {day ? (<h4>{day} - {session}</h4>) : (null)}
            </div>
        </footer>
    )
}

export default Footer;
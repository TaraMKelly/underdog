

function HomeInfo({ homeTeam, homeMl, homeSpr, homePrice }) {
//add date
    return (
        <div>
            <h2>{homeTeam}</h2>
            <p>point spread: {homeSpr} {homePrice} </p>
            <p>money line: {homeMl}</p>
        </div>
    )
}

export default HomeInfo

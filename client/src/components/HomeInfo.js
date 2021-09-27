

function HomeInfo({ homeTeam, homeMl, homeSpr, homePrice }) {
//add date
    return (
        <div>
            <h2>{homeTeam}</h2>
            <p>point spread: {homeSpr} {homePrice} </p>
            {/* {homeSpr.price > 0 ? `+${homeSpr.price}` : homeSpr.price}</p> */}
            <p>money line: {homeMl}</p>
        </div>
    )
}

export default HomeInfo

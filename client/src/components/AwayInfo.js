

function AwayInfo({ awayTeam, awayMl, awaySpr, awayPrice }) {
//add date
    return (
        <div>
            <h2>{awayTeam}</h2>
            <p>point spread: {awaySpr} {awayPrice} </p>
            {/* {awaySpr.price > 0 ? `+${awaySpr.price}` : awaySpr.price}</p> */}
            <p>money line: {awayMl}</p>
        </div>
    )
}

export default AwayInfo

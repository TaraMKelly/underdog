

function AwayInfo({ awayTeam, awayMl, awaySpr, awayPrice }) {
//add date
    return (
        <div>
            <h2>{awayTeam}</h2>
            <p>point spread: {awaySpr} {awayPrice}</p>
            <p>money line: {awayMl}</p>
        </div>
    )
}

export default AwayInfo

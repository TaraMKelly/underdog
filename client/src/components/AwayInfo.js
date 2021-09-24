

function AwayInfo({ awayML, awaySpr }) {
//add date
    return (
        <div>
            <h2>{awaySpr.name}</h2>
            <p>point spread: {awaySpr.point > 0 ? `+${awaySpr.point}` : awaySpr.point} 
            {awaySpr.price > 0 ? `+${awaySpr.price}` : awaySpr.price}</p>
            <p>money line: {awayML.price > 0 ? `+${awayML.price}` : awayML.price}</p>
        </div>
    )
}

export default AwayInfo
